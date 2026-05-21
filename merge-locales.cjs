const fs = require("fs");
const path = require("path");

const localesDir = path.join(__dirname, "src", "i18n", "locales");
const en = JSON.parse(fs.readFileSync(path.join(localesDir, "en.json"), "utf8"));

function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (key in result) {
      if (typeof source[key] === "object" && source[key] !== null && !Array.isArray(source[key]) &&
          typeof result[key] === "object" && result[key] !== null && !Array.isArray(result[key])) {
        result[key] = deepMerge(result[key], source[key]);
      }
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

const files = fs.readdirSync(localesDir).filter(f => f.endsWith(".json") && f !== "en.json");
for (const file of files) {
  const filePath = path.join(localesDir, file);
  const locale = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const merged = deepMerge(locale, en);
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + "\n", "utf8");
  console.log(`Merged keys into ${file}`);
}
console.log("Done!");
