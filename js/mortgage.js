
function calculateMortgage(event) {

    event.preventDefault();

    let cuota = document.forms["fmortgage"]["fcuota"].value;
    let costoTotal = document.forms["fmortgage"]["fvalortotal"].value;
    let interes = document.forms["fmortgage"]["ftinteres"].value;
    let plazoAnio = document.forms["fmortgage"]["fplazo"].value;
    const MONTHS_ON_YEAR = 12;

    const mortgage = {
        costoTotalInmueble: 0,
        totalPrestamo: 0,
        totalInteres: 0,
        cuotaMensual: 0
    };

    mortgage.costoTotalInmueble = costoTotal;
    mortgage.totalPrestamo = costoTotal - cuota;
    mortgage.totalInteres = mortgage.totalPrestamo * interes / 100;
    mortgage.cuotaMensual = (mortgage.totalPrestamo + mortgage.totalInteres) / (plazoAnio * MONTHS_ON_YEAR);
    outputMortgage(mortgage);

}

function outputMortgage(finalMortgage) {
    document.getElementById("omontoprestamo").innerHTML = valueToDollar(finalMortgage.totalPrestamo);
    document.getElementById("ocuota").innerHTML = valueToDollar(finalMortgage.cuotaMensual);
    var totalPrestamoPorcentaje = 0;
    totalPrestamoPorcentaje = finalMortgage.totalPrestamo * 100 / finalMortgage.costoTotalInmueble;
    alert(totalPrestamoPorcentaje);
    if (totalPrestamoPorcentaje > 90) {
        document.getElementById("omontoprestamo").className += " alertaporcentaje";
    } else {
        document.getElementById("omontoprestamo").className = "form-control";
    }
}

function resetform() {
    document.forms["fmortgage"].reset();
}

function valueToDollar(value) {
    const dollarformatter = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
    return dollarformatter.format(value);
}



