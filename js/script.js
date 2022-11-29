/*
IF- ELSE para registrar y dar la bienvenida al usuario, siempre y cuando
cumpla con los requisitos (+ 18 edad)
*/

let nombreUsuario = prompt("Ingrese un nombre: ")
let apellidoUsuario = prompt("Ingrese un apellido: ")
let edadUsuario = parseInt(prompt("Ingrese su edad: "))


if (edadUsuario > 18) {
    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario)

    do {
        const grupo = Number(prompt("Seleccione el grupo que desea ver la tabla \n Grupo A - Digite 1 \n Grupo B - Digite 2 \n Grupo C - Digite 3 \n Grupo D - Digite 4"))
        if (grupo == 1) {
            alert("Holanda 7 pts \nSenegal 6 pts \nEcuador 4 pts \nQatar 2 pts")
        } else if (grupo == 2) {
            alert("Inglaterra 4 pts\nIrán 3 pts\nEstados Unidos 2 pts\nGales 1 pt")
        } else if (grupo == 3) {
            alert("Polonia 4 pts\nArgentina 3pts\nArabia Saudita 3 pts\nMexico 1pt")
        } else if (grupo == 4) {
            alert("Francia 6 pts\nAustralia 3pts\nDinamarca 1 pts\nTunez 1pt")
        } else {
            alert("Introduce una opción válida")
        }
    } while (grupo = Number);

} else {
    alert("Debes ser mayor de edad para poder ingresar")
}