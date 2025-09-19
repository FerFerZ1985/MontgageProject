const persona = {
    id:0,
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: '',
}



function processContactForm(e) {
    persona.nombres = document.forms["fcontact"]["fnames"].value
    persona.apellidos = document.forms["fcontact"]["fsurname"].value
    persona.telefono = document.forms["fcontact"]["fphone"].value
    persona.email = document.forms["fcontact"]["femail"].value
    persona.ciudad = document.forms["fcontact"]["fcity"].value
    persona.pais = document.forms["fcontact"]["fcountry"].value
    persona.id = allstorge().length;
    let personajson = JSON.stringify(persona);
    localStorage.setItem(persona.id, personajson);


    e.preventDefault();
    alert("Datos guardados con exito");

}

function listarcontactos() {
    let dinmicTable = "";
    dinmicTable += "<table class='table'>";
    dinmicTable += "<tr>";
    dinmicTable += "<th>ID</th>";
    dinmicTable += "<th>Nombres</th>";
    dinmicTable += "<th>Apellido</th>";
    dinmicTable += "<th>Telefono</th>";
    dinmicTable += "<th>Email</th>";
    dinmicTable += "<th>Accion</th>";
    dinmicTable += "</tr>";

let personasGuardadas = allstorge();    
for(let i=0; i < personasGuardadas.length;i++){
    dinmicTable += "<tr>";
    let personaobjecto = JSON.parse (personasGuardadas[i]);
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.id;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.nombres;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.apellidos;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.telefono;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.email;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += '<a href="https://www.w3schools.com">Ver</a>'
    dinmicTable += "</td>";
    dinmicTable += "</tr>";
    dinmicTable += "<tr>";
}
    dinmicTable += "</table>";
    document.getElementById("tablecontact").innerHTML = dinmicTable;
}

function allstorge(){
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--){
        values.push(localStorage.getItem(keys[i]));
    }
    return values;
}