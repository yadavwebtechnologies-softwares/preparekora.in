"use strict";

/*
  Auto-detect API base URL. No manual editing needed.
  - Local dev  → http://localhost:8787/api
  - Production → /api  (same origin as frontend via Cloudflare route)
*/

(function () {
  const host = window.location.hostname;
  const isLocal =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "" ||
    host.endsWith(".local");

  window.PK_CONFIG = {
    API_BASE: isLocal ? "http://localhost:8787/api" : "/api",
    IS_LOCAL: isLocal,
    VERSION: "1.0.0"
  };
})();
