/*
  RENTAL CATALOG — edit this list to add, remove, or reprice items.

  Each item:
    name      – what it's called
    category  – must match one of the CATEGORIES ids below
    price     – rental price (number), or null to show "Ask for price"
    per       – what the price covers, e.g. "event", "day", "set of 10"
    qty       – how many are available (optional)
    desc      – a short description
    image     – optional photo path, e.g. "images/wreath.jpg"
                (leave it out to show the emoji instead)
    emoji     – shown when there's no photo
*/

const CATEGORIES = [
  { id: "christmas", label: "Christmas Décor" },
  { id: "rustic",    label: "Ranch & Rustic" },
  { id: "tables",    label: "Tables & Chairs" },
  { id: "linens",    label: "Linens & Tableware" },
];

const ITEMS = [
  // ---- Christmas Décor ----
  { name: "Decorated Christmas Tree", category: "christmas", price: 75, per: "event",
    emoji: "🎄", desc: "Full tree, already decorated with lights and ornaments. Delivered and set up." },
  { name: "Fresh-Look Wreaths", category: "christmas", price: 15, per: "each",
    emoji: "🌲", desc: "Evergreen wreaths with pine cones and red bows. Great for doors and walls." },
  { name: "Garland & Lights Bundle", category: "christmas", price: 20, per: "bundle",
    emoji: "✨", desc: "Lighted garland for mantels, tables, stair rails, and doorways." },
  { name: "Nativity Scene", category: "christmas", price: 40, per: "event",
    emoji: "⭐", desc: "A classic family nativity set — a centerpiece for church or home gatherings." },
  { name: "Ornament & Centerpiece Kit", category: "christmas", price: 25, per: "table set",
    emoji: "🎁", desc: "Bowls, candles, ornaments, and greenery to dress up a table." },
  { name: "Christmas Village Pieces", category: "christmas", price: null, per: "set",
    emoji: "🏘️", desc: "Light-up houses and figurines from Grandma's collection. Ask what's available." },

  // ---- Ranch & Rustic ----
  { name: "Wagon Wheels", category: "rustic", price: 20, per: "each",
    emoji: "🛞", desc: "Authentic ranch wagon wheels — perfect for photo backdrops and entryways." },
  { name: "Hay Bales (Seating / Décor)", category: "rustic", price: 8, per: "bale",
    emoji: "🌾", desc: "Square bales for rustic seating, photo spots, or stacking with décor." },
  { name: "Lanterns", category: "rustic", price: 6, per: "each",
    emoji: "🏮", desc: "Battery-candle lanterns for tables, walkways, and porches." },
  { name: "Galvanized Tubs & Buckets", category: "rustic", price: 10, per: "each",
    emoji: "🪣", desc: "Drink tubs, flower buckets, and centerpiece containers." },

  // ---- Tables & Chairs (coming soon / growing) ----
  { name: "6-ft Banquet Tables", category: "tables", price: null, per: "table",
    emoji: "🪑", desc: "Coming soon! Seats 6–8. Ask to reserve for your date." },
  { name: "Folding Chairs", category: "tables", price: null, per: "chair",
    emoji: "💺", desc: "Coming soon! Sturdy folding chairs for parties and dinners." },
  { name: "Round Tables", category: "tables", price: null, per: "table",
    emoji: "⭕", desc: "Coming soon! Seats 8–10. Great for holiday dinners and receptions." },

  // ---- Linens & Tableware ----
  { name: "Tablecloths", category: "linens", price: 8, per: "each",
    emoji: "🧺", desc: "Red, white, green, and buffalo plaid tablecloths." },
  { name: "Table Runners", category: "linens", price: 5, per: "each",
    emoji: "🎀", desc: "Burlap, plaid, and holiday runners." },
  { name: "Serving Platters & Punch Bowl", category: "linens", price: 10, per: "piece",
    emoji: "🍽️", desc: "Holiday serving pieces for buffets and dessert tables." },
];
