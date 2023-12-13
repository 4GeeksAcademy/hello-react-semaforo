// Esta línea importa dos cosas de la biblioteca React: React en sí, y la función useState. 
// useState nos permite crear una variable en nuestro componente de React que pueda cambiar con el tiempo.
import React, {useState} from "react";

// Esta línea define una función llamada Semaforo que toma tres argumentos: color, selected, y setSelected.
// Estos argumentos nos permiten saber qué color tiene este semáforo y si está seleccionado o no, y actualizar la selección cuando el semáforo es presionado.
function Semaforo({color, selected, setSelected}) {

// Esta línea define una función llamada on. Cuando el botón del semáforo es presionado, esta función se ejecuta. 
// Esta función simplemente llama a setSelected con el argumento color, lo que significa que este semáforo ahora está seleccionado.
    function on() {
        setSelected(color);
    }

    
    return (                                                //esto es un if-----
        <button type="button" onClick={on} className={`btn ${selected === color ? color : `${color} bg-opacity-25`} rounded-circle m-3`} style={{width: "120px", height:"120px"}}></button>
    // type="button": Indica que este botón no tiene una función predeterminada de envío de formulario.
    // onClick={on}: Llama a la función on cuando el botón es presionado.
    // className={...}: Define el estilo del botón. Si este semáforo está seleccionado, el botón será del color del semáforo. 
    // Si no está seleccionado, el botón será del color del semáforo pero con una opacidad de fondo baja, lo que significa que no será tan brillante.
    // style={{...}}: Define el tamaño del botón.
    );
}

export default Semaforo
// Entonces, este código crea un botón de semáforo que puede ser seleccionado o no, y cambia de color cuando se presiona. 
// Además, permite a los usuarios del semáforo cambiar fácilmente entre los diferentes modos del semáforo.