const pantallaValorAnterior= document.getElementById("pantallaValorAnterior");
const pantallaValorActual= document.getElementById("pantallaValorActual");
const botonesNumeros= document.querySelectorAll(".numero");
const botonesOperadores= document.querySelectorAll(".operador");

const pantalla= new Pantalla(pantallaValorActual, pantallaValorAnterior);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        pantalla.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});
