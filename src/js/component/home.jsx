import React, { useState } from 'react'; 
//Importamos React y useState de la biblioteca react. useState nos permite agregar estados en nuestros componentes.
import Semaforo from "./semaforo"; 
//Importamos el componente Semaforo.

//create your first component
const Home = () => { //Definimos el componente Home como una función de flecha.
	
//Agregamos un estado llamado "selected" y una función "setSelected" para actualizar su valor. Inicialmente, selected está vacío.
	const [selected, setSelected] = useState(""); 

	return (

<div className="container text-center p-3 bg-black">

			<div className="rojo">
				<Semaforo color={"bg-danger"} selected={selected} setSelected={setSelected}/>
				{/* 1."color": El color del semáforo, que es "bg-danger" "rojo" en este caso. 
					2."selected": La variable que almacena el semáforo seleccionado. Si el semáforo rojo está seleccionado, su valor será "bg-danger". 
					3."setSelected": La función que nos permite actualizar el valor */}
			</div>
			<div className="amarillo">
				<Semaforo color={"bg-warning"} selected={selected} setSelected={setSelected}/>
			</div>
			<div className="verde">
				<Semaforo color={"bg-success"} selected={selected} setSelected={setSelected}/>	
			</div>
		</div>
	);
};
export default Home;

// Aquí, la función "Semaforo" es un componente de función que acepta un objeto de propiedades. 
// La propiedad "color" determina el "color" del semáforo. La propiedad "selected" nos dice cuál es el semáforo seleccionado.
// La propiedad "setSelected" es una función que nos permite actualizar el valor de selected.

// Dentro de la función "Semaforo", se define una función "on" que actualiza el valor de "selected" al color del semáforo actual 
// cuando se hace clic en él.

// El botón que representa el semáforo tiene una clase de CSS que cambia en función de si el semáforo está seleccionado o no. 
// Si el semáforo está seleccionado, su color será el mismo que su color de fondo. Si no está seleccionado, 
// su color de fondo será semitransparente.

// Este código garantiza que, cuando un semáforo esté seleccionado, se ilumina y, cuando no esté seleccionado, 
// regrese a su color original