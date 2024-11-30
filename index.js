
  let iframe = document.createElement("iframe")
  iframe.id = "targetPage";
  
  iframe.height = "100%";
  iframe.width = "100%";
  iframe.src = new URL(window.location.href).searchParams.get('u')||"https://hydra.ojack.xyz/";
  document.body.appendChild(iframe);


  //*** Temporary automaic redirection to linkedURL
  window.location.replace(iframe.src);
  //***

  wrapper = document.createElement("div");
  wrapper.id += "scrawlink";
  wrapper.classList.add("instructions");
  
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
  
  telegramImg = document.createElement("i");
  telegram.classList.add("fa","fa-telegram");
  telegramImg.title="ScrawLink Telegram group";

  telegram.appendChild(telegramImg);
  telegram.appendChild(telegramTxt);
  
  link.appendChild(image);
  link.appendChild(logoText);

  wrapper.appendChild(link);
  wrapper.appendChild(telegram);
  
  document.body.appendChild(wrapper);
  
  
