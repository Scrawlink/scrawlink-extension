/*
# From Scrawl
@title From Scrawl
scrawl @by Ámbar Tenorio <ambar@atenor.io>
@license CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
*/

/* ## Rules
### 🔗 Rule 1 (Attribution):
*/

let r1 = '🔗 Rule 1 (Attribution): Start from the scrawls of others and keep the attribution chain.'

/*
### ⏱ Rule 2 (Hurry!):
*/

let r2 = '⏱ Rule 2 (Hurry!): You have 3 minutes to perform and change anything, including these rules.'

/*
### 👏 Rule 3 (Clap!):
*/


let r3 = '👏 Rule 3 (Clap!): When the performance finishes, everybody claps.'

/*
## I’d really rather you didn’ts (🙏 IRRYD...):
*/

let i1 = '🙏IRRYD... left without sharing your code somehow. \
You can share your scrawls in our Telegram group: https://t.me/ScrawLink'

/*
### 🔗 Rule 1 Implementation
*/

if (typeof attrib === 'undefined') {
  window.confirm(r1);
  window.attrib = prompt('What\'s your name and email for attribution?', 'Flying S. Monster <veganmeatballs@sky.net>')
}

let found = false;

if (typeof treeWalker === 'undefined') {

  window.treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);


  let url = '';
  let qr = document.getElementById('qrcode')
  if (qr !== null){
    url = qr.children[0].href //shortened URL
  }

  while (treeWalker.nextNode() && ! found) {
    const node = treeWalker.currentNode;
    let attRep = node.data.replace(
        'scrawl @by ',
        'scrawl @by ' + attrib + '\n' +
        'LICENSE CC BY-SA 4.0\n' +
        'Incorporates art and code @by '
      )

    if (node.data != attRep) {
      node.data = attRep.concat( url);
    }

    let rl = node.data.replace('@license', '  under the license');
    if (node.data != rl){
      found = true;
      node.data = rl;
    }
    node.data = node.data.replace('LICENSE', 'license');
  }
}

/*
### ⏱ Rule 2 Implementation
*/

if (typeof c2 === 'undefined'){
  window.c2 = window.confirm(r2);
}

if (typeof to === 'undefined') {
  const to = new Event('timeout');
  setTimeout(
    ()=>dispatchEvent(to)
    ,3 * 60 * 1000); // 180000 miliseconds, no more, no less.
}


if (typeof c3 === 'undefined') {
  window.c3 = addEventListener('timeout',
    ()=>   window.alert(r3 + '👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏'),
    false
  );
}
/*
## 🙏 IRRYD Implementation:
*/

if (typeof ci1 === 'undefined'){
  window.ci1 = addEventListener('timeout',
    ()=> window.confirm(i1),
    false
  );
}

// Performance code:
s("bd")
