//import Animal from "./module/Animal.js";

import Aguila from "./module/Aguila.js";
import Leon from "./module/Leon.js";
import Oso from "./module/Oso.js";
import Serpiente from "./module/Serpiente.js";
import Lobo from "./module/Lobo.js";

const table = document.getElementById("Tabla")
const animals = document.getElementById("Animales")
const aniId = document.getElementById("animal")
const age = document.getElementById("edad")
const comentary = document.getElementById("comentarios")
const ver = document.getElementById("preview")
const registrar = document.getElementById("btnRegistrar")

registrar.addEventListener("click", () => {
           let newAnimal = "";   
           const animal = document.getElementById("animal").value   
           const edad = document.getElementById("edad").value;   
           const comentarios = document.getElementById("comentarios").value;      
           const ani = theAnimals.filter(

                    (a) => a.name === animal   )[0];      
                    if (ani.name === "Oso") {     
                        newAnimal = new Oso(ani.name, edad, ani.imagen, comentarios, ani.sonido);   }

                        if (ani.name === "Lobo") {     
                            newAnimal = new Lobo(ani.name, edad, ani.imagen, comentarios, ani.sonido);   }  

                        if (ani.name === "Serpiente") {     
                            newAnimal = new Serpiente(       ani.name,       edad,       ani.imagen,       comentarios,       ani.sonido     );   }  

                        if (ani.name === "Leon") {     
                            newAnimal = new Leon(ani.name, edad, ani.imagen, comentarios, ani.sonido);   }  

                        if (ani.name === "Aguila") {     
                            newAnimal = new Aguila(ani.name, edad, ani.imagen, comentarios, ani.sonido);   }   

                                    myAnimals.push(newAnimal);    
                                    renderAnimals(newAnimal);
                        }
                        
const animalesPeligrosos = (async () => {
  try {
    const URL = "./animales.json";
    const request = await fetch(URL);
    const data = await request.json();
    console.table(data);
    return data;
  } catch (error) {
    console.error(error);
  }
});