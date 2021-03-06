import * as THREE from "three";
import Structure from "./structure";

export default class Text {
  constructor(options) {
    console.log("text");
    this.gui = options.gui;

    this.scene = options.scene;
    this.loader = new THREE.FontLoader();
    this.textureLoader = new THREE.TextureLoader();

    this.init();
  }

  init() {
    this.textDance();
    this.addStructure();
  }

  textDance() {
    this.matcapTexture1 = this.textureLoader.load("/textures/matcap1.png");
    this.matcapTexture2 = this.textureLoader.load("/textures/matcap2.png");
    this.loader.load("/fonts/Moniqa-Display_Bold.json", (font) => {
      this.textDanceGeometry = new THREE.TextGeometry("DANCE WITH ME", {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.003,
        bevelOffset: 0,
        bevelSegments: 5,
      });
      this.textFloorGeometry = new THREE.TextGeometry("ON THE FLOOR", {
        font: font,
        size: 0.5,
        height: 0.0001,
        curveSegments: 10,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.003,
        bevelSegments: 3,
      });

      this.textDanceMaterial = new THREE.MeshMatcapMaterial({
        matcap: this.matcapTexture2,
      });
      this.textFloorMaterial = new THREE.MeshMatcapMaterial({
        matcap: this.matcapTexture1,
      });

      this.textDance = new THREE.Mesh(this.textDanceGeometry, this.textDanceMaterial);
      this.textFloor = new THREE.Mesh(this.textFloorGeometry, this.textFloorMaterial);

      this.textDanceGeometry.center();
      this.textFloorGeometry.center();

      this.textFloor.position.y = -3;
      this.textFloor.position.z = 8;

      this.scene.add(this.textDance, this.textFloor);
    });
  }

  addStructure() {
    const posDanceStruct = {
      x: 0,
      y: 0,
      z: 0,
    };
    const posFloorStruct = {
      x: 0,
      y: -3,
      z: 8,
    };
    this.structureDance = new Structure({ gui: this.gui, scene: this.scene, positions: posDanceStruct });
    this.structureFloor = new Structure({ gui: this.gui, scene: this.scene, positions: posFloorStruct });
  }
}
