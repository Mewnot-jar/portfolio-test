const __vite__fileDeps=["assets/ColorUpdater-CJENqZan.js","assets/index-CC3ZHf0I.js","assets/index-DGfxkPVU.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-CC3ZHf0I.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CJENqZan.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
