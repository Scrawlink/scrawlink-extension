const loadStyles = function(){
  let style= document.createElement("link")
  style.setAttribute("rel", "stylesheet")
  style.setAttribute("href", "https://cdn.jsdelivr.net/gh/Scrawlink/scrawlink-extension@latest/style.css" )
  style.setAttribute("crossorigin","anonymous")
  document.head.appendChild(style)
}

loadStyles()
