const __vite__fileDeps=["assets/LifeUpdater-DFbvJhMr.js","assets/ValueWithRandom-bVTL8j8E.js","assets/index-Bteftz1z.js","assets/index-69tKENP-.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-Bteftz1z.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DFbvJhMr.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
