function calculadoraMejorada() {
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
function facultad () {
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
            Los alumnos son: <b style='color: blue'> ${alumnos}</b></br></br>`);
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
}
function eleccionDeMaterias () {
    let materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "pepito", "juan", ],
        logica: ["Hernandez", "pedro", "pepito", "juan", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "juan", "cofla", "maria"]
    }
    const inscribir = (alumno, materia) => {
        alumnos = materias[materia];
        if (alumnos.length >= 21) {
            document.write(`Lo siento ${alumno}, las clases de ${materia} ya esta llenas <br><br>`);
        } else {
            alumnos.push(alumno);
            if (materia == "fisica") {
                materias = {
                    fisica: alumnos,
                    programacion: materias['programacion'],
                    logica: materias['logica'],
                    quimica: materias['quimica']
                }
            } else if (materia == "programacion") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: alumnos,
                    logica: materias['logica'],
                    quimica: materias['quimica']
                }
            } else if (materia == "logica") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: materias['programacion'],
                    logica: alumnos,
                    quimica: materias['quimica']
                }
            } else if (materia == "quimica") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: materias['programacion'],
                    logica: materias['logica'],
                    quimica: alumnos
                }
            }
            document.write(`¡Felicidades ${alumno}!, Quedo inscrito en ${materia}. <br><br>`)
        }
    }
    document.write(`${materias["fisica"]}<br>`)
    document.write(`${materias["programacion"]}<br>`)
    document.write(`${materias["logica"]}<br>`)
    document.write(`${materias["quimica"]}<br>`)
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    inscribir("juanito", "fisica");
    inscribir("jhon", "programacion");
    inscribir("fernando", "logica");
    inscribir("pedrito", "quimica");
    document.write(`${materias["fisica"]}<br>`)
    document.write(`${materias["programacion"]}<br>`)
    document.write(`${materias["logica"]}<br>`)
    document.write(`${materias["quimica"]}<br>`)
}
eleccionDeMaterias();