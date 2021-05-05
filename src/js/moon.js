import * as THREE from "three";

import fragment from "./shaders/moon/fragment.glsl";
import vertex from "./shaders/moon/vertex.glsl";

export default class Moon {
  constructor(options) {
    this.gui = options.gui;
    this.debugObject = {};

    this.scene = options.scene;

    this.init();
  }

  init() {
    this.addMoon();
  }

  addMoon() {
    this.debugObject.moonColor1 = "#F81C39";
    this.debugObject.moonColor2 = "#EE31C3";
    this.gui.addColor(this.debugObject, "moonColor1").onChange(() => {
      this.moonMaterial.color = new THREE.Color(this.debugObject.moonColor);
    });

    this.geometry = new THREE.SphereGeometry(20, 100, 100);
    this.moonMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(this.debugObject.moonColor1) },
        color2: { value: new THREE.Color(this.debugObject.moonColor2) },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    this.sphere = new THREE.Mesh(this.geometry, this.moonMaterial);

    this.sphere.position.y = -21;
    this.sphere.position.z = -2;
    this.scene.add(this.sphere);
  }
}
