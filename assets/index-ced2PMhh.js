const __vite__fileDeps=["assets/LifeUpdater-DlOp6EMy.js","assets/ValueWithRandom-qEgIkCJZ.js","assets/index-C2MPDcO1.js","assets/index-qIo8PeB_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-C2MPDcO1.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DlOp6EMy.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
