import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { isAdBundleReady, selectAdFormat } from "../lib/ad-policy.ts";

const bundle = JSON.parse(readFileSync(new URL("../config/ad-units.json", import.meta.url), "utf8"));
assert.equal(isAdBundleReady(bundle, "www.makeviralcandy.wiki"), true);
assert.equal(isAdBundleReady(bundle, "another-game.wiki"), false);
assert.equal(isAdBundleReady({ ...bundle, category: "Other" }, bundle.domain), false);
assert.equal(isAdBundleReady({ ...bundle, units: bundle.units.slice(1) }, bundle.domain), false);
assert.equal(isAdBundleReady({ ...bundle, units: bundle.units.map(u => u.format === "160x600" ? { ...u, width: 300 } : u) }, bundle.domain), false);
assert.equal(selectAdFormat("vertical-rail", 160, false), null);
assert.equal(selectAdFormat("vertical-rail", 160, true), "160x600");
assert.equal(selectAdFormat("top-sticky", 0, false), null);
assert.equal(selectAdFormat("top-sticky", 320, false), "320x50");
assert.equal(selectAdFormat("home-banner", 273, false), null);
assert.equal(selectAdFormat("home-banner", 343, false), "300x250");
assert.equal(selectAdFormat("home-banner", 728, true), "728x90");
console.log("Ad domain, complete bundle and responsive request policy passed.");
