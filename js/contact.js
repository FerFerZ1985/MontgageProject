const persona = {
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: '',
}

let personaArray = []

function processContactForm(e) {
    persona.nombres = document.forms["fcontact"]["fnames"].value
    persona.apellidos = document.forms["fcontact"]["fsurname"].value
    persona.telefono = document.forms["fcontact"]["fphone"].value
    persona.email = document.forms["fcontact"]["femail"].value
    persona.ciudad = document.forms["fcontact"]["fcity"].value
    persona.pais = document.forms["fcontact"]["fcountry"].value

    let personajson = JSON.stringify(persona);

    personaArray.push(personajson);

    e.preventDefault();
    alert("Datos guardados con exito" + personaArray.toString());

}

function listarcontactos() {
    let dinmicTable = "";
    dinmicTable += "<table class='table'>";
    dinmicTable += "<tr>";
    dinmicTable += "<th>Nombres</th>";
    dinmicTable += "<th>Apellido</th>";
    dinmicTable += "<th>Telefono</th>";
    dinmicTable += "<th>Email</th>";
    dinmicTable += "</tr>";

for(let i= 0; i < personaArray.length;i++){
    dinmicTable += "<tr>";
    let personaobjecto = JSON.parse (personaArray[i]);
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
    dinmicTable += "</tr>";
    dinmicTable += "<tr>";
}
    dinmicTable += "</table>";
    document.getElementById("tablecontact").innerHTML = dinmicTable;
}