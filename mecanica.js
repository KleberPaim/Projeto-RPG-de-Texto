var personagem = [];
var racas = ['Elfo','Humano','Anão','Tiefling','Draconato'];
var classe = ['Barbaro','Guerreiro','Paladino','Caçador','Bardo','Monge','Ladrão','Artificer','Clerigo','Druida','Bruxo','Mago'];
var trilha = ['Caminho da Furia','Caminho do Espirito','Mestre das Armas','Pugilista','Devoto da luz','Devoto das Trevas','Matador de Monstros','Caça conjunta','Escola do conhecimento','Escola do Valor','Punho suave','Elementarista','Batedor','Assassino','Alquimista','Inventor','Juramento da Vida','Juramento da Guerra','Xamã','Guardião da Natureza','Pacto Feerico','Pacto Profano','Mago da Mente','Mago da Evocador']
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

function novaOpicao(){
    var n = 0
    var grupo = document.getElementById('sub-cacador');
    var opicao = document.createElement('option').setAttribute('id',`trilha${trilha[n]}`);
    document.body.insertBefore(opicao,grupo)
}