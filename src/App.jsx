import './App.css';
import "aframe";
import prog from  "./models/prog_starwars.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function App() {
  const loader = new GLTFLoader();
  loader.load(prog, (d) => {
    const entity = document.getElementById("prog");
    entity.object3D.add(d.scene);
  })
  return (
    <a-scene>
      <a-entity id="prog" position="-10 0 0" scale="15 15 15"></a-entity>
      <a-sky color="FFFFFF" material="src:#sky" rotation="0 0 0"></a-sky>
    </a-scene>
  );
}

export default App;