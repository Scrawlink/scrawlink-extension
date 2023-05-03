  
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
  link.href = "https://chrome.google.com/webstore/detail/scrawlink/ahmclabepobeghadiggbcihbccomifoe";
  link.target = "_blank";
  
  image=document.createElement("img");
  image.src= "images/icon-48.png";
  image.style="height:20px";
  logoText = document.createElement("div");
  logoText.innerHTML = "Get scraw.link extension";

  telegram = document.createElement("a");
  telegram.href = "https://t.me/ScrawLink";
  telegram.target = "_blank";

  telegramTxt = document.createElement("div")
  telegramTxt.innerHTML = "Join Scraw.Link Telegram group";
  
  telegramImg = document.createElement("img");
  telegramImg.src="images/telegram.svg";
  telegramImg.title="ScrawLink Telegram group"
  telegramImg.style=" background:rgb(0,255,0); border-radius:5px; width: 15px;";
  telegram.appendChild(telegramImg);
  telegram.appendChild(telegramTxt);
  
  link.appendChild(image);
  link.appendChild(logoText);

  wrapper.appendChild(link);
  wrapper.appendChild(telegram);
  
  document.body.appendChild(wrapper);
  
  
