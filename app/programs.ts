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
  faculty?: string[];
  focus?: string[];
  stipend?: string;
  caseVolume?: string;
  eligibility?: string;
  research?: string;
  call?: string;
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

const details: Record<string, Partial<Program>> = {
  graves: { faculty: ["Jaycen Brown, MD"], focus: ["Trauma"] },
  alabama: { faculty: ["Michael Johnson, MD"], focus: ["Total ankle replacement", "Arthroscopy", "Forefoot", "Hindfoot", "Reconstruction"] },
  allegheny: { faculty: ["Matthew Bologna, MD"], focus: ["High-volume private practice"] },
  asmi: { faculty: ["John Kirchner, MD", "William Krauss, DO"], focus: ["Sports medicine", "Arthroscopy", "Pediatrics", "Biomechanics"], stipend: "$45,000 (amount currently listed by AOFAS; verify with program)", eligibility: "Applicants must graduate from a US ACGME-accredited orthopaedic residency; ECFMG certificate holders are not eligible.", research: "At least one basic-science or clinical project and a publishable manuscript are expected." },
  baptist: { faculty: ["Christopher Hodgkins, MD", "Thomas San Giovanni, MD"], focus: ["Trauma", "Sports medicine", "Arthroscopy", "Reconstruction"], caseVolume: "More than 600 cases during the fellowship year", research: "Clinical/basic-science participation is encouraged with protected weekly research time." },
  baylor: { faculty: ["James Brodsky, MD", "Christian Royer, MD", "Veerabhadra Reddy, MD", "David Vier, MD"], focus: ["Trauma", "Reconstruction", "Biomechanics"] },
  brown: { faculty: ["Mostafa Abousayed, MD, MSc", "Raymond Hsu, MD"], focus: ["Trauma"] },
  cedars: { faculty: ["Glenn Pfeffer, MD"], focus: ["Trauma", "Sports medicine", "Tendinopathy"] },
  charleston: { faculty: ["Daniel Scott, MD"], focus: ["Total ankle replacement", "Sports medicine", "Arthroscopy", "Hindfoot", "Reconstruction", "Charcot / limb salvage", "Deformity", "Biomechanics"] },
  cleveland: { faculty: ["Mark Berkowitz, MD", "Alan Davis, MD", "Stephen Pinney, MD"], focus: ["Total ankle replacement", "Trauma", "Arthroscopy", "Forefoot", "Reconstruction", "Deformity"] },
  beaumont: { faculty: ["Allan Grant, MD", "Sean Matuszak, MD", "Zachary Vaupel, MD", "Zein El-Zein, MD"], focus: ["Total ankle replacement", "Charcot / limb salvage", "Deformity"] },
  duke: { faculty: ["Samuel Adams, MD", "Annunziato Amendola, MD", "Cesar de Cesar Netto, MD, PhD", "Andrew Hanselman, MD", "James Nunley, MD", "Karl Schweitzer, MD"], focus: ["Total ankle replacement", "Forefoot", "Hindfoot", "Reconstruction", "Biomechanics"] },
  emory: { faculty: ["Jason Bariteau, MD", "Michelle Coleman, MD, PhD", "John Louis-Ugbo, MD"], focus: ["Trauma", "Forefoot", "Hindfoot", "Deformity"], research: "Two projects are expected, with submission to the AOFAS Annual Meeting and eventual publication as goals." },
  grandrapids: { faculty: ["John Maskill, MD"], focus: ["Adult foot & ankle surgery"] },
  ucla: { faculty: ["Arash Aminian, MD", "David Lee, MD", "Ronald Smith, MD"], focus: ["Adult foot & ankle surgery"] },
  harvardmgb: { faculty: ["Eric Bluman, MD, PhD", "Christopher Chiodo, MD", "Christopher DiGiovanni, MD", "Amgad Haleem, MD, PhD", "John Kwon, MD", "Christopher Miller, MD", "Gregory Waryasz, MD", "Lorena Bejarano-Pineda, MD", "Daniel Guss, MD, MBA", "Elizabeth Martin, MD"], focus: ["Total ankle replacement", "Trauma", "Minimally invasive", "Deformity", "Biomechanics"] },
  hss: { faculty: ["Steve Behrens, MD", "Elizabeth Cody, MD", "Jonathan Deland, MD", "Constantine Demetracopoulos, MD", "Andrew Elliott, MD", "Scott Ellis, MD", "Holly Johnson, MD", "David Levine, MD", "Martin O'Malley, MD", "Matthew Roberts, MD"], focus: ["Trauma", "Reconstruction", "Pediatrics", "Deformity"], research: "Two research projects and two manuscripts are expected by the end of the academic year." },
  wisconsin: { faculty: [], focus: ["Trauma"], eligibility: "Requires completion of an approved US orthopaedic residency and eligibility for a Wisconsin medical license." },
  medstar: { faculty: ["Gregory Guyton, MD"], focus: ["Total ankle replacement", "Trauma", "Forefoot", "Hindfoot", "Reconstruction", "Biomechanics"] },
  mercy: { faculty: ["John Campbell, MD", "Clifford Jeng, MD", "Patrick Maloney, MD", "Lew Schon, MD"], focus: ["Trauma", "Reconstruction", "Deformity"] },
  rush: { faculty: ["Daniel Bohl, MD, MPH", "Johnny Lin, MD", "Edward Hur, MD"], focus: ["Total ankle replacement", "Trauma", "Reconstruction", "Charcot / limb salvage", "Deformity"] },
  newengland: { faculty: ["Mark Slovenkai, MD"], focus: ["Total ankle replacement", "Arthroscopy", "Forefoot", "Hindfoot", "Reconstruction"], eligibility: "Accepts graduates of US and Canadian residency programs; see the AOFAS listing for the full rule." },
  northwestern: { faculty: ["Armen Kelikian, MD", "Milap Patel, DO"], focus: ["Total ankle replacement", "Trauma", "Reconstruction", "Biomechanics"] },
  nyu: { faculty: ["John Kennedy, MD", "Raymond Walls, MD", "Steven Sheskier, MD", "Anny Hsu, MD", "Lew Schon, MD", "Rebekah Belayneh, MD"], focus: ["Total ankle replacement", "Arthroscopy", "Forefoot", "Reconstruction", "Deformity"] },
  orthoarizona: { faculty: ["David Jaffe, MD", "Parisa Morris, MD", "Jason Patterson, MD"], focus: ["Trauma", "Forefoot", "Hindfoot", "Reconstruction", "Charcot / limb salvage", "Pediatrics"] },
  orthocarolina: { faculty: ["Bruce Cohen, MD", "Carroll Jones, MD", "Kent Ellington, MD", "Scott Shawen, MD", "Samuel Ford, MD", "Amanda Fletcher, MD", "Robert Anderson, MD"], focus: ["Total ankle replacement", "Trauma", "Sports medicine", "Forefoot", "Reconstruction", "Charcot / limb salvage", "Deformity"] },
  pennstate: { faculty: ["Umur Aydogan, MD", "Paul Juliano, MD", "Ashlee MacDonald, MD"], focus: ["Total ankle replacement", "Trauma", "Sports medicine", "Reconstruction", "Charcot / limb salvage", "Pediatrics", "Deformity", "Biomechanics"], research: "Research participation and production of a scholarly project are expected." },
  steadman: { faculty: [], focus: ["Trauma", "Sports medicine", "Arthroscopy", "Forefoot", "Hindfoot", "Reconstruction"] },
  jefferson: { faculty: ["Joseph Daniel, DO", "Thomas Dowd, MD", "Daniel Fuchs, MD", "Anny Hsu, MD", "Gregory Kirwan, MD", "Joseph O'Neil, MD", "Andre Pagliaro, MD", "Rachel Shakked, MD", "Bret Smith, DO"], focus: ["Total ankle replacement", "Trauma", "Arthroscopy", "Reconstruction", "Charcot / limb salvage", "Deformity"], caseVolume: "More than 600 surgical cases annually, including 100+ ankle arthroplasties/revisions" },
  twincities: { director: "Jeffrey Seybold, MD", positions: 2, faculty: ["Paul Cammack, MD", "Bryan Den Hartog, MD", "William Engasser, MD"], focus: ["Trauma", "Forefoot", "Hindfoot", "Reconstruction", "Biomechanics"], caseVolume: "More than 550 cases annually", eligibility: "IMG applicants must hold US permanent residency; the program states it cannot sponsor visas." },
  ucdavis: { positions: 2, faculty: ["Spencer Cassinelli, MD", "Christopher Diefenbach, MD", "Christopher Kreulen, MD", "Scott Whitlow, MD"], focus: ["Adult foot & ankle surgery"] },
  colorado: { director: "Kenneth Hunt, MD", positions: 2, faculty: ["Courtney Grimsrud, MD", "Joshua Metzl, MD", "Daniel Moon, MD, MS, MBA", "Mark Myerson, MD"], focus: ["Trauma", "Reconstruction"] },
  uconn: { director: "Lauren E. Geaney, MD", faculty: ["Thomas McDonald, MD", "Raymond Sullivan, MD"], focus: ["Biomechanics"] },
  iowa: { director: "John Femino, MD", faculty: [], focus: ["Total ankle replacement", "Trauma", "Arthroscopy", "Reconstruction", "Charcot / limb salvage", "Minimally invasive", "Deformity"] },
  louisville: { director: "Victor Anciano, MD", positions: 1, faculty: ["Todd Hockenbury, DO"], focus: ["Adult foot & ankle surgery"], caseVolume: "More than 500 cases" },
  upenn: { director: "Bobby Ndu, MD", positions: 2, faculty: ["Lorraine Boakye, MD", "Wen Chao, MD", "Daniel Farber, MD", "Casey Humbyrd, MD, MBE", "L. Scott Levin, MD"], focus: ["Trauma", "Arthroscopy", "Reconstruction", "Deformity", "Biomechanics"], eligibility: "Accepts graduates of US and Canadian residency programs." },
  pitt: { positions: 3, faculty: ["Stephen Conti, MD", "MaCalus Hogan, MD, MBA", "Christopher Edwards, MD", "Lauren Lewis, MD", "William Saar, DO"], focus: ["Adult foot & ankle surgery"] },
  rochester: { director: "David J. Ciufo, MD", faculty: ["Benedict DiGiovanni, MD", "A. Samuel Flemister, MD", "John Ketz, MD"], focus: ["Adult foot & ankle surgery"], eligibility: "See the program's linked GME applicant eligibility requirements." },
  southcarolina: { director: "J. Benjamin Jackson, MD, MBA", faculty: ["Tyler Gonzalez, MD, MBA"], focus: ["Minimally invasive"], research: "The listing describes an active research program with multiple ongoing projects." },
  campbell: { director: "Clayton Bettin, MD", positions: 2, faculty: ["Benjamin Grear, MD", "Andrew Murphy, MD", "David Richardson, MD", "Carson Rider, MD"], focus: ["Trauma", "Arthroscopy", "Forefoot", "Charcot / limb salvage", "Deformity"], call: "No mandatory call is listed." },
  texas: { director: "William McGarvey, MD", positions: 2, faculty: ["Oladapo Alade, MD", "Richard Beaver, MD", "David Bloome, MD", "Taggart Gauvain, MD", "Michael Greaser, MD"], focus: ["Trauma", "Sports medicine", "Reconstruction", "Pediatrics"] },
  toronto: { director: "Johnny Lau, MD, MSc", faculty: ["Mansur Halai, MD", "Sam Park, MD"], focus: ["Total ankle replacement", "Trauma", "Forefoot", "Reconstruction"] },
  utah: { director: "Devon Nixon, MD", faculty: ["Florian Nickisch, MD", "Megan Campbell, MD"], focus: ["Trauma", "Sports medicine", "Reconstruction", "Minimally invasive", "Deformity"] },
  virginia: { director: "M. Truitt Cooper, MD", faculty: ["Joseph Park, MD"], focus: ["Total ankle replacement", "Trauma", "Sports medicine", "Arthroscopy", "Reconstruction", "Deformity"] },
  washington: { director: "David Dalstrom, MD", positions: 3, faculty: ["Stephen Benirschke, MD", "Kenneth Chin, MD", "Bruce Sangeorzan, MD"], focus: ["Trauma", "Sports medicine", "Reconstruction"], research: "The weekly experience includes protected research time and teaching conferences." },
  utmb: { director: "Vinod Panchbhavi, MD, FACS", faculty: ["Jie Chen, MD, MPH", "William Weiss, MD, MSc"], focus: ["Total ankle replacement", "Reconstruction", "Minimally invasive", "Deformity"] },
  washu: { director: "Jeremy McCormick, MD", faculty: [], focus: ["Trauma"] },
};

programs.forEach((program) => Object.assign(program, details[program.anchor] ?? {}));
