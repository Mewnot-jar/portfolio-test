const __vite__fileDeps=["assets/LifeUpdater-DQ57fSZn.js","assets/ValueWithRandom-CF7PRziG.js","assets/index-DWTLbxoW.js","assets/index-DBe2f-2W.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DWTLbxoW.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DQ57fSZn.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
