const __vite__fileDeps=["assets/LifeUpdater-xvmUoJf1.js","assets/ValueWithRandom-BUrEO1vO.js","assets/index-CvCxxWTn.js","assets/index-9b3cE6PP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-CvCxxWTn.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-xvmUoJf1.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
