'use strict'

// Interfaz para los métodos de pago (ISP)
class MetodoDePago {
    procesarPago(cantidad) {
        throw new Error('El método procesarPago debe ser implementado');
    }
}

// Clase concreta para pagos con tarjeta de crédito (SRP, LSP)
class PagoConTarjeta extends MetodoDePago {
    constructor(numeroTarjeta) {
        super();
        this.numeroTarjeta = numeroTarjeta;
    }

    procesarPago(cantidad) {
        console.log(`Procesando pago con tarjeta de crédito de ${cantidad} para el número de tarjeta ${this.numeroTarjeta}`);
    }
}

// Clase concreta para pagos con PayPal (SRP, LSP)
class PagoConPayPal extends MetodoDePago {
    constructor(correo) {
        super();
        this.correo = correo;
    }

    procesarPago(cantidad) {
        console.log(`Procesando pago con PayPal de ${cantidad} para el correo ${this.correo}`);
    }
}

// Clase para procesar pagos (DIP)
class ProcesadorDePagos {
    constructor(metodoDePago) {
        this.metodoDePago = metodoDePago;
    }

    procesar(cantidad) {
        this.metodoDePago.procesarPago(cantidad);
    }
}

// Uso del sistema de pagos
const pagoConTarjeta = new PagoConTarjeta('1234-5678-9012-3456');
const pagoConPayPal = new PagoConPayPal('usuario@ejemplo.com');

const procesadorConTarjeta = new ProcesadorDePagos(pagoConTarjeta);
const procesadorConPayPal = new ProcesadorDePagos(pagoConPayPal);

procesadorConTarjeta.procesar(100); // Procesando pago con tarjeta de crédito de 100 para el número de tarjeta 1234-5678-9012-3456
procesadorConPayPal.procesar(200); // Procesando pago con PayPal de 200 para el correo usuario@ejemplo.com


