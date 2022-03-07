import animal from "./Animal.js";

class serpiente extends animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
  siseo() {
    console.log(serpienteConfirm);
  }
}

export default serpiente;
