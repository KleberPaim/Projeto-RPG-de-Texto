var personagem = [];
var racas = ['Elfo','Humano','Anão','Tiefling','Draconato'];
var classe = ['Barbaro','Guerreiro','Paladino','Caçador','Bardo','Monge','Ladrão','Artificer','Clerigo','Druida','Bruxo','Mago'];
var trilha = ['Caminho da Furia','Caminho do Espirito','Mestre das Armas','Pugilista','Devoto da luz','Devoto das Trevas','Matador de Monstros','Caça conjunta','Escola do conhecimento','Escola do Valor','Punho suave','Elementarista','Batedor','Assassino','Alquimista','Inventor','Juramento da Vida','Juramento da Guerra','Xamã','Guardião da Natureza','Pacto Feerico','Pacto Profano','Mago da Mente','Mago da Evocador']

//Cria as Raças pegando as informações da Lista
for (let i = 0; i < racas.length; i++) {
    var selecao = document.querySelector('#racas');
    selecao.insertAdjacentHTML('beforeend',`<option id="raca_${i}">${racas[i]}</option>`)
}
//Criando Classes
for (let i = 0; i < classe.length; i++) {
    if ( i <= 3 ) {
        var selecao = document.querySelector('#Combatentes');
        selecao.insertAdjacentHTML('beforeend',`<option id="classe_${i}">${classe[i]}</option>`)
    } 
    if ( i > 3 && i <= 7 ) {
        var selecao = document.querySelector('#Especialistas');
        selecao.insertAdjacentHTML('beforeend',`<option id="classe_${i}">${classe[i]}</option>`)
    }
    if ( i > 7 ) {
        var selecao = document.querySelector('#Conjuradores');
        selecao.insertAdjacentHTML('beforeend',`<option id="classe_${i}">${classe[i]}</option>`)
    }
    
    
}
// Essa função é um evento
function captura(){
    let raca = document.getElementById('racas');
    raca = raca.options[raca.selectedIndex].text;
    console.log(raca);
    if ( raca == 'Elfo') {
        let combatente = document.getElementById('Combatentes').setAttribute('disabled','');
    }
    if ( raca == 'Anão'){
        let conjuradores = document.getElementById('Conjuradores').removeAttribute('disabled');
    
    } else {
        let especialsitas = document.getElementById('Especialistas').setAttribute('disabled','');
    }
}
// Essa funçao cria opões nova 
function createOption(){
    for (let i = 0; i < trilha.length; i++) {
        var selecao = document.querySelector('#Combatentes');
        selecao.insertAdjacentHTML('beforeend',`<option id="Mago">${trilha[i]}</option>`)
    }
    
    
}