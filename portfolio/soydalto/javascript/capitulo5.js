function aprobar() {
    const materias = {
        fisica: [75, 7, 3, "fisica"],
        matematica: [60, 8, 2, "matematica"],
        logica: [90, 9, 4, "logica"],
        quimica: [60, 5, 4, "quimica"],
        caluclo: [85, 7, 3, "calculo"],
        programacion: [100, 10, 4, "programacion"],
        biologia: [40, 4, 2, "biologia"],
        bbdd: [95, 8, 1, "base de datos"],
        algebra: [60, 7, 4, "algebra"]
    }
    const aprobo = () => {
        for (materia in materias) {
            let asistencias = materias[materia][0];
            let promedio = materias[materia][1];
            let trabajos = materias[materia][2];
            if(asistencias >= 90) {
                console.log(`${materias[materia][3]}`);
                console.log("%c   Asistencia aprobado", "color: green;");
            } else {
                console.log(`${materias[materia][3]}`);
                console.log("%c   Asistencia reprobo", "color: red;");
            }
            if(promedio >= 7) {
                console.log("%c   Promedio aprobado", "color: green;");
            } else {
                console.log("%c   Promedio Reprobado", "color: red;");
            }
            if(trabajos >= 3) {
                console.log("%c   Trabajos aprobados", "color: green;");
            } else {
                console.log("%c   Trabajos Reprobados", "color: red;");
            }
        }
    }
    aprobo();
}
function diario() {
    let tp = "100 minutos hacer trabajos prácticos";
    let estudio = "100 minutos de estudio";
    let trabajo = "240 minutos de trabajo";
    let homework = "30 minutos de cosas de la casa";
    let descanso = "10 minutos de descanso";

    for (var i = 0; i < 14; i++){
        if( i == 0 ) {
            console.group("Semana 1")
        }
        console.groupCollapsed("dia " + (i+1));
        console.log(trabajo);
        console.log(descanso);
        console.log(estudio);
        console.log(tp);
        console.log(homework);
        console.groupEnd();
        if ( i == 6 ) {
            console.groupEnd();
            console.groupCollapsed("Semana 2")
        }
    }
    console.groupEnd();
    console.groupEnd();
}
diario();