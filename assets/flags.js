// 🌍 Trader Route Universal Flag Loader — Full World Version

window.getFlagCode = function(country) {
  if (!country) return "unknown";
  const map = {
    "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad",
    "Angola": "ao", "Antigua and Barbuda": "ag", "Argentina": "ar", "Armenia": "am",
    "Australia": "au", "Austria": "at", "Azerbaijan": "az", "Bahamas": "bs",
    "Bahrain": "bh", "Bangladesh": "bd", "Barbados": "bb", "Belarus": "by",
    "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bhutan": "bt",
    "Bolivia": "bo", "Bosnia and Herzegovina": "ba", "Botswana": "bw",
    "Brazil": "br", "Brunei": "bn", "Bulgaria": "bg", "Burkina Faso": "bf",
    "Burundi": "bi", "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca",
    "Cape Verde": "cv", "Central African Republic": "cf", "Chad": "td",
    "Chile": "cl", "China": "cn", "Colombia": "co", "Comoros": "km",
    "Congo": "cg", "Costa Rica": "cr", "Croatia": "hr", "Cuba": "cu",
    "Cyprus": "cy", "Czech Republic": "cz", "Denmark": "dk", "Djibouti": "dj",
    "Dominica": "dm", "Dominican Republic": "do", "Ecuador": "ec", "Egypt": "eg",
    "El Salvador": "sv", "Estonia": "ee", "Eswatini": "sz", "Ethiopia": "et",
    "Fiji": "fj", "Finland": "fi", "France": "fr", "Gabon": "ga",
    "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh",
    "Greece": "gr", "Grenada": "gd", "Guatemala": "gt", "Guinea": "gn",
    "Guinea-Bissau": "gw", "Guyana": "gy", "Haiti": "ht", "Honduras": "hn",
    "Hungary": "hu", "Iceland": "is", "India": "in", "Indonesia": "id",
    "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Israel": "il",
    "Italy": "it", "Ivory Coast": "ci", "Jamaica": "jm", "Japan": "jp",
    "Jordan": "jo", "Kazakhstan": "kz", "Kenya": "ke", "Kiribati": "ki",
    "Kuwait": "kw", "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv",
    "Lebanon": "lb", "Lesotho": "ls", "Liberia": "lr", "Libya": "ly",
    "Liechtenstein": "li", "Lithuania": "lt", "Luxembourg": "lu", "Madagascar": "mg",
    "Malawi": "mw", "Malaysia": "my", "Maldives": "mv", "Mali": "ml",
    "Malta": "mt", "Marshall Islands": "mh", "Mauritania": "mr", "Mauritius": "mu",
    "Mexico": "mx", "Micronesia": "fm", "Moldova": "md", "Monaco": "mc",
    "Mongolia": "mn", "Montenegro": "me", "Morocco": "ma", "Mozambique": "mz",
    "Myanmar": "mm", "Namibia": "na", "Nepal": "np", "Netherlands": "nl",
    "New Zealand": "nz", "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng",
    "North Korea": "kp", "North Macedonia": "mk", "Norway": "no", "Oman": "om",
    "Pakistan": "pk", "Palau": "pw", "Palestine": "ps", "Panama": "pa",
    "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe", "Philippines": "ph",
    "Poland": "pl", "Portugal": "pt", "Qatar": "qa", "Romania": "ro",
    "Russia": "ru", "Rwanda": "rw", "Saint Kitts and Nevis": "kn",
    "Saint Lucia": "lc", "Saint Vincent and the Grenadines": "vc", "Samoa": "ws",
    "San Marino": "sm", "Sao Tome and Principe": "st", "Saudi Arabia": "sa",
    "Senegal": "sn", "Serbia": "rs", "Seychelles": "sc", "Sierra Leone": "sl",
    "Singapore": "sg", "Slovakia": "sk", "Slovenia": "si", "Solomon Islands": "sb",
    "Somalia": "so", "South Africa": "za", "South Korea": "kr",
    "South Sudan": "ss", "Spain": "es", "Sri Lanka": "lk", "Sudan": "sd",
    "Suriname": "sr", "Sweden": "se", "Switzerland": "ch", "Syria": "sy",
    "Taiwan": "tw", "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th",
    "Togo": "tg", "Tonga": "to", "Trinidad and Tobago": "tt", "Tunisia": "tn",
    "Turkey": "tr", "Turkmenistan": "tm", "Tuvalu": "tv", "Uganda": "ug",
    "Ukraine": "ua", "United Arab Emirates": "ae", "United Kingdom": "gb",
    "United States": "us", "Uruguay": "uy", "Uzbekistan": "uz",
    "Vanuatu": "vu", "Vatican City": "va", "Venezuela": "ve",
    "Vietnam": "vn", "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw"
  };

  // Geri dönüş
  return map[country] || country.slice(0,2).toLowerCase() || "unknown";
};

// 🌐 URL üretici
window.getFlagURL = function(country, size = 20) {
  const code = getFlagCode(country);
  if (!code || code === "unknown") return "assets/flags/default.png";
  return `assets/flags/${code}.png`; // ✅ flags (çoğul)
};
