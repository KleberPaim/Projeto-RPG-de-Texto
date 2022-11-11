// Area das variaveis
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
// Codes



