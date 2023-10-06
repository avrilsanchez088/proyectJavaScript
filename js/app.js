
const productos = [
    { id: 1, nombre: "Power Drink Cibeles", precio: 990, imagen: `../assets/img/powerdrink-cibeles.jpg`},
    { id: 2, nombre: "Whey Protein USN", precio: 2100, imagen: `../assets/img/USN_choco.2kg.jpg` },
    { id: 3, nombre: "Pure BCAA USN", precio: 1390, imagen: `../assets/img/pure-bcaa-usn.jpg` },
    { id: 4, nombre: "Energy Gel WOC", precio: 230, imagen: `../assets/img/energy-gel-woc.jpg` },
    { id: 5, nombre: "Drink Mix Fresa", precio: 1980, imagen: `../assets/img/drink-mix-fresa.jpg`},
];

let carritoCompra = [];

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carritoCompra', JSON.stringify(carritoCompra));
}

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carritoCompra');
    if (carritoGuardado) {
        carritoCompra = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
}

cargarCarritoDesdeLocalStorage();

const carrito = [];

function mostrarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="botonAgregarCarrito" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
        productosDiv.appendChild(card);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        mostrarCarrito();
    }
}
function eliminarDelCarrito(index) {
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1); 
        mostrarCarrito(); 
    }
}
function vaciarCarrito() {
    carrito.length = 0; 
    mostrarCarrito(); 
    guardarCarritoEnLocalStorage(); 
}
const botonVaciarCarrito = document.getElementById('vaciarCarrito');

botonVaciarCarrito.addEventListener('click', function() {
    vaciarCarrito();
});

function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito');
    const totalSpan = document.getElementById('total');
    
    carritoLista.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.innerText = `${producto.nombre} - $${producto.precio}`;
        carritoLista.appendChild(li);
        total += producto.precio;
    });

    totalSpan.innerText = total;
}


mostrarProductos();





/*
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













