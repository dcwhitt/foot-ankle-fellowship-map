export type Program = {
  name: string;
  code: string;
  city: string;
  state: string;
  region: "Northeast" | "South" | "Midwest" | "West" | "Canada";
  lat: number;
  lng: number;
  anchor: string;
  website?: string;
  positions?: number;
  director?: string;
};

const AOFAS = "https://www.aofas.org/education/fellowship-match-program/orthopaedic-foot-and-ankle-fellowship-programs";

export const sourceUrl = AOFAS;

export const programs: Program[] = [
  { name: "Advanced Orthopedics of Arcadia", code: "5619", city: "Phoenix", state: "AZ", region: "West", lat: 33.509, lng: -112.014, anchor: "graves", positions: 1, director: "Stanley Graves, MD" },
  { name: "Alabama Foot & Ankle Fellowship at UAB", code: "3578", city: "Birmingham", state: "AL", region: "South", lat: 33.506, lng: -86.806, anchor: "alabama", website: "https://www.uab.edu/medicine/orthopaedics", positions: 1, director: "Ashish Shah, MD" },
  { name: "Allegheny General Hospital", code: "3971", city: "Pittsburgh", state: "PA", region: "Northeast", lat: 40.457, lng: -80.004, anchor: "allegheny", website: "https://www.ahn.org/", positions: 1, director: "James Sferra, MD" },
  { name: "American Sports Medicine Institute (ASMI)", code: "5430", city: "Birmingham", state: "AL", region: "South", lat: 33.508, lng: -86.788, anchor: "asmi", website: "https://www.asmi.org/", positions: 1, director: "Norman Waldrop, MD" },
  { name: "Baptist Health South Florida", code: "4529", city: "Coral Gables", state: "FL", region: "South", lat: 25.741, lng: -80.276, anchor: "baptist", website: "https://academics.baptisthealth.net/residencies-and-fellowships/medical-residencies-and-fellowships/orthopedic-surgery/foot-and-ankle-orthopedic-surgery-fellowship", positions: 1, director: "Cary Chapman, MD" },
  { name: "Baylor University Medical Center", code: "3973", city: "Dallas", state: "TX", region: "South", lat: 32.79, lng: -96.78, anchor: "baylor", positions: 3, director: "Jacob Zide, MD" },
  { name: "Brown University", code: "3608", city: "East Providence", state: "RI", region: "Northeast", lat: 41.808, lng: -71.366, anchor: "brown", positions: 1, director: "Brad Blankenhorn, MD" },
  { name: "Cedars-Sinai Medical Center", code: "5043", city: "Los Angeles", state: "CA", region: "West", lat: 34.075, lng: -118.38, anchor: "cedars", website: "https://losangelesfootandanklefellowship.weebly.com/", positions: 1, director: "David Thordarson, MD" },
  { name: "Medical University of South Carolina", code: "7706", city: "Charleston", state: "SC", region: "South", lat: 32.784, lng: -79.946, anchor: "charleston", positions: 1, director: "Christopher E. Gross, MD" },
  { name: "Cleveland Clinic Foundation", code: "3602", city: "Cleveland", state: "OH", region: "Midwest", lat: 41.502, lng: -81.62, anchor: "cleveland", positions: 1, director: "Sara Lyn Miniaci-Coxhead, MD" },
  { name: "Corewell Health Beaumont University Hospital", code: "5208", city: "Royal Oak", state: "MI", region: "Midwest", lat: 42.515, lng: -83.192, anchor: "beaumont", positions: 1, director: "Paul Fortin, MD" },
  { name: "Duke University Medical Center", code: "3595", city: "Durham", state: "NC", region: "South", lat: 36.007, lng: -78.938, anchor: "duke", website: "https://ortho.duke.edu/", positions: 4, director: "Mark Easley, MD" },
  { name: "Emory Orthopaedic Foot and Ankle Fellowship", code: "5388", city: "Atlanta", state: "GA", region: "South", lat: 33.802, lng: -84.329, anchor: "emory", positions: 1, director: "Sameh Labib, MD" },
  { name: "Grand Rapids Orthopaedic Foot and Ankle Fellowship", code: "3592", city: "Grand Rapids", state: "MI", region: "Midwest", lat: 43.004, lng: -85.593, anchor: "grandrapids", positions: 3, director: "Donald Bohay, MD, FACS" },
  { name: "Harbor–UCLA Medical Center", code: "4675", city: "Pasadena", state: "CA", region: "West", lat: 34.142, lng: -118.148, anchor: "ucla", positions: 1, director: "Thomas Harris, MD" },
  { name: "Harvard MGB Orthopaedic Foot and Ankle Fellowship", code: "11998", city: "Boston", state: "MA", region: "Northeast", lat: 42.363, lng: -71.069, anchor: "harvardmgb", website: "https://footandankle.massgeneralbrigham.org/", positions: 4, director: "Jeremy Smith, MD" },
  { name: "Hospital for Special Surgery", code: "3597", city: "New York", state: "NY", region: "Northeast", lat: 40.765, lng: -73.953, anchor: "hss", website: "https://www.hss.edu/foot-and-ankle-fellowship.asp", positions: 3, director: "Mark Drakos, MD" },
  { name: "Medical College of Wisconsin", code: "3614", city: "Milwaukee", state: "WI", region: "Midwest", lat: 43.043, lng: -88.022, anchor: "wisconsin", positions: 1, director: "Jonathan Kraus, MD" },
  { name: "MedStar Union Memorial Hospital", code: "3968", city: "Baltimore", state: "MD", region: "South", lat: 39.328, lng: -76.615, anchor: "medstar", positions: 2, director: "Walter Hembree, MD" },
  { name: "Mercy Medical Center", code: "3589", city: "Baltimore", state: "MD", region: "South", lat: 39.292, lng: -76.613, anchor: "mercy", positions: 4, director: "Rebecca Cerrato, MD" },
  { name: "Midwest Orthopaedics at Rush", code: "4917", city: "Chicago", state: "IL", region: "Midwest", lat: 41.875, lng: -87.668, anchor: "rush", positions: 1, director: "Simon Lee, MD" },
  { name: "New England Baptist Hospital", code: "4911", city: "Boston", state: "MA", region: "Northeast", lat: 42.329, lng: -71.107, anchor: "newengland", positions: 1, director: "Kurt Hofmann, MD" },
  { name: "Northwestern University", code: "5052", city: "Chicago", state: "IL", region: "Midwest", lat: 41.894, lng: -87.622, anchor: "northwestern", positions: 1, director: "Anish Kadakia, MD" },
  { name: "NYU Langone Orthopedic Foot & Ankle Fellowship", code: "11993", city: "New York", state: "NY", region: "Northeast", lat: 40.735, lng: -73.983, anchor: "nyu", positions: 1, director: "Kevin Schafer, MD" },
  { name: "OrthoArizona Foot and Ankle Fellowship", code: "5431", city: "Gilbert", state: "AZ", region: "West", lat: 33.319, lng: -111.724, anchor: "orthoarizona", positions: 1, director: "Jason Lake, MD" },
  { name: "OrthoCarolina", code: "3596", city: "Charlotte", state: "NC", region: "South", lat: 35.209, lng: -80.839, anchor: "orthocarolina", positions: 4, director: "Todd A. Irwin, MD" },
  { name: "Penn State College of Medicine", code: "3972", city: "Hershey", state: "PA", region: "Northeast", lat: 40.264, lng: -76.676, anchor: "pennstate", positions: 1, director: "Michael Aynardi, MD" },
  { name: "Steadman Clinic", code: "3988", city: "Vail", state: "CO", region: "West", lat: 39.642, lng: -106.38, anchor: "steadman", positions: 1, director: "C. Thomas Haytmanek, MD" },
  { name: "Thomas Jefferson University Hospital", code: "3607", city: "Philadelphia", state: "PA", region: "Northeast", lat: 39.949, lng: -75.157, anchor: "jefferson" },
  { name: "Twin Cities Orthopedics", code: "5363", city: "Minneapolis", state: "MN", region: "Midwest", lat: 44.977, lng: -93.265, anchor: "twincities" },
  { name: "UC Davis / Reno Orthopaedic Clinic", code: "4825", city: "Reno", state: "NV", region: "West", lat: 39.529, lng: -119.814, anchor: "ucdavis" },
  { name: "University of Colorado", code: "5169", city: "Aurora", state: "CO", region: "West", lat: 39.745, lng: -104.837, anchor: "colorado" },
  { name: "University of Connecticut", code: "8092", city: "Farmington", state: "CT", region: "Northeast", lat: 41.731, lng: -72.795, anchor: "uconn" },
  { name: "University of Iowa Hospitals and Clinics", code: "3585", city: "Iowa City", state: "IA", region: "Midwest", lat: 41.662, lng: -91.554, anchor: "iowa" },
  { name: "University of Louisville", code: "9183", city: "Louisville", state: "KY", region: "South", lat: 38.248, lng: -85.748, anchor: "louisville" },
  { name: "University of Pennsylvania / PA Ortho", code: "3606", city: "Philadelphia", state: "PA", region: "Northeast", lat: 39.952, lng: -75.194, anchor: "upenn" },
  { name: "University of Pittsburgh", code: "4829", city: "Pittsburgh", state: "PA", region: "Northeast", lat: 40.44, lng: -79.96, anchor: "pitt" },
  { name: "University of Rochester", code: "3969", city: "Rochester", state: "NY", region: "Northeast", lat: 43.123, lng: -77.624, anchor: "rochester" },
  { name: "University of South Carolina / Prisma Health", code: "9518", city: "Columbia", state: "SC", region: "South", lat: 34.0, lng: -81.034, anchor: "southcarolina" },
  { name: "University of Tennessee–Campbell Clinic", code: "3609", city: "Memphis", state: "TN", region: "South", lat: 35.12, lng: -89.9, anchor: "campbell" },
  { name: "UTHealth Houston", code: "3974", city: "Houston", state: "TX", region: "South", lat: 29.71, lng: -95.398, anchor: "texas" },
  { name: "University of Toronto", code: "5195", city: "Toronto", state: "ON", region: "Canada", lat: 43.653, lng: -79.383, anchor: "toronto" },
  { name: "University of Utah", code: "3612", city: "Salt Lake City", state: "UT", region: "West", lat: 40.771, lng: -111.836, anchor: "utah" },
  { name: "University of Virginia", code: "5033", city: "Charlottesville", state: "VA", region: "South", lat: 38.032, lng: -78.499, anchor: "virginia" },
  { name: "University of Washington–Harborview", code: "3975", city: "Seattle", state: "WA", region: "West", lat: 47.604, lng: -122.324, anchor: "washington" },
  { name: "UTMB Orthopedic Foot and Ankle Fellowship", code: "4557", city: "Galveston", state: "TX", region: "South", lat: 29.301, lng: -94.797, anchor: "utmb" },
  { name: "Washington University School of Medicine", code: "3594", city: "St. Louis", state: "MO", region: "Midwest", lat: 38.636, lng: -90.264, anchor: "washu" },
];

export const aofasUrl = (program: Program) => `${AOFAS}#${program.anchor}`;
