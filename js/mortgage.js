
function calculateMortgage( event ) {

    event.preventDefault ();
    
    let cuota = document.forms[ "fmortgage" ][ "fcuota" ].value;
    let costoTotal = document.forms[ "fmortgage" ][ "fvalortotal" ].value;
    let interes = document.forms[ "fmortgage" ][ "ftinteres" ].value;
    let plazoAnio = document.forms[ "fmortgage" ][ "fplazo" ].value;
    const MONTHS_ON_YEAR = 12;

    const mortgage = {
        totalPrestamo: 0,
        totalInteres: 0,
        cuotaMensual: 0
    };

    mortgage.totalPrestamo = costoTotal - cuota;
    mortgage.totalInteres = mortgage.totalPrestamo * interes / 100;
    mortgage.cuotaMensual = ( mortgage.totalPrestamo + mortgage.totalInteres ) / ( plazoAnio * MONTHS_ON_YEAR );
    outputMorgage ( mortgage );

}  

function outputMorgage ( finalMortgage ) {    
    document.getElementById ( "omontoprestamo" ).innerHTML = finalMortgage.totalPrestamo;
    document.getElementById ( "ocuota" ).innerHTML = finalMortgage.cuotaMensual;
}

function resetform(){
    document.forms["fmortgage"].reset();
}




