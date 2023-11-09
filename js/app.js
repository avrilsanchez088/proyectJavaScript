


let productos = [];
let carrito = [];

async function obtenerProductos() {
    const response = await fetch('../productos.json');
    if (response.ok) {
        productos = await response.json();
        return productos;
    }
}

async function iniciar() {
    await obtenerProductos(); 
    mostrarProductos();
}

iniciar(); 

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img class= "Img" src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="botonAgregarCarrito" data-id="${producto.id}">Agregar al carrito</button>
    `;
        productosDiv.appendChild(card);
    });
    const botonesAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'));
            agregarAlCarrito(id);
        });
    });

}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
    }
}


function eliminarDelCarrito(index) {
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
    }
}

function vaciarCarrito() {
    Swal.fire({
        title: 'Seguro que quieres vaciar el carrito?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Hecho',
            'Tu carrito está vacío.',
            'success'
          )
        carrito = [];
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
        }
      })
    
}

const botonVaciarCarrito = document.getElementById('vaciarCarrito');

botonVaciarCarrito.addEventListener('click', vaciarCarrito);

function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito');
    const totalSpan = document.getElementById('total');

    carritoLista.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button class="botonEliminar" data-index="${index}">Eliminar</button>
        `;
        carritoLista.appendChild(li);
        total += producto.precio;
    });

    totalSpan.innerText = total;

    const botonesEliminar = document.querySelectorAll('.botonEliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            eliminarDelCarrito(index);
        });
    });
}


mostrarProductos();



















