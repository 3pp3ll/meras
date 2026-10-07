#!/bin/bash
# يبني المنصة من ملفات src:
#   index.html   النسخة المنشورة على GitHub Pages
cd "$(dirname "$0")"
FONTS='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Reem+Kufi:wght@500;600;700&display=swap">'
body() {
  echo "$FONTS"
  echo '<style>'; cat src/style.css; echo '</style>'
  echo '<header class="top" id="top"></header><main id="main"></main><footer class="foot" id="foot"></footer><div id="toast" hidden role="status" aria-live="polite"></div>'
  echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>'
  echo '<script>'; cat src/content.js src/app.js src/sync.js src/boot.js; echo '</script>'
}
{
cat <<'HEAD'
<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>مِراس</title>
<meta name="description" content="مِراس: منصة تعليمية للسوق المالية السعودية. مسارات للمستثمر والمتداول والمبرمج.">
<meta name="theme-color" content="#14284F">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="مِراس">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
HEAD
body
cat <<'TAIL'
<script>if ("serviceWorker" in navigator) { window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); }); }</script>
</body>
</html>
TAIL
} > index.html
wc -c index.html
