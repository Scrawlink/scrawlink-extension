  
  let iframe = document.createElement("iframe")
  iframe.id = "targetPage";
  
  iframe.height = "100%";
  iframe.width = "100%";
  iframe.src = new URL(window.location.href).searchParams.get('u')||"https://hydra.ojack.xyz/";
  
  document.body.appendChild(iframe);
  
  wrapper = document.createElement("a");
  wrapper.href = "build/scrawlink-extension.zip";
  wrapper.style = "position:fixed; z-index:10000; bottom:10px; right:10px; background:rgb(0,0,0,0.5); border-radius:3px; padding:5px;"
  
  
  wrapper.onclick = function(){
    window.open('./instructions.html');
  }
  
  image=document.createElement("img");
  image.src= "images/icon-48.png";
  image.style="height:20px";
  logoText = document.createElement("div");
  logoText.innerHTML = "get scraw.link extension";
  logoText.style="display: inline; color: #00ff00;font-family: monospace;font-size: 14px;font-weight: bold; margin: 5px;";

  wrapper.appendChild(image);
  wrapper.appendChild(logoText);
  
  document.body.appendChild(wrapper);
  
  
