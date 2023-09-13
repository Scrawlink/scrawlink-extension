if (document.location.href.includes("scraw.link")){
    linked = new URL(window.location.href).searchParams.get('u')
    if (linked){
      window.location.href = linked;
    }
}

let fa = document.createElement("link")
fa.setAttribute("rel", "stylesheet")
fa.setAttribute("href", "https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" )
fa.setAttribute("integrity","sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=")
fa.setAttribute("crossorigin","anonymous")
document.head.appendChild(fa)
console.log(document.head);


document.addEventListener("keyup", urlChangeHandler)
document.addEventListener("click", urlChangeHandler)


let qr, loc

const shortenerURL = "https://scrawl.tacha7297.workers.dev/";

function urlChangeHandler(event) {

  qr = window.document.getElementById("qrcode")
  if (!qr) {
    wrapper = document.createElement("div");
    wrapper.id= "scrawlink";

    wrapper.addEventListener("click",function(element) {
      wrapper.classList.toggle("minimized");
    })

    qrWrapper=document.createElement("div");
    qrWrapper.id="qrcode";

    qr = document.createElement("a");
    qr.target = "_blank";
    qrWrapper.appendChild(qr);

    logoWrapper = document.createElement("div");
    logoWrapper.style = "display: inline-flex;";

    image=document.createElement("img");
    image.src="https://cdn.jsdelivr.net/gh/Scrawlink/scrawlink-extension/images/icon-48.png"
    image.style="height:20px";
    logoText = document.createElement("div");
    logoText.innerHTML = "www.scraw.link";
    logoText.style="display: inline; color: #00ff00;font-family: monospace;font-size: 14px;font-weight: bold; margin: 5px;";

    logoWrapper.appendChild(image);
    logoWrapper.appendChild(logoText);

    text = document.createElement("div");
    text.innerHTML = "Get this code and play!";
    text.style="color: #00ff00;font-family: sans-serif;font-size: 1em;font-weight: 600;width: 200px;";

    at = document.createElement("a");
    at.href = "https://t.me/ScrawLink";
    at.style ="float:right; padding: 5px;";

    telegram = document.createElement("i");
    telegram.classList.add("fa","fa-telegram", "fa-lg");
    telegram.title="ScrawLink Telegram group"
    at.appendChild(telegram);
    wrapper.appendChild(at)

    wrapper.appendChild(logoWrapper)
    wrapper.appendChild(text);
    wrapper.appendChild(qrWrapper);
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

      const request = new Request(shortenerURL, {
        method: "POST",
        body: '{"url": "https://www.scraw.link/?u=' + encodeURIComponent(window.location.href) + '"}',
      });

      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Something went wrong on API server!");
          }
        })
        .then((response) => {
          console.log(response);
          qrc.clear();
          let url = shortenerURL + response.key
          qrc.makeCode(url);
          qr.href=url;
        })
        .catch((error) => {
          console.error(error);
        });
    }
}
