const __vite__fileDeps=["assets/OutOfCanvasUpdater-C87G7O8V.js","assets/index-2f0F7ENH.js","assets/index-C1dQx0Y_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-2f0F7ENH.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-C87G7O8V.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
