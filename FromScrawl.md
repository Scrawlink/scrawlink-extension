/*
# From Scrawl
@title From Scrawl
@by Ámbar Tenorio <ambar@atenor.io>
@license CC BY-SA https://creativecommons.org/licenses/by-sa/4.0/
*/

/* ## Rules
### 🔗 Rule 1 (Attribution):
*/

let r1 = '🔗 Rule 1 (Attribution): Start from the scrawls of others and keep the attribution chain.'  


if (typeof attrib === 'undefined') {
  window.confirm(r1);
  window.attrib = prompt('What\'s your name and email for attribution?', 'Flying Spaghetti Monster <veganmeatballs@sky.net>')
}

// TODO add a code that keeps the attribution link

/*
### ⏱ Rule 2 (Hurry!):
*/

  window.r2 = '⏱ Rule 2 (Hurry!): You have 3 minutes to perform and change anything, including these rules.'

if (typeof c2 === 'undefined'){
  window.c2 = window.confirm(r2);
}

if (typeof timeout === 'undefined') {
  const timeout = new Event('fromScrawlTimeout');
  setTimeout(
    ()=>dispatchEvent(timeout)
    ,3 * 60 * 1000); // 180000 miliseconds, no more, no less.
}

/*
### 👏 Rule 3 (Clap!):
*/

window.r3 = '👏 Rule 3 (Clap!): When the performance finishes, everybody claps.'

if (typeof c3 === 'undefined') {
  window.alert(r3 + '👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏')
  window.c3 = true;
}
/*
## I’d really rather you didn’ts (🙏 IRRYD...):
*/
window.i1 = '🙏IRRYD... left without sharing your code somehow. \
You can share your scrawls <a href= "https://github.com/Scrawlink/scrawlink-extension/blob/main/SCRAWLS.md">here</a>'

if (typeof ci1 === undefined){
  window.ci1 = window.confirm(i1)
}
