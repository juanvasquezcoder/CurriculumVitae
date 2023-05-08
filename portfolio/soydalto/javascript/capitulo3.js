const primerEjercicio = () => {
    class Phone {
        constructor(color, peso, rdp, rdc, ram){
            this.color = color;
            this.peso =peso;
            this.resolucionDePantalla = rdp;
            this.resolucionDeCamara = rdc;
            this.memoriaRam = ram;
            this.encendido = false;
        }
        presionarBotonEncendido(){
            if(this.encendido == false) {
                alert("Celular prendiendo");
                this.encendido = true;
            } else {
                alert("Celular apagado");
                this.encendido = false;
            }
        }
        reiniciar(){
            if(this.encendido == true) {
                alert("Reiniciando celular");
            } else {
                alert("El celular esta apagado");
            }
        }
        tomarFoto() {
            alert(`Foto tomada en una solución de: ${this.resolucionDeCamara}`);
        }
        grabarVideo() {
            alert(`Grabando video en: ${this.resolucionDeCamara}`);
        }
        mobileInfo() {
            return `
            Color: <b>${this.color}</b></br>
            Peso: <b>${this.peso}</b></br>
            Tamaño: <b>${this.resolucionDePantalla}</b></br>
            Resolucion de Camara: <b>${this.resolucionDeCamara}</b></br>
            Ram: <b>${this.memoriaRam}</b></br>
            `;
        }
    }
    // EJERCICIO DOS =====================================

    class phoneGamaAlta extends Phone {
        constructor(color, peso, rdp, rdc, ram, rdce) {
            super(color, peso, rdp, rdc, ram);
            this.resolucionDeCamaraExtra = rdce;
        }
        grabarVideoLento() {
            alert("Estas grabando con camara lenta");
        }
        reconocimientoFacial() {
            alert("Vamos a iniciar un reconocimiento facial");
        }
        infoAltaGama() {
            return `${this.mobileInfo()} Resolución de camara extra: <b>${this.resolucionDeCamaraExtra}</b></br>`
        }
    }
    phone1 = new Phone("Rojo", "150g", "5'", "HD", "1GB");
    phone2 = new Phone("Negro", "155g", "5.4'", "Full HD", "2GB");
    phone3 = new Phone("Blanco", "146g", "5.9'", "Full HD", "3GB");
    phone4 = new phoneGamaAlta("Rojo", "130g", "5.2'", "4K", "3GB", "Full Hd");
    phone5 = new phoneGamaAlta("Negro", "142g", "6'", "4K", "4GB", "HD");

    document.write(`
    ${phone1.mobileInfo()} <br>
    ${phone2.mobileInfo()} <br>
    ${phone3.mobileInfo()} <br>
    ${phone4.infoAltaGama()} <br>
    ${phone5.infoAltaGama()} <br>
    `);
    
    // phone1.presionarBotonEncendido();
    // phone1.tomarFoto();
    // phone1.grabarVideo();
    // phone1.reiniciar();
    // phone1.presionarBotonEncendido();
}
const tercerEjercicio = () => {
    class App {
        constructor(descargas, puntuacion, peso) {
            this.descargas = descargas;
            this.puntuacion = puntuacion;
            this.peso = peso;
            this.iniciada = false;
            this.instalada = false;
        };
        instalar() {
            if(this.instalada == false) {
                this.instalada = true;
                alert("Aplicacion Instalada Correctamente");
            }
        }
        desinstalar() {
            if(this.instalada == true) {
                this.instalada = false;
                alert("Aplicacion Desinstalada Correctamente");
            }
        }
        abrir() {
            if(this.iniciada == false && this.instalada == true) {
                this.iniciada = true;
                alert("Aplicacion Abierta");
            }
        }
        cerrar() {
            if(this.iniciada == true && this.instalada == true) {
                this.iniciada = false;
                alert("Aplicacion Cerrada")
            }
        }
        infoApp() {
            return `
            Descargas: <b>${this.descargas}</b></br>
            Puntuacion: <b>${this.puntuacion}</b></br>
            Peso: <b>${this.peso}</b></br>
            `
        }
    }
    app1 = new App ("16.000", "5 estrellas", "900 MB");
    app2 = new App ("2.000", "4 estrellas", "400 MB");
    app3 = new App ("14.755", "3 estrellas", "150 MB");
    app4 = new App ("3.273", "4.3 estrellas", "300 MB");
    app5 = new App ("22.372", "4 estrellas", "500 MB");
    app6 = new App ("300.002", "3.7 estrellas", "200 MB");
    app7 = new App ("955", "2.8 estrellas", "380 MB");

    document.write(`
    ${app1.infoApp()}<br>
    ${app2.infoApp()}<br>
    ${app3.infoApp()}<br>
    ${app4.infoApp()}<br>
    ${app5.infoApp()}<br>
    ${app6.infoApp()}<br>
    ${app7.infoApp()}<br>
    `)
    // for(let i = 1; i < 8; i++) {
    //     document.write(`${app_1.infoApp()}`)
    // }

}
tercerEjercicio();
