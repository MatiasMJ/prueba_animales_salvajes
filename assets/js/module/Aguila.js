import animal from "./Animal.js";

class aguila extends animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
  chillar() {
    console.log(aguilaConfirm);
  }
}

export default aguila;
