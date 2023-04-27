  
  let iframe = document.createElement("iframe")
  iframe.id = "targetPage";
  
  iframe.height = "100%";
  iframe.width = "100%";
  iframe.src = new URL(window.location.href).searchParams.get('u')||"https://hydra.ojack.xyz/";
  
  document.body.appendChild(iframe);
  
  wrapper = document.createElement("div");
  wrapper.className += "instructions";
  wrapper.style = "position:fixed; z-index:10000; bottom:10px; right:10px; background:rgb(0,0,0,0.5); border-radius:3px; padding:5px;"
  
  link = document.createElement("a");
  link.href = "build/scrawlink-extension.zip";

  
  link.onclick = function(){
    console.log('clicked');
    window.open('https://www.scraw.link/instructions.html');
  }
  
  image=document.createElement("img");
  image.src= "images/icon-48.png";
  image.style="height:20px";
  logoText = document.createElement("div");
  logoText.innerHTML = "Get scraw.link extension";
  logoText.style="display: inline;  margin: 5px;";

  telegram = document.createElement("div");
  telegram.innerHTML = "Join <a href='https://t.me/+WC6bX1jGnhA5ZTk8'>Scraw.Link Telegram group</a>"


  link.appendChild(image);
  link.appendChild(logoText);

  wrapper.appendChild(link);
  wrapper.appendChild(telegram);
  
  document.body.appendChild(wrapper);
  document.body.appendChild(wrapper2);
  
  
