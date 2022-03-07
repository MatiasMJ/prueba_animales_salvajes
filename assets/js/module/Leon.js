import animal from "./Animal.js";

class leon extends animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
  rugir() {
    console.log(leonConfirm);
  }
}

export default leon;
