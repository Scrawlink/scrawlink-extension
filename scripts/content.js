
document.addEventListener("keyup", urlChangeHandler)

let qr, loc

function urlChangeHandler(event) {

  qr = window.document.getElementById("qrcode")
  if (!qr) {
    wrapper = document.createElement("div");
    wrapper.style = "position:fixed; z-index:10000; bottom:10px; right:10px; background:rgb(0,0,0,0.5); border-radius:3px; padding:5px;"

    wrapper.addEventListener("click",function(element) {
      if (wrapper.style.bottom!="10px"){
        wrapper.style.bottom = "10px";
      } else {
        wrapper.style.bottom = "-200px";
      }
    });

    qr=document.createElement("div");
    qr.id="qrcode";
    qr.style="border:5px solid white; border-radius:3px;";

    logoWrapper = document.createElement("div");
    
    
     
    image=document.createElement("img");
    image.src=chrome.runtime.getURL("images/icon-48.png");
    image.style="height:20px";
    logoText = document.createElement("div");
    logoText.innerHTML = "scraw.link";
    logoText.style="display: inline; color: #00ff00;font-family: monospace;font-size: 14px;font-weight: bold; margin: 5px;";

    logoWrapper.appendChild(image);
    logoWrapper.appendChild(logoText);
    
    text = document.createElement("div");
    text.innerHTML = "¡Juega con este live desde tu móvil!";
    text.style="color: #00ff00;font-family: sans-serif;font-size: 11px;font-weight: 600;width: 200px;";

    wrapper.appendChild(logoWrapper)
    wrapper.appendChild(text);
    wrapper.appendChild(qr);
    window.document.body.appendChild(wrapper);

    qrc = new QRCode(qr, {
	    text: window.location.href,
	    width: 200,
	    height: 200,
	    colorDark : "#000000",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.L
    })}

    if (loc != window.location.href){
      loc = window.location.href;
      qrc.makeCode(loc);
    }
}
