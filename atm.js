let retirar = document.getElementById('retirar')
let confirmar = document.getElementById('confirmar')
let montonuevo = 0
let montoAnterior = 0
class Cajero {
    constructor(saldo) {
        this.saldo = saldo
    }
    seleccionarMonto() {
        console.log(this)
        montonuevo = prompt('Ingresa el monto')
        console.log(montonuevo, 'monto')
        return montonuevo
    }
    retirarDinero() {
        console.log(montonuevo, 'Retirar dinero')
        console.log(this.saldo)
        montoAnterior = this.saldo
        if (this.saldo > Number(montonuevo)) {
            this.saldo = this.saldo - montonuevo
            console.log(this.saldo)
            return `Retiraste: ${this.saldo}`
        }
        //  else {
        //     return `No tiene suficiente monto en su cuenta`
        // }
    }
    depositarDinero() {
        montoAnterior = this.saldo
        this.saldo = this.saldo + Number(montonuevo)
        console.log(this.saldo, 'deposito')
        return `Depositaste: ${this.saldo}`
    }
    confirmarTransaccion() {
        if (montoAnterior > this.saldo) {
            this.depositarDinero()
        } else {
            this.retirarDinero()
        }
    }
    nuevoSaldo() {
        console.log(this.saldo, 'saldo actual')
        return `Saldo actual: ${this.saldo}`
    }
}
// class confirmarTransaccion extends Cajero {
//     constructor(saldo) {
//     super(saldo)
//     }
//     if (this. )
// }
const persona = new Cajero(50000)
// retirar.addEventListener('click',persona.seleccionarMonto)
// confirmar.addEventListener('click',persona.retirarDinero)
console.log(persona)
// persona.seleccionarMonto()
// persona.retirarDinero()