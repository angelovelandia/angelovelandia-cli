#!/usr/bin/env node
import t from"chalk";import o from"figlet";import a from"open";import e from"inquirer";const i=console.log,n=[{name:"url",type:"list",message:"You want to see... ❤❤❤",choices:["Github","Twitter","LinkedIn","Quit"]}],r={Github:"https://github.com/angelovelandia",Twitter:"https://x.com/avcodev_",LinkedIn:"https://www.linkedin.com/in/angelo-velandia-703438237/"},l=async()=>{const t=await e.prompt(n);await(async t=>{if(t.url){let o=r[t.url];o&&a(o),o||process.exit(),l()}return!0})(t)};(async()=>{(async a=>{i(t.bold.cyan(o.textSync("@AVCODEV",{font:"ANSI Shadow",horizontalLayout:"default",verticalLayout:"default"})))})(),await l()})();
//# sourceMappingURL=index.js.map
