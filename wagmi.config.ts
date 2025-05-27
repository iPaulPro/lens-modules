import { react } from "@wagmi/cli/plugins";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import type { Abi } from "viem";
import type { Config } from "@wagmi/cli";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const abiDir = path.resolve(__dirname, "./abis");

const files = await fs.readdir(abiDir);
const contracts = await Promise.all(
  files
    .filter(file => file.endsWith(".abi.json"))
    .map(async file => {
      const name = path.basename(file, ".abi.json");
      const json = await fs.readFile(path.join(abiDir, file), "utf8");
      const abi = JSON.parse(json) as Abi;
      return { name, abi };
    }),
);

const config: Config = {
  out: "src/abis.ts",
  contracts,
  plugins: [react()],
};

export default config;
