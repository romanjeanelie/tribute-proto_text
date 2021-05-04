import * as THREE from "three";

export default class Text {
  constructor(scene) {
    console.log("text");

    this.scene = scene;
    this.loader = new THREE.FontLoader();
    this.textureLoader = new THREE.TextureLoader();

    this.init();
  }

  init() {
    this.matcapTexture = this.textureLoader.load("/textures/matcap2.png");
    this.loader.load("/fonts/Moniqa-Display_Bold.json", (font) => {
      this.textGeometry = new THREE.TextGeometry("DANCE WITH ME", {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      this.textMaterial = new THREE.MeshMatcapMaterial({
        matcap: this.matcapTexture,
      });

      this.text = new THREE.Mesh(this.textGeometry, this.textMaterial);

      this.textGeometry.center();

      this.scene.add(this.text);
    });
  }

  center() {
    this.textGeometry.computeBoundingBox();
    console.log(this.textGeometry.boundingBox);
    this.textGeometry.translate(
      -this.textGeometry.boundingBox.max.x * 0.5,
      -this.textGeometry.boundingBox.max.y * 0.5,
      -this.textGeometry.boundingBox.max.z * 0.5
    );
  }
}
