const __vite__fileDeps=["assets/OutOfCanvasUpdater-C6YHuGQe.js","assets/index-siHdQ1KG.js","assets/index-DY16N_QY.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-siHdQ1KG.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-C6YHuGQe.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
