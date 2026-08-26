# Foot & Ankle Fellowship Map

An interactive map and research directory for the 2026–2027 AOFAS-accredited orthopaedic foot and ankle fellowship programs.

**Live site:** [fellowships.dcwhittingslow.com](https://fellowships.dcwhittingslow.com)

## Features

- Interactive map of all 47 accredited programs
- Search by program, city, state, or SF Match code
- Regional filters and synchronized program list
- Program directors and verified position counts where available
- Direct links to AOFAS profiles and official program websites
- Responsive desktop and mobile layouts

Program accreditation and profile information is sourced from the [AOFAS fellowship program directory](https://www.aofas.org/education/fellowship-match-program/orthopaedic-foot-and-ankle-fellowship-programs). This independent project is not affiliated with or endorsed by AOFAS or SF Match. Applicants should verify details with primary sources.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The application is built with React, vinext, and Leaflet-compatible OpenStreetMap tiles, and is deployed to Cloudflare Workers through OpenAI Sites.
