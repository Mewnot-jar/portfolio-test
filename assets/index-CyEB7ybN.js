const __vite__fileDeps=["assets/Attractor-DKwU6YZ9.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-Bteftz1z.js","assets/index-69tKENP-.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-Bteftz1z.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DKwU6YZ9.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
