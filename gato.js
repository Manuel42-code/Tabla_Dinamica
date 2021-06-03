document.addEventListener("DOMContentLoaded", function (event) {
    cargarTabla();
});

const Maquinas = [{
    id: 1,
    Modelo: "R45C-I",
    codigo: "10582005N",
    peso: "1800Kg",
    motormarca: "Hanomag",
    motorpotencia: "40KW - 50 Hp",
},
{
    id: 2,
    Modelo: "R45C-II",
    codigo: "10582005N",
    peso: "1800Kg",
    motormarca: "Hanomag",
    motorpotencia: "40KW - 50 Hp",
},
{
    id: 3,
    Modelo: "R45C-III",
    codigo: "10582005N",
    peso: "1800Kg",
    motormarca: "Hanomag",
    motorpotencia: "40KW - 50 Hp"
}

];

function cargarTabla() {
    console.log("cargar tabla")
    const cuerpotabla = document.querySelector("#cuerpotabla");

    Maquinas.forEach(Maquina => {
        const tr = document.createElement("tr");

        let tdModelo = document.createElement("td");
        tdModelo.textContent = Maquina.Modelo;
        tr.appendChild(tdModelo);

        let tdcodigo = document.createElement("td");
        tdcodigo.textContent = Maquina.codigo;
        tr.appendChild(tdcodigo);

        let tdpeso = document.createElement("td");
        tdpeso.textContent = Maquina.peso;
        tr.appendChild(tdpeso);

        let tdmotormarca = document.createElement("td");
        tdmotormarca.textContent = Maquina.motormarca;
        tr.appendChild(tdmotormarca);

        let tdmotorpotencia = document.createElement("td");
        tdmotorpotencia.textContent = Maquina.motorpotencia;
        tr.appendChild(tdmotorpotencia);

        cuerpotabla.appendChild(tr);
    })
}


const form = document.getElementById('formdata');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let formproductos = document.getElementById('cuerpotabla');

    let newproductorow = formproductos.insertRow(-1);

    let newTypeCell = newproductorow.insertCell(0);
    newTypeCell.textContent = transactionFormData.get("modelo");

    newTypeCell = newproductorow.insertCell(1);
    newTypeCell.textContent = transactionFormData.get("codigo");

    newTypeCell = newproductorow.insertCell(2);
    newTypeCell.textContent = transactionFormData.get("peso");

    newTypeCell = newproductorow.insertCell(3);
    newTypeCell.textContent = transactionFormData.get("motor-marca");

    newTypeCell = newproductorow.insertCell(4);
    newTypeCell.textContent = transactionFormData.get("motor-potencia");
    
}
);

let delteButton = document.getElementById('borrar');
delteButton.addEventListener('click', (event) =>{
    document.getElementById('cuerpotabla').remove();
});


const triplicado = [{
    id: 4,
    Modelo: "MN-2315",
    codigo: "220011N",
    peso: "2500Kg",
    motormarca: "Pepito",
    motorpotencia: "80KW - 100 Hp",
},
{
    id: 5,
    Modelo: "MN-2255",
    codigo: "1234005N",
    peso: "1200Kg",
    motormarca: "Lakita",
    motorpotencia: "30KW - 40 Hp",
},
{
    id: 6,
    Modelo: "MN-8965",
    codigo: "10539805N",
    peso: "2100Kg",
    motormarca: "Hilog",
    motorpotencia: "70KW - 70 Hp"
}

];


let triplico = document.getElementById('btn-añadir3');
triplico.addEventListener('click', (event) =>{

    agregar3();

});



function agregar3() {
    console.log("cargar tabla")
    const cuerpotabla = document.querySelector("#cuerpotabla");

    triplicado.forEach(Maquina => {
        const tr = document.createElement("tr");

        let tdModelo = document.createElement("td");
        tdModelo.textContent = Maquina.Modelo;
        tr.appendChild(tdModelo);

        let tdcodigo = document.createElement("td");
        tdcodigo.textContent = Maquina.codigo;
        tr.appendChild(tdcodigo);

        let tdpeso = document.createElement("td");
        tdpeso.textContent = Maquina.peso;
        tr.appendChild(tdpeso);

        let tdmotormarca = document.createElement("td");
        tdmotormarca.textContent = Maquina.motormarca;
        tr.appendChild(tdmotormarca);

        let tdmotorpotencia = document.createElement("td");
        tdmotorpotencia.textContent = Maquina.motorpotencia;
        tr.appendChild(tdmotorpotencia);

        cuerpotabla.appendChild(tr);
    });
}