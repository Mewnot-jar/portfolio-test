const __vite__fileDeps=["assets/OutOfCanvasUpdater-XhV8eBM7.js","assets/index-Bteftz1z.js","assets/index-69tKENP-.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-Bteftz1z.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-XhV8eBM7.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
