const __vite__fileDeps=["assets/OpacityUpdater-ZlBghkLE.js","assets/index-pIPP-04T.js","assets/index-BxLJrdYj.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-pIPP-04T.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-ZlBghkLE.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
