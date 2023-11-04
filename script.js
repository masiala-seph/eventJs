
const buttonclick = document.getElementById('buttonclick');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const result = document.getElementById('result');
const form = document.getElementById('form');
const active = document.getElementById('active');


active.addEventListener('click', function(){
    form.style.display = "block"
})

buttonclick.addEventListener('click', function(e) {

    e.preventDefault();

    //creer un element
    var containerResult = document.createElement('div');
    var createElementPrenom = document.createElement('div');
    var createElementNom = document.createElement('div');

    //creer la class pour "createElement"
    createElementPrenom.classList = "create-element";
    createElementNom.classList = "create-element";
    containerResult.classList = "container-result";

    //mettre "createElement" à l'interieur de result
    containerResult.appendChild(createElementPrenom);
    containerResult.appendChild(createElementNom);
    result.appendChild(containerResult)

    //mettre la valeur de l'input dans l'element créé
    createElementPrenom.innerHTML = prenom.value;
    createElementNom.innerHTML = nom.value;
    prenom.value = "";
    nom.value = "";

    // console.log(createElementPrenom);
});