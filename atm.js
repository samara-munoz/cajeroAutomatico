let retirar = document.getElementById('retirar')
let confirmar = document.getElementById('confirmar')
let validarIngreso = document.getElementById('validarIngreso')
let identificacion = document.getElementById('identificacion')
let constraseña = document.getElementById('contraseña')
let mensaje = document.getElementById('mensaje')
let mensajeOperacion = document.getElementById('mensajeOperacion')
let mostrarMonto = document.getElementById('mostrarMonto')
let mensajeConfirmacion = document.getElementById('mensajeConfirmacion')
let si = document.getElementById('si')
let no = document.getElementById('no')
let salir = document.getElementById('salir')
let gracias = document.getElementById('gracias')
let mensajeSaldo = document.getElementById('mensajeSaldo')
let retiro = false
let deposito = false
let montonuevo = 0
let montoAnterior = 0
let personas = []
let persona = {}
class Cajero {
    constructor(nombre, id, password, saldo) {
        this.nombre = nombre
        this.id = id
        this.password = password
        this.saldo = saldo
    }
    seleccionarMonto() {
        // console.log(this)
        mostrarMonto.style.display = 'block'
        // montonuevo = prompt('Ingresa el monto')
        // montonuevo = Number(mostrarMonto.value)
        // console.log(mostrarMonto.value,'monto ingresado')
        // return montonuevo
    }
    retirarDinero() {
        retiro = true
        this.seleccionarMonto()
        mensajeOperacion.innerHTML = 'Retiro'
        // console.log(montonuevo,'Retirar dinero')
        // console.log(this.saldo)
        // montoAnterior = this.saldo
        // // console.log(montoAnterior,'monto anterior')
        // if (this.saldo >= Number(montonuevo)) {
        //     this.saldo = this.saldo-montonuevo
        //     console.log('retiraste: ',montonuevo)
        //     console.log(this.saldo,'saldo')
        //     // return `Retiraste: ${this.saldo}`
        //  } 
        //  else {
        //     console.log('No tiene suficiente monto en su cuenta')
        //     // return `No tiene suficiente monto en su cuenta`
        // }
    }
    depositarDinero() {
        deposito = true
        this.seleccionarMonto()
        mensajeOperacion.innerHTML = 'Deposito'
        // montoAnterior = this.saldo
        // console.log(montoAnterior,'monto anterior')
        // this.saldo = this.saldo+Number(montonuevo)
        // console.log('Depositaste: ',montonuevo)
        // console.log(this.saldo,'saldo')
        // return `Depositaste: ${this.saldo}`
    }
    confirmarTransaccion() {
        montonuevo = Number(mostrarMonto.value)
        console.log(montonuevo, 'monto confirmado')
        si.style.display = 'inline'
        si.innerHTML = 'SI'
        no.style.display = 'inline'
        no.innerHTML = 'NO'
        mensajeConfirmacion.innerHTML = 'Desea continuar con la operacion?'
        // console.log(this.saldo,'saldo actual')
        // console.log(montoAnterior,'monto anterior')
        // if (montoAnterior > this.saldo) {   
        //     console.log('Retiro exitoso')
        // } else {
        //     console.log('Depósito exitoso')
        // }
    }
    siOperacion() {
        if (retiro === true && deposito === false) {
            if (this.saldo >= Number(montonuevo)) {
                this.saldo = this.saldo - montonuevo
                console.log('retiraste: ', montonuevo)
                console.log(this.saldo, 'saldo')
                retiro = false
                mensajeOperacion.innerHTML = 'Retiro exitoso'
                mostrarMonto.style.display = 'none'
                mostrarMonto.value = ''
                mensajeConfirmacion.innerHTML = 'Desea realizar otra operación?'
                // si.style.display = 'none'
                // no.style.display = 'none'
                // return `Retiraste: ${this.saldo}`
            }
            else {
                mostrarMonto.style.display = 'none'
                mensajeOperacion.innerHTML = 'No tiene suficiente monto en su cuenta'
                mensajeConfirmacion.innerHTML = 'Desea realizar otra operación?'
                retiro = false
                // console.log('No tiene suficiente monto en su cuenta')
                // return `No tiene suficiente monto en su cuenta`
            }
        } else if (retiro === false && deposito === true) {
            this.saldo = this.saldo + Number(montonuevo)
            console.log('Depositaste: ', montonuevo)
            console.log(this.saldo, 'saldo')
            deposito = false
            mensajeOperacion.innerHTML = 'Deposito exitoso'
            mostrarMonto.style.display = 'none'
            mostrarMonto.value = ''
            mensajeConfirmacion.innerHTML = 'Desea realizar otra operación?'
            // si.style.display = 'none'
            // no.style.display = 'none'
            // return `Depositaste: ${this.saldo}`
        } else if (retiro === false && deposito === false) {
            mensajeConfirmacion.innerHTML = ''
            mensajeSaldo.innerHTML = ''
            si.style.display = 'none'
            no.style.display = 'none'
            mensajeOperacion.innerHTML = 'Elija la operación'
        }
    }
    noOperacion() {
        montonuevo = 0
        mensajeConfirmacion.innerHTML = ''
        mostrarMonto.style.display = 'none'
        mostrarMonto.value = ''
        si.style.display = 'none'
        no.style.display = 'none'
        mensajeOperacion.innerHTML = ''
        this.salirSesion()
    }
    nuevoSaldo() {
        mensajeOperacion.innerHTML = 'Saldo actual'
        mensajeSaldo.innerHTML = this.saldo
        mensajeConfirmacion.innerHTML = 'Desea realizar otra operación?'
        si.style.display = 'inline'
        si.innerHTML = 'SI'
        no.style.display = 'inline'
        no.innerHTML = 'NO'
        // console.log('Tu saldo actual es: ',this.saldo)
        // return `Saldo actual: ${this.saldo}`
    }
    validarSesion() {
        // console.log(personas)
        // console.log(personas[identificacion])
        // if (personas[identificacion] )
        for (let i = 0; i < personas.length; i++) {
            // console.log(personas[i].id)
            // console.log(personas[i].password)
            // console.log(identificacion.value,'usuario')
            // console.log(constraseña.value,'pass')
            if (identificacion.value === personas[i].id && constraseña.value === personas[i].password) {
                console.log('Bienvenido. Sesion Iniciada.', personas[i].nombre)
                mensaje.innerHTML = 'Bienvenido ' + personas[i].nombre
                mensajeOperacion.innerHTML = 'Elija la operación'
                persona = personas[i]
                identificacion.style.display = 'none'
                constraseña.style.display = 'none'
                gracias.innerHTML = ''
                gracias.style.display = 'none'
                // console.log(persona)
                // console.log(persona,'esto es la persona')
            } else {
                // identificacion.value = ''
                // constraseña.value = ''
                gracias.innerHTML = 'Error. Verifique sus datos nuevamente'
                // console.log('Error. Verifique sus datos.')
            }
        }
    }
    salirSesion() {
        gracias.style.display = 'inline'
        mensaje.innerHTML = 'Bienvenido a su cajero'
        identificacion.style.display = 'inline'
        constraseña.style.display = 'inline'
        mensajeSaldo.innerHTML = ''
        identificacion.value = ''
        constraseña.value = ''
        mensajeOperacion.innerHTML = ''
        gracias.innerHTML = 'GRACIAS POR UTILIZAR NUESTRO CAJERO'
    }
}
const persona1 = new Cajero('Samara', '000', '9999', 50000)
const persona2 = new Cajero('Javier', '111', '8888', 80000)
const persona3 = new Cajero('Kelebra', '222', '7777', 70000)
const persona4 = new Cajero('Valentina', '333', '6666', 60000)
personas = [persona1, persona2, persona3, persona4]