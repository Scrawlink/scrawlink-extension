const loadStyles = function(){
  let style= document.createElement("link")
  style.setAttribute("rel", "stylesheet")
  style.setAttribute("href", "https://cdn.jsdelivr.net/gh/Scrawlink/scrawlink-extension@latest/style.css" )
  style.setAttribute("crossorigin","anonymous")
  document.head.appendChild(style)

  let fa = document.createElement("link")
  fa.setAttribute("rel", "stylesheet")
  fa.setAttribute("href", "https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" )
  fa.setAttribute("integrity","sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=")
  fa.setAttribute("crossorigin","anonymous")
  document.head.appendChild(fa)
}

loadStyles()
