import { readManifest } from "../manifest";
import { check } from "../check";

export function getCurrentLocalVersion({ dir }) {
  // Load manifest
  const manifest = readManifest(dir);
  check(manifest, "manifest", "object");
  check(manifest.version, "manifest version");
  const currentVersion = manifest.version;

  return currentVersion;
}
