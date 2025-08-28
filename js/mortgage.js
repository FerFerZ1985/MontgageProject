
function calculateMortgage () {
    let cuota = document.forms ["fmortgage"] ["fcuota"].value;
    let costoTotal = document.forms ["fmortgage"] ["fvalortotal"].value;
    let intereses = document.forms ["fmortgage"] ["ftinteres"].value;
    let plazoAnio = document.forms ["fmortgage"] ["fplazo"].value;

    const mortgage = {
        totalPrestamo : 0, 
        totalInteres : 0,
        cuotaMensual : 0
    };

    mortgage.totalPrestamo =  costoTotal - cuota;

    alert (" El valor ingresado es: " +mortgage.totalPrestamo );

}