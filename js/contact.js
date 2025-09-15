const persona = {
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: '',
}

let personaArray = []

function processContactForm(event) {
    persona.nombres = document.forms["fcontact"]["fnames"].value
    persona.apellidos = document.forms["fcontact"]["fsurname"].value
    persona.telefono = document.forms["fcontact"]["fphone"].value
    persona.email = document.forms["fcontact"]["femail"].value
    persona.ciudad = document.forms["fcontact"]["fcity"].value
    persona.pais = document.forms["fcontact"]["fcountry"].value

    let personajson = JSON.stringify(persona);

    personaArray.push(personajson);

    event.preventDeFault();
    alert("Datos guardados con exito" + personaArray.toString());

}

function listarcontactos() {
    let dinmicTable = "";
    dinmicTable += "<table>";
    dinmicTable += "<tr>";
    dinmicTable += "<th>Company</th>";
    dinmicTable += "<th>Contact</th>";
    dinmicTable += "<th>Country</th>";
    dinmicTable += "</tr>";
    dinmicTable += "<tr>";
    dinmicTable += "<td>Alfreds Futterkiste</td>";
    dinmicTable += "<td>Maria Anders</td>";
    dinmicTable += "<td>Germany</td>";
    dinmicTable += "</tr>";
    dinmicTable += "<tr>";
    dinmicTable += "<td>Centro comercial Moctezuma</td>";
    dinmicTable += "<td>Francisco Chang</td>";
    dinmicTable += "<td>Mexico</td>";
    dinmicTable += "</tr>";
    dinmicTable += "</table>";
    document.getElementById("tablecontact").innerHTML = dinmicTable;
}