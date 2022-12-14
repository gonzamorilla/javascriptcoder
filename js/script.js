/*
IF- ELSE para registrar y dar la bienvenida al usuario, siempre y cuando
cumpla con los requisitos (+ 18 edad)
*/

let nombreUsuario = prompt("Ingrese un nombre: ")
let apellidoUsuario = prompt("Ingrese un apellido: ")
let edadUsuario = parseInt(prompt("Ingrese su edad: "))

const tiposDePorsche = [
    {
        nombre: 'Porsche Cayenne Turbo GT',
        categoria:'suv',
        precio: 237730
    },
    {
        nombre: 'Porsche 911 GT2 RS',
        categoria: 'circuito',
        precio: 326930
    },
    {
        nombre: 'Porsche 928 GTS',
        categoria: 'daily',
        precio: 93120
    }
]


if (edadUsuario > 18) {
    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario)

} else {
    alert("Debes ser mayor de edad para poder ingresar")

}

let categoriaSeleccionadaSuv = prompt("Escriba SUV para ver más información sobre los modelos disponibles").toLowerCase()
let categoriaSUV = tiposDePorsche.find(tipo => tipo.categoria == "suv") 
alert(categoriaSUV.nombre + "\nPrecio " + categoriaSUV.precio + " USD")

let categoriaSeleccionadaCircuito = prompt("Escriba Circuito para ver más información sobre los modelos disponibles").toLowerCase()
let categoriaCircuito = tiposDePorsche.find(tipo => tipo.categoria == "circuito") 
alert(categoriaCircuito.nombre + "\nPrecio " + categoriaCircuito.precio + " USD")

let categoriaSeleccionadaDaily = prompt("Escriba Daily para ver más información sobre los modelos disponibles").toLowerCase()
let categoriaDaily = tiposDePorsche.find(tipo => tipo.categoria == "daily") 
alert(categoriaDaily.nombre + "\nPrecio " + categoriaDaily.precio + " USD")

