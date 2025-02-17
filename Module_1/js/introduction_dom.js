class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

document.getElementById("crearPersona").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    
    if (nombre === "" || edad === "") {
        alert("Por favor, ingresa un nombre y una edad válida.");
        return;
    }
    
    const persona = new Persona(nombre, edad);
    document.getElementById("resultado").innerText = persona.saludar();
    alert(persona.saludar());
});