function ejercicioUno() {
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

function ejercicioDos() {
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
    for(let i = 0; i < 10; i++) {
        for(alumno in alumnosTotales) {
            asistencia(alumnosTotales[alumno][0], alumno);
        }
    }
    for (alumno in alumnosTotales) {
        let resultado = `${alumnosTotales[alumno][0]}:<br>
        ______Presentes: ${alumnosTotales[alumno][1]}<br>
        ______Ausencias: ${10 - alumnosTotales[alumno][1]}
        `;
        if(10 - alumnosTotales[alumno][1] > 3) {
            resultado += "<b style = 'color:red'> REPROBADO POR INASISTENCIAS </b><br>";
        } else {
            resultado += "<br><br>";
        }
        document.write(resultado);
    }
}

function ejercicioTres() {
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

ejercicioTres();