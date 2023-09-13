async function loadScrawlink(){
  if (! document.getElementById("scrawlink")) {
    await loadScript("https://cdn.jsdelivr.net/gh/Scrawlink/scrawlink-extension@latest/scripts/qrcode.min.js")
    await loadScript("https://cdn.jsdelivr.net/gh/Scrawlink/scrawlink-extension@latest/scripts/content.js")
    await loadScript("https://cdn.jsdelivr.net/gh/Scrawlink/scrawlink-extension@latest/scripts/hydra-extension/load-styles.js")
  }
}

loadScrawlink()
