#!/usr/bin/env node
const basePath = process.argv[2] || "/assets/favicons";
if (basePath === "-h" || basePath === "--help") {
  console.log("Usage: favicon-html-gen [base-path]");
  process.exit(0);
}
const html = `<link rel="icon" type="image/x-icon" href="${basePath}/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="${basePath}/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="${basePath}/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="${basePath}/apple-touch-icon.png">
<link rel="manifest" href="${basePath}/site.webmanifest">
<meta name="theme-color" content="#ffffff">`;
console.log(html);
