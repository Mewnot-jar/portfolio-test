const __vite__fileDeps=["assets/LifeUpdater-INZ9vzQG.js","assets/ValueWithRandom-Bh1X801l.js","assets/index-BdwKmGw7.js","assets/index-DviI_dll.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BdwKmGw7.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-INZ9vzQG.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
