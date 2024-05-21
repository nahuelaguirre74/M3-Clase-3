class CuentaBancaria {
    constructor (saldoInicial){
        this.saldo = saldoInicial;
    }

    depositar(cantidad){
        this.saldo += cantidad;
    }
    retirar(cantidad){
        if (cantidad <= this.saldo){
            this.saldo -= cantidad;
            return cantidad;
        } else{
            return 'Fondos Insuficientes';

            }

        }
        verSaldo(){
            return this.saldo;
        }
}

const cuenta = new CuentaBancaria(1000);

document.getElementById('transactionForm').addEventListener('submit',function(event){
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const trasactionType = document.getElementById('transactionType').value;

    if (trasactionType === 'deposit'){
        cuenta.depositar(amount)
    } else if (trasactionType === 'withdrawal'){
        const withdrawalResult = cuenta.retirar(amount);
        if (typeof withdrawalResult === 'string'){
            alert(withdrawalResult);
        }
    }

    document.getElementById('output2').innerHTML = `El saldo actual es : ${cuenta.verSaldo()}`;


    //PROFE: intenté sacar el resultado para que no me lo haga en una pantalla aparte pero no lo logro. 

    document.getElementById('resultadoFinal').innerHTML = deposit, withdrawalResult;
})



//Intenté con este código que tengo comentado pero tampoco. Me perdí.

// function agregarNumero(amount) {
// let valorActual = valorActual;
// actualizarPantalla();
// }


// function actualizarPantalla() {
// document.getElementById('pantalla').textContent = verSaldo;
// }