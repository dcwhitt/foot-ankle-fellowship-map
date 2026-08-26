"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { aofasUrl, programs, sourceUrl, type Program } from "./programs";

declare global {
  interface Window { L?: any; }
}

const regions = ["All", "Northeast", "South", "Midwest", "West", "Canada"] as const;

function Map({ items, selected, onSelect }: { items: Program[]; selected?: Program; onSelect: (p: Program) => void }) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const layer = useRef<any>(null);

  useEffect(() => {
    const load = () => {
      if (!el.current || !window.L || map.current) return;
      map.current = window.L.map(el.current, { zoomControl: false, scrollWheelZoom: true }).setView([39.2, -96.2], 4);
      window.L.control.zoom({ position: "bottomright" }).addTo(map.current);
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom: 18,
      }).addTo(map.current);
      layer.current = window.L.layerGroup().addTo(map.current);
    };
    if (window.L) load();
    else {
      const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.appendChild(css);
      const script = document.createElement("script"); script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"; script.onload = load; document.head.appendChild(script);
    }
    return () => { map.current?.remove(); map.current = null; };
  }, []);

  useEffect(() => {
    if (!map.current || !layer.current || !window.L) return;
    layer.current.clearLayers();
    const bounds: [number, number][] = [];
    items.forEach((p) => {
      const active = selected?.code === p.code;
      const icon = window.L.divIcon({
        className: "pin-shell",
        html: `<span class="map-pin${active ? " active" : ""}"><b>${p.positions ?? "•"}</b></span>`,
        iconSize: [34, 40], iconAnchor: [17, 34], popupAnchor: [0, -30],
      });
      const marker = window.L.marker([p.lat, p.lng], { icon }).addTo(layer.current);
      marker.bindTooltip(`<strong>${p.name}</strong><br>${p.city}, ${p.state}`, { direction: "top", offset: [0, -27] });
      marker.on("click", () => onSelect(p));
      bounds.push([p.lat, p.lng]);
    });
    if (selected) map.current.flyTo([selected.lat, selected.lng], Math.max(map.current.getZoom(), 6), { duration: .6 });
    else if (bounds.length) map.current.fitBounds(bounds, { padding: [38, 38], maxZoom: 5 });
  }, [items, selected, onSelect]);

  return <div ref={el} className="map" aria-label="Interactive map of accredited fellowship programs" />;
}

export default function FellowshipExplorer() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<(typeof regions)[number]>("All");
  const [selected, setSelected] = useState<Program>();
  const [listOpen, setListOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((p) => (region === "All" || p.region === region) && (!q || `${p.name} ${p.city} ${p.state} ${p.code}`.toLowerCase().includes(q)));
  }, [query, region]);

  const select = (p: Program) => { setSelected(p); setListOpen(false); };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Foot and Ankle Fellowship Map home"><span>FA</span><b>Fellowship Map</b></a>
        <nav><a href="#explore">Explore programs</a><a href="#about">About</a><a className="source-link" href={sourceUrl} target="_blank" rel="noreferrer">AOFAS source ↗</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span></span> 2026–2027 AOFAS-accredited programs</div>
        <h1>Find your foot &amp; ankle<br/><em>fellowship.</em></h1>
        <p>Explore accredited programs by geography, compare key details, and go straight to primary sources—all in one place.</p>
        <div className="stats"><div><strong>{programs.length}</strong><span>accredited programs</span></div><div><strong>{new Set(programs.map(p => p.state)).size}</strong><span>states + provinces</span></div><div><strong>{programs.reduce((n,p) => n + (p.positions ?? 0), 0)}+</strong><span>verified positions</span></div></div>
      </section>

      <section className="explorer" id="explore">
        <div className="explore-head"><div><span className="section-no">01</span><h2>Explore the programs</h2></div><p>Select a pin or program to see details.</p></div>
        <div className="filters">
          <label className="search"><span>⌕</span><input value={query} onChange={(e) => { setQuery(e.target.value); setSelected(undefined); }} placeholder="Search program, city, state, or SF Match code" aria-label="Search programs" /></label>
          <div className="region-tabs" role="group" aria-label="Filter by region">{regions.map(r => <button key={r} className={region === r ? "active" : ""} onClick={() => { setRegion(r); setSelected(undefined); }}>{r}</button>)}</div>
        </div>
        <button className="mobile-list-toggle" onClick={() => setListOpen(v => !v)}>{listOpen ? "Show map" : `Show ${filtered.length} programs`}</button>
        <div className={`workspace ${listOpen ? "list-open" : ""}`}>
          <aside className="program-list" aria-label="Fellowship programs">
            <div className="list-count"><b>{filtered.length}</b> programs</div>
            {filtered.map((p, i) => <button key={p.code} onClick={() => select(p)} className={selected?.code === p.code ? "selected" : ""}>
              <span className="index">{String(i + 1).padStart(2, "0")}</span><span className="list-copy"><b>{p.name}</b><small>{p.city}, {p.state} · Code {p.code}</small></span><span className="arrow">↗</span>
            </button>)}
            {!filtered.length && <div className="empty">No programs match those filters.</div>}
          </aside>
          <div className="map-wrap">
            <Map items={filtered} selected={selected} onSelect={select} />
            <div className="map-key"><span><i></i> Accredited program</span><small>Number indicates verified fellowship positions</small></div>
            {selected && <article className="detail-card">
              <button className="close" onClick={() => setSelected(undefined)} aria-label="Close program details">×</button>
              <div className="detail-code">SF MATCH · {selected.code}</div>
              <h3>{selected.name}</h3>
              <p className="location">{selected.city}, {selected.state}</p>
              <div className="detail-grid">
                <div><span>Program director</span><b>{selected.director ?? "See AOFAS listing"}</b></div>
                <div><span>Positions</span><b>{selected.positions ?? "See listing"}</b></div>
                <div><span>Region</span><b>{selected.region}</b></div>
              </div>
              <div className="detail-actions"><a className="primary" href={aofasUrl(selected)} target="_blank" rel="noreferrer">View AOFAS profile ↗</a>{selected.website && <a href={selected.website} target="_blank" rel="noreferrer">Program website ↗</a>}</div>
            </article>}
          </div>
        </div>
      </section>

      <section className="about" id="about"><span className="section-no">02</span><div><h2>A clearer starting point for fellowship research.</h2><p>This independent directory organizes the AOFAS 2026–2027 accredited program list geographically. Program facts link back to AOFAS and official program websites so applicants can verify details at the source.</p><p className="note">Not affiliated with or endorsed by AOFAS or SF Match. Program information can change; always confirm application details with the program and SF Match.</p></div></section>
      <footer><div className="brand"><span>FA</span><b>Fellowship Map</b></div><p>Built as a public resource for future foot &amp; ankle surgeons.</p><a href={sourceUrl} target="_blank" rel="noreferrer">Data source: AOFAS ↗</a></footer>
    </main>
  );
}
