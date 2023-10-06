
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


















