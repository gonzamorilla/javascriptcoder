const vehiculos = [
    { id: 12, nombre: "BMW M4 Coupé", categoria: "Coupe", precio: 120000, color: "Amarillo", img: "./media/bmw-m4-coupe.jpg" },
    { id: 15, nombre: "BMW X5 M", categoria: "SUV", precio: 90000, color: "Azul", img: "./media/bmw-x5-m.jpg" },
    { id: 32, nombre: "BMW Serie 5", categoria: "Sedan", precio: 55000, color: "Verde", img: "./media/bmw-serie5-sedan.jpg" },
    { id: 84, nombre: "BMW M2 Coupé", categoria: "Coupe", precio: 88000, color: "Gris", img: "./media/bmw-m2-coupe.jpg" },
    { id: 56, nombre: "BMW Serie 7 Sedán", categoria: "Sedan", precio: 120000, color: "Amarillo", img: "./media/bmw-serie7-sedan.jpg" },
    { id: 21, nombre: "BMW X1", categoria: "SUV", precio: 90000, color: "Azul", img: "./media/bmw-x1.jpg" },
    { id: 10, nombre: "BMW Serie 8 Coupe", categoria: "Coupe", precio: 55000, color: "Verde", img: "./media/bmw-serie8-coupe.jpg" },
    { id: 51, nombre: "BMW Serie 2 Gran Coupé", categoria: "Coupe", precio: 88000, color: "Gris", img: "./media/bmw-serie2-grancoupe.jpg" }
]


let contenedorReservas = document.getElementById("contenedorReservas")
let contenedor = document.getElementById("contenido2")
renderizarVehiculos(vehiculos)

let reservas = []
if (localStorage.getItem("reservas")) {
    reservas = JSON.parse(localStorage.getItem("reservas"))
}
renderizarReservas(reservas)

let filtroCoupe = document.getElementById("coupe")
let filtroSedan = document.getElementById("sedan")
let filtroSuv = document.getElementById("suv")
let filtroTodos = document.getElementById("todos")


filtroCoupe.addEventListener("click", renderizarVehiculosFiltrados)
filtroSedan.addEventListener("click", renderizarVehiculosFiltrados)
filtroSuv.addEventListener("click", renderizarVehiculosFiltrados)
filtroTodos.addEventListener("click", renderizarVehiculosFiltrados)

function renderizarVehiculosFiltrados(e) {
    if (e.target.id == "todos") {
        renderizarVehiculos(vehiculos)
    } else {
        renderizarVehiculos(vehiculos.filter(vehiculo => vehiculo.categoria.toLowerCase() == e.target.id))
    }
}

function renderizarVehiculos(arrayDeVehiculos) {
    contenido2.innerHTML = ""
    for (const vehiculo of arrayDeVehiculos) {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta-vehiculo"
        tarjeta.innerHTML = `
            <img src=${vehiculo.img}>
            <h2>${vehiculo.nombre}</h2>
            <p>${vehiculo.precio} USD</p>
            <button class="botonCarrito" id=${vehiculo.id}>Reservar test drive</button>
        `
        contenedor.appendChild(tarjeta)
    }

    let botones = document.getElementsByClassName("botonCarrito")
    for (const boton of botones) {
        boton.addEventListener("click", reservarTestDrive)
    }
}

function reservarTestDrive(e) {
    let vehiculoReservado = vehiculos.find(vehiculo => vehiculo.id == e.target.id)
    let posicionVehiculoReservado = reservas.findIndex(vehiculo => vehiculo.id == vehiculoReservado.id)
    if (posicionVehiculoReservado != -1) {
        ""
    } else {
        reservas.push(vehiculoReservado)
        localStorage.setItem("reservas", JSON.stringify(reservas))
    }
    renderizarReservas(reservas)
}

function renderizarReservas(arrayDeVehiculos) {
    contenedorReservas.innerHTML = ''
    for (const vehiculo of arrayDeVehiculos) {
        contenedorReservas.innerHTML += `
        <div class="tarjetasReserva">
        <h3>Seleccionaste ${vehiculo.nombre}</h3>
        <img src=${vehiculo.img}>
        <p>Su precio es de <b>${vehiculo.precio} USD</b></p>
        <p> Contactanos para coordinar el test drive</p>
        </div>
        `
    }
}

let botonContactarse = document.getElementById("botonContactarse")
botonContactarse.addEventListener("click", () => localStorage.removeItem("reservas"))