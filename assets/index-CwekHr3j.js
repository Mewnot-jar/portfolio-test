const __vite__fileDeps=["assets/ColorUpdater-Dvlv508D.js","assets/index-DAjLFVYA.js","assets/index-QZ-sVnRW.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-DAjLFVYA.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-Dvlv508D.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
