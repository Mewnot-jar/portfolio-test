const __vite__fileDeps=["assets/PolygonDrawer-VPYhS1G9.js","assets/PolygonDrawerBase-Du4OlvV0.js","assets/index-BdwKmGw7.js","assets/index-DviI_dll.css","assets/TriangleDrawer-DmfDQR1Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-BdwKmGw7.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-VPYhS1G9.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DmfDQR1Y.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
