function mostrarArray(d) {
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "El resultado es: " + d.join(", ");
}
function calcular_5() {
    var valor = prompt("Ingresa los datos separados por una coma: ");
    var datos = valor.split(",");
    var D = [];
    for (var i = 0; i < datos.length; i++) {
        D.push(parseInt(datos[i]));
    }

    var d = ["m4", "p3", "m3", "m2", "m1", "p2", "m0", "p1", "p0"];

    d[0] = D[0];
    d[2] = D[1];
    d[3] = D[2];
    d[4] = D[3];
    d[6] = D[4];

    var p0 = ["0"];
    var p1 = ["0"];
    var p2 = ["0"];
    var p3 = ["0"];

    // P0
    if (d[6] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    if (d[4] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    if (d[2] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    if (d[0] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    var cantidad_unos = p0.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[8] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[8] = 1;
    }

    // P1
    if (d[6] === 0) {
        p1.push(0);
    } else {
        p1.push(1);
    }

    if (d[3] === 0) {
        p1.push(0);
    } else {
        p1.push(1);
    }

    if (d[2] === 0) {
        p1.push(0);
    } else {
        p1.push(1);
    }

    cantidad_unos = p1.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[7] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[7] = 1;
    }

    // P2
    if (d[4] === 0) {
        p2.push(0);
    } else {
        p2.push(1);
    }

    if (d[3] === 0) {
        p2.push(0);
    } else {
        p2.push(1);
    }

    if (d[2] === 0) {
        p2.push(0);
    } else {
        p2.push(1);
    }

    cantidad_unos = p2.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[5] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[5] = 1;
    }

    // P3
    if (d[0] === 0) {
        p3.push(0);
    } else {
        p3.push(1);
    }

    cantidad_unos = p3.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[1] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[1] = 1;
    }
    mostrarArray(d);
    console.log(d);
}

function calcular_6() {
    var valor = prompt("Ingresa los datos separados por una coma: ");
    var datos = valor.split(",");
    var D = [];
    for (var i = 0; i < datos.length; i++) {
        D.push(parseInt(datos[i]));
    }

    var d = ["m5", "m4", "p3", "m3", "m2", "m1", "p2", "m0", "p1", "p0"];

    d[0] = D[0];
    d[1] = D[1];
    d[3] = D[2];
    d[4] = D[3];
    d[5] = D[4];
    d[7] = D[5];

    var p0 = ["0"];
    var p1 = ["0"];
    var p2 = ["0"];
    var p3 = ["0"];

    // P0
    if (d[7] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    if (d[5] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    if (d[3] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    if (d[1] === 0) {
        p0.push(0);
    } else {
        p0.push(1);
    }

    var cantidad_unos = p0.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[9] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[9] = 1;
    }

    // P1
    if (d[7] === 0) {
        p1.push(0);
    } else {
        p1.push(1);
    }

    if (d[4] === 0) {
        p1.push(0);
    } else {
        p1.push(1);
    }

    if (d[3] === 0) {
        p1.push(0);
    } else {
        p1.push(1);
    }

    if (d[0] === 0) {
        p1.push(0);
    } else {
        p1.push(1);
    }

    cantidad_unos = p1.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[8] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[8] = 1;
    }

    // P2
    if (d[5] === 0) {
        p2.push(0);
    } else {
        p2.push(1);
    }

    if (d[4] === 0) {
        p2.push(0);
    } else {
        p2.push(1);
    }

    if (d[3] === 0) {
        p2.push(0);
    } else {
        p2.push(1);
    }

    cantidad_unos = p2.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[6] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[6] = 1;
    }

    // P3
    if (d[1] === 0) {
        p3.push(0);
    } else {
        p3.push(1);
    }

    if (d[0] === 0) {
        p3.push(0);
    } else {
        p3.push(1);
    }

    cantidad_unos = p3.filter(function (el) {
        return el === 1;
    }).length;

    if (cantidad_unos % 2 === 0) {
        console.log("La cantidad de unos es par.");
        d[2] = 0;
    } else {
        console.log("La cantidad de unos no es par.");
        d[2] = 1;
    }
    mostrarArray(d);
    console.log(d);
}

var opcion = prompt("Ingrese '5' o '6': ");
if (opcion === '5') {
    calcular_5();
} else if (opcion === '6') {
    calcular_6();
} else {
    console.log("Opción inválida. Por favor, ingrese '5' o '6'.");
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Opción inválida. Por favor, ingrese '5' o '6'.";
}


