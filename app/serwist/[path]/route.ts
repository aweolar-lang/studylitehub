import { spawnSync } from "node:child_process";
import { createSerwistRoute } from "@serwist/turbopack";

// Generates a build revision hash using the current git commit ID (falls back to a UUID)
const revision =
  spawnSync("git", ["rev-parse", "HEAD"], { encoding: "utf-8" }).stdout?.trim() ??
  crypto.randomUUID();

export const {
  dynamic,
  dynamicParams,
  revalidate,
  generateStaticParams,
  GET,
} = createSerwistRoute({
  swSrc: "app/sw.ts",
  additionalPrecacheEntries: [
    { url: "/", revision },
  ],
  
  nextConfig: {},
});