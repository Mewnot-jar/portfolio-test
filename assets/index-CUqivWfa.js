const __vite__fileDeps=["assets/ColorUpdater-Cq6fmmDT.js","assets/index-C4xz0zvy.js","assets/index-D2OLF5tX.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-C4xz0zvy.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-Cq6fmmDT.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
