


const SI = "si";
const NO = "no";
let precio;
let total = 0;
let cantidad;
let continuarComprando;
function saludar() {
    let nombreCliente = prompt("¡Bienvenido/a a nuestra tienda online! \nPor favor, ingrese su nombre");
    alert("Hola, " + nombreCliente + ", que bueno verte por aquí!")
}
saludar();


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














