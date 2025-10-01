import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mainnetFilePath = path.resolve(__dirname, "../deployments/addressBook.mainnet.json");
const testnetFilePath = path.resolve(__dirname, "../deployments/addressBook.testnet.json");
const mainnetData = JSON.parse(fs.readFileSync(mainnetFilePath, "utf-8"));
const testnetData = JSON.parse(fs.readFileSync(testnetFilePath, "utf-8"));

const processAddressBook = data =>
  Object.entries(data).reduce((acc, [key, value]) => {
    if (value.contractName === "Lock") return acc; // Skip Lock contracts
    acc[key] = {
      contractName: value.contractName,
      address: value.address,
      implementation: value.implementation || undefined,
      constructorArguments: value.constructorArguments?.length ? value.constructorArguments : undefined,
    };
    return acc;
  }, {});

const lensDeployments = {
  mainnet: processAddressBook(mainnetData),
  testnet: processAddressBook(testnetData),
};

// Custom function to format JSON without quotes on property names
const formatWithoutQuotes = obj => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

const outputContent = `export const lensDeployments = ${formatWithoutQuotes(lensDeployments)} as const;`;

const outputPath = path.join(__dirname, "../src/deployments.ts");
fs.writeFileSync(outputPath, outputContent, "utf8");

console.log("Converted address books to deployments.ts successfully.");
