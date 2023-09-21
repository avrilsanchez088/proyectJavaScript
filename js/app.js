const productos = [
    { nombre: "Proteina chocolate", precio: 1500 },
    { nombre: "Proteina vainilla", precio: 1600 },
    { nombre: "Proteina vegana", precio: 1900 },
    { nombre: "Power drink", precio: 1500 },
    { nombre: "Gatorade", precio: 120 },
];

const detalleFactura = [];
let opcion;
let total = 0;

const SI = "si";
const NO = "no";

function saludar() {
    let nombreCliente = prompt("¡Bienvenido/a a nuestra tienda online! \nPor favor, ingrese su nombre");
    alert("Hola, " + nombreCliente + ", que bueno verte por aquí! \nPresiona enter para comenzar a comprar");
}

function menu() {
    saludar();
    do {
        const listaProductos = productos.map((product, index) =>
            `${index + 1} - ${product.nombre} $${product.precio}`);
        opcion = parseInt(prompt('Qué producto desea elegir? Elija el numero del mismo\n' + listaProductos.join('\n')));

        while (isNaN(opcion) || opcion <= 0 || opcion > productos.length) {
            opcion = parseInt(prompt('Producto no válido. Por favor, elija un producto de la lista.'));
        }

        const cantidad = parseInt(prompt('Ingrese la cantidad que desea agregar:'));

        if (!isNaN(cantidad) && cantidad > 0) {
            const productoSeleccionado = productos[opcion - 1];
            const subtotal = productoSeleccionado.precio * cantidad;
            detalleFactura.push({ nombre: productoSeleccionado.nombre, precio: productoSeleccionado.precio, cantidad, subtotal });
        } else {
            alert('Cantidad no válida. El producto no se ha agregado al carrito.');
        }

        salir = prompt('¿Desea finalizar su compra?\n Responda con "si" o "no"');

    } while (salir.toLowerCase() !== 'si');
}

menu();

total = detalleFactura.reduce((acc, item) => acc + item.subtotal, 0);

alert(`El total de su carrito es de: $${total}`);


/*
precio = +prompt("Ingrese el valor del producto");
cantidad = +prompt("Ingrese la cantidad");
continuarComprando = prompt("Desea agregar otro producto a su carrito?");
while (continuarComprando !== SI && continuarComprando !== NO) {
    continuarComprando = prompt("Respuesta no válida. \nPor favor, conteste con si o no");
}
total = total + precio * cantidad;



do {
    precio = +prompt("Ingrese el valor del nuevo producto");
    cantidad = +prompt("Ingrese la cantidad");
    continuarComprando = prompt("Desea agregar otro producto a su carrito?");
    while (continuarComprando !== SI && continuarComprando !== NO) {
        continuarComprando = prompt("Respuesta no válida. \nPor favor, conteste con si o no");
    }
    total = total + precio * cantidad;

} while (continuarComprando == SI);

alert("El total del carrito es de $" + total + ". ¡Gracias por tu compra!");
*/













