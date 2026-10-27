#!/bin/bash
# يبني المنصة من ملفات src:
#   index.html   النسخة المنشورة على GitHub Pages
cd "$(dirname "$0")"
FONTS='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Carlito:wght@400;700&family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap">'
body() {
  echo "$FONTS"
  echo '<style>'; cat src/style.css; echo '</style>'
  echo '<header class="top" id="top"></header><main id="main"></main><footer class="foot" id="foot"></footer><div id="toast" hidden role="status" aria-live="polite"></div>'
  echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>'
  echo '<script>'; cat src/content.js src/app.js src/theme.js src/chart.js src/lab.js src/fib.js src/guides.js src/schools.js src/example.js src/schoolchart.js src/saved.js src/ticker.js src/search.js src/sections.js src/assist.js src/symnews.js src/symbols.js src/indicators.js src/sync.js src/ai.js src/dividends.js src/tech.js src/invest.js src/metals.js src/nav.js src/owner.js src/desk.js src/apps.js src/us.js src/extra.js src/sharia.js src/screener.js src/top.js src/divglobal.js src/news.js src/notify.js src/landing.js src/tree.js src/options.js src/auth.js src/blog.js src/boot.js; echo '</script>'
}
{
cat <<'HEAD'
<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>مِراس</title>
<meta name="description" content="مِراس: منصة تعليمية للسوق المالية السعودية، واستعراض الأسواق العالمية للتعليم على أسعار حقيقية.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="مِراس">
<meta property="og:locale" content="ar_SA">
<meta property="og:title" content="مِراس — تعلّم السوق على أسعار حقيقية">
<meta property="og:description" content="منصة تعليمية للسوق المالية السعودية، واستعراض الأسواق العالمية للتعليم على أسعار حقيقية: دروس، تحليل فني، توزيعات، ومدونة.">
<meta property="og:url" content="https://3pp3ll.github.io/meras/">
<meta property="og:image" content="https://3pp3ll.github.io/meras/icons/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="مِراس: منصة تعليمية للسوق المالية">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="مِراس — تعلّم السوق على أسعار حقيقية">
<meta name="twitter:description" content="منصة تعليمية للسوق المالية السعودية، واستعراض الأسواق العالمية للتعليم على أسعار حقيقية.">
<meta name="twitter:image" content="https://3pp3ll.github.io/meras/icons/og.png">
<meta name="theme-color" content="#FFE2D2">
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
