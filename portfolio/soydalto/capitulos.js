function capitulo1 () {
    // El codigo se puede mejorar pero es para ver el avance
    // The code can be improved, but it is to see the progress.

    dineroCofla = prompt ("¿Cuanto dinero tienes Cofla?");
    dineroRoberto = prompt ("¿Cuanto dinero tienes Roberto?");
    dineroPedro = prompt ("¿Cuanto dinero tienes Pedro?");

    if(dineroCofla >= 0.6 && dineroCofla < 1) {
        alert("Cofla, comprate el helado de agua \n \n y te sobran "+ (dineroCofla - 0.6));
    } else if (dineroCofla >= 1 && dineroCofla < 1.6) {
        alert("Cofla, comprate el helado de crema \n \n y te sobran "+ (dineroCofla - 1));
    } else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
        alert("Cofla, comprate el helado heladix \n \n y te sobran "+ (dineroCofla - 1.6));
    } else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
        alert("Cofla, comprate el helado heladovch \n \n y te sobran "+ (dineroCofla - 1.7));
    } else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
        alert("Cofla, comprate el helado helardo \n \n y te sobran "+ (dineroCofla - 1.8));
    } else if (dineroCofla >= 2.9) {
        alert("Cofla, te puedes comprar el helado con confites o el pote de 1/4Kg \n \n y te sobran "+ (dineroCofla - 2.9));
    }else {
        alert("Cofla, lo siento, no te alcanza para ningun helado");
    }

    if(dineroRoberto >= 0.6 && dineroRoberto < 1) {
        alert("Roberto, comprate el helado de agua \n \n y te sobran "+ (dineroRoberto - 0.6));
    } else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
        alert("Roberto, comprate el helado de crema \n \n y te sobran "+ (dineroRoberto - 1));
    } else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
        alert("Roberto, comprate el helado heladix \n \n y te sobran "+ (dineroRoberto - 1.6));
    } else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
        alert("Roberto, comprate el helado heladovch \n \n y te sobran "+ (dineroRoberto - 1.7));
    } else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
        alert("Roberto, comprate el helado helardo \n \n y te sobran "+ (dineroRoberto - 1.8));
    } else if (dineroRoberto >= 2.9) {
        alert("Roberto, te puedes comprar el helado con confites o el pote de 1/4Kg \n \n y te sobran "+ (dineroRoberto - 2.9));
    }else {
        alert("Roberto, lo siento, no te alcanza para ningun helado");
    }

    if(dineroPedro >= 0.6 && dineroPedro < 1) {
        alert("Pedro, comprate el helado de agua \n \n y te sobran "+ (dineroPedro - 0.6));
    } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
        alert("Pedro, comprate el helado de crema \n \n y te sobran "+ (dineroPedro - 1));
    } else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
        alert("Pedro, comprate el helado heladix \n \n y te sobran "+ (dineroPedro - 1.6));
    } else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
        alert("Pedro, comprate el helado heladovch \n \n y te sobran "+ (dineroPedro - 1.7));
    } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
        alert("Pedro, comprate el helado helardo \n \n y te sobran "+ (dineroPedro - 1.8));
    } else if (dineroPedro >= 2.9) {
        alert("Pedro, te puedes comprar el helado con confites o el pote de 1/4Kg \n \n y te sobran "+ (dineroPedro - 2.9));
    }else {
        alert("Pedro, lo siento, no te alcanza para ningun helado");
    }
}
function capitulo2a () {
    let free = false;
    const invitados = time => {
        let age = prompt("¿Cual es tu edad?");
        if(age <= 17) {
            alert("Eres menor de edad, no puedes entrar");
        } else {
            if(free == false && time >= 2 && time <= 7) {
                free = true;
                alert("Entras gratis por se la primera persona despues de las 02:00HS");
            } else {
                alert("Puede ingresar pero tiene tienes que pagar voleto de ingreso");
            }
        }
    }
    /* llamar funcion Invitados */
    invitados(/* hora */ 2);
}
document.querySelector(".btn-solution2b").addEventListener("click", () => {
    document.querySelector(".solution2b").classList.toogle("activate2b");
    const solution2b = document.querySelector(".solution2b");

    let dias = 10;
    let cantidadAlumnos = prompt("¿Cuantos alumnos son?");
    let alumnosTotales = [];
    let days = 1;
    for(let i = 0; i < cantidadAlumnos; i++) {
        alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)),0];
    }
    const asistencia = (nombre, p) => {
        let presencia = prompt(`dia ${days} del alumno ${nombre}`);
        if (presencia == "p" || presencia == "P") {
            alumnosTotales[p][1]++;
        }
    }
    for(let i = 0; i < dias; i++) {
        for(alumno in alumnosTotales) {
            asistencia(alumnosTotales[alumno][0], alumno);
        }
    }
    let fragment2b = document.createDocumentFragment();
    for (let i = 0; i < alumnosTotales.length; i++) {
        let resultado = `${alumnosTotales[i][0]}:<br>
        ______Presentes: ${alumnosTotales[i][1]}<br>
        ______Ausencias: ${dias - alumnosTotales[i][1]}
        `;
        if(dias - alumnosTotales[i][1] > 3) {
            resultado += "<b style = 'color:red'> REPROBADO POR INASISTENCIAS </b><br>";
        } else {
            resultado += "<br><br>";
        }
        let div2b = document.createElement("DIV");
        div2b.tabIndex = i;
        div2b.classList.add(`alumno-${i}`, `alumno`);
        div2b.innerHTML = resultado;
        fragment2b.appendChild(div2b);
    }
});
function capitulo2c () {
    const tipoDeOperacion = prompt ("¿Que operacion deseas realizar? \n 1: Suma, 2: Resta, 3: Division, 4: Multiplicacion");
    let num1 = prompt ("Digite el primer numero");
    let num2 = prompt ("Digite el segundo numero");
    let operacion = (num1, num2) => {
        let elegirOperaciones = [parseInt(num1) + parseInt(num2), parseInt(num1) - parseInt(num2),parseInt(num1) / parseInt(num2),parseInt(num1) * parseInt(num2)];
        for(let i = 1 ; i <= 4; i++){
            if(tipoDeOperacion == i){
                alert(elegirOperaciones[tipoDeOperacion - 1]);
            }
        }
    }
    operacion(num1, num2);
}
document.querySelector(".btn-solution3a").addEventListener("click", () => {
    document.querySelector(".solution3a").classList.toggle("activate3a");
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
    phone1 = new Phone("Rojo", "150g", "5'", "HD", "1GB");
    phone2 = new Phone("Negro", "155g", "5.4'", "Full HD", "2GB");
    phone3 = new Phone("Blanco", "146g", "5.9'", "Full HD", "3GB");
    
    if(document.querySelector(".activate3a")){
        document.querySelector(".activate3a").innerHTML = `
        ${phone1.mobileInfo()} <br>
        ${phone2.mobileInfo()} <br>
        ${phone3.mobileInfo()} <br>`;
    } else {
        document.querySelector(".solution3a").innerHTML = "";
    }
});
document.querySelector(".btn-solution3b").addEventListener("click", () => {
    document.querySelector(".solution3b").classList.toggle("activate3b");
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

    if(document.querySelector(".activate3b")){
        document.querySelector(".activate3b").innerHTML = `
        ${phone1.mobileInfo()} <br>
        ${phone2.mobileInfo()} <br>
        ${phone3.mobileInfo()} <br>
        ${phone4.infoAltaGama()} <br>
        ${phone5.infoAltaGama()} <br>`;
    } else {
        document.querySelector(".solution3b").innerHTML = "";
    }
});
document.querySelector(".btn-solution3c").addEventListener("click", () => {
    document.querySelector(".solution3c").classList.toggle("activate3c");
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

    if(document.querySelector(".activate3c")){
        document.querySelector(".activate3c").innerHTML = `
        ${app1.infoApp()}<br>
        ${app2.infoApp()}<br>
        ${app3.infoApp()}<br>
        ${app4.infoApp()}<br>
        ${app5.infoApp()}<br>
        ${app6.infoApp()}<br>
        ${app7.infoApp()}<br>`
    } else {
        document.querySelector(".solution3c").innerHTML = "";
    }
});
function capitulo4a () {
    const tipoDeOperacion = prompt ("¿Que operacion deseas realizar? \n 1: Suma, 2: Resta, 3: Division, 4: Multiplicacion, 5: Potenciacion, 6: Raiz Cuadrados, 7: Raiz Cubica");
    if(tipoDeOperacion < 6) {
        let num1 = prompt ("Digite el primer numero");
        let num2 = prompt ("Digite el segundo numero");
        let operacion = (num1, num2) => {
            let elegirOperaciones = [parseInt(num1) + parseInt(num2), parseInt(num1) - parseInt(num2),parseInt(num1) / parseInt(num2),parseInt(num1) * parseInt(num2), parseInt(num1) ** parseInt(num2)];
            for(let i = 1 ; i <= elegirOperaciones.length; i++){
                if(tipoDeOperacion == i){
                    alert(elegirOperaciones[tipoDeOperacion - 1]);
                }
            }
        }
        operacion(num1, num2);
    } else {
        let num = prompt("Digite numero");
        class mathRaices {
            constructor() {

            }
            raizCuadrada(num) {
                return Math.sqrt(num);
            }
            raizCubica(num) {
                return Math.cbrt(num);
            }
        }
        const mathraices = new mathRaices();
        cuadrado = mathraices.raizCuadrada(num);
        cubico = mathraices.raizCubica(num);
        if(tipoDeOperacion == 6) {
            alert(cuadrado);
        }
        if(tipoDeOperacion == 7) {
            alert(cubico);
        }
        if(tipoDeOperacion >= 8) {
            alert("Opcion no valida para operacion");
        }
    }
}
function capitulo4b () {
    const obtenerInformacion = (materia) => {
        materias = {
            fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
            programacion: ["Dalto", "pedro", "pepito", "juan", ],
            logica: ["Hernandez", "pedro", "pepito", "juan", "cofla", "maria"],
            quimica: ["Rodriguez", "pedro", "juan", "cofla", "maria"],
        }
        if (materias[materia] !== undefined) {
            return [materias[materia],materia,materias];
        } else {
            return materias;
        }
    }
    const mostrarInformacion = (materia) => {
        let informacion = obtenerInformacion(materia);

        if(informacion !== false) {
            let profesor = informacion[0][0];
            let alumnos = informacion[0];
            alumnos.shift();
            document.write(`El profesor de <b>${informacion[1]}</b> es: <b  style='color: red'>${profesor}</b><br>
            Los alumnos son: <b style='color: blue'> ${alumnos}</b><br><br>`);
        }
    }
    const cantidadDeClases = (alumno) => {
        let informacion = obtenerInformacion();
        let clasesPresentes = [];
        let cantidadTotal =  0;
        for (info in informacion) {
            if (informacion[info].includes(alumno)) {
                cantidadTotal++;
                clasesPresentes.push(info);
            }
        }
        document.write(`<b style = "color: blue"> ${alumno}</b> esta en <b>${cantidadTotal} clases: </b><b style = "color: green">${clasesPresentes}</b> con los profesores </br>`);
    }
    mostrarInformacion("fisica");
    mostrarInformacion("programacion");
    mostrarInformacion("logica");
    mostrarInformacion("quimica");
    cantidadDeClases("cofla");
    document.write(`<br><br><b style='color: red; font-size: 20px'>RECARGAR LA PAGINA PARA IR A INICIO</b>`);
}
function capitulo6 () {
    location.href = "./cap6/index.html";
}