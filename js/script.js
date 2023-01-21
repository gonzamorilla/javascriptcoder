
fetch("./vehiculos.json")
    .then(response => response.json())
    .then(vehiculos => programaBMW(vehiculos))


function programaBMW(vehiculos) {

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
            <div class=vehiculoRenderizado> 
                <img src=${vehiculo.img}>
                <h2>${vehiculo.nombre}</h2>
                <p>${vehiculo.precio} USD</p>
                <button class="botonCarrito" id=${vehiculo.id} onclick="scrollElement()">Sumar a mi lista</button>
            </div>
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
        document.getElementById("contenedorContactarse").style.display = ""
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
    botonContactarse.addEventListener("click", () => {
        Swal.fire({
            title: '¡Gracias por elegirnos!',
            text: 'Un agente se pondrá en contacto a la brevedad',
            imageUrl: './media/ubicacionbmw.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Ubicacion BMW',
        })
        localStorage.removeItem("reservas")
        reservas = []
        renderizarReservas(reservas)
        document.getElementById("contenedorContactarse").style.display = "none"
    })

}