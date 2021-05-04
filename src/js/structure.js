import * as THREE from "three";

export default class Structure {
  constructor(scene) {
    console.log("structure");
    this.scene = scene;

    this.init();
  }

  init() {
    this.createBars();
  }

  createBars() {
    this.barGeometry = new THREE.CylinderBufferGeometry(0.01, 0.01, 2, 3);
    this.barMaterial = new THREE.MeshBasicMaterial();

    this.bar = new THREE.Mesh(this.barGeometry, this.barMaterial);

    this.bar.position.z = -0.1;
    this.bar.position.y = -0.5;

    this.scene.add(this.bar);
  }
}
