const loadStyles = function(){
  let style= document.createElement("link")
  style.setAttribute("rel", "stylesheet")
  style.setAttribute("href", "https://cdn.jsdelivr.net/gh/Scrawlink/scrawlink-extension@latest/scripts/fork-awesome.min.css" )
  style.setAttribute("integrity","sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=")
  style.setAttribute("crossorigin","anonymous")
  document.head.appendChild(style)
}

loadStyles()
