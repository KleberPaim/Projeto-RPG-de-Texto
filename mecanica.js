var personagem = [];
var racas = ['Elfo','Humano','Anão','Tiefling','Draconato'];
var classe = [classeCombatente,classeEspecialsita,classeConjuradora];
var classeCombatente = ['Barbaro','Guerreiro','Paladino','Caçador'];
var classeEspecialsita = ['Bardo','Monge','Ladrão','Artificer'];
let classeConjuradora = ['Clerigo','Druida','Bruxo','Mago'];
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




