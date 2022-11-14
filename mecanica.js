var personagem = [];
var racas = ['Elfo','Humano','Anão','Tiefling','Draconato'];
var classe = ['Barbaro','Guerreiro','Paladino','Bardo','Monge','Ladrão','Druida','Bruxo','Mago'];
var trilha = ['Caminho da Furia','Caminho do Espirito','Mestre das Armas','Pugilista','Devoto da luz','Devoto das Trevas','Escola do conhecimento','Escola do Valor','Punho suave','Elementarista','Batedor','Assassino','Xamã','Guardião da Natureza','Pacto Feerico','Pacto Profano','Mago da Mente','Mago da Evocador']

//Cria as Raças pegando as informações da Lista
for (let r = 0; r < racas.length; r++) {
    var selecao = document.querySelector('#racas');
    selecao.insertAdjacentHTML('beforeend',`<option id="r_${r}">${racas[r]}</option>`);
}
//Criando Classes
for (let c = 0; c < classe.length; c++) {
    if ( c <= 2 ) {
        var selecao = document.querySelector('#Combatentes');
        selecao.insertAdjacentHTML('beforeend',`<option id="c_${c}">${classe[c]}</option>`);
    } 
    if ( c > 2 && c <= 5  ) {
        var selecao = document.querySelector('#Especialistas');
        selecao.insertAdjacentHTML('beforeend',`<option id="c_${c}">${classe[c]}</option>`);
    }
    if ( c > 5 ) {
        var selecao = document.querySelector('#Conjuradores');
        selecao.insertAdjacentHTML('beforeend',`<option id="c_${c}">${classe[c]}</option>`);
    }   
}
// Criando Trilhas
for (let t = 0; t < trilha.length; t++){
    var selecao = document.querySelector('#trilha');
    selecao.insertAdjacentHTML('beforeend',`<option id="t_${t}" disabled >${trilha[t]}</option>`);
}

// Essa função é um evento que Habilita as trilhas 
function unlockSubClass(){
    var classe = document.querySelector('#ClasseOps');
    classe = classe.options[classe.selectedIndex].id;
    console.log(classe);
        switch (classe) {
            case 'c_0':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_0').removeAttribute('disabled');
                habilitar = document.getElementById('t_1').removeAttribute('disabled');
                break;
            case 'c_1':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_2').removeAttribute('disabled');
                habilitar = document.getElementById('t_3').removeAttribute('disabled');
                break;
            case 'c_2':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_4').removeAttribute('disabled');
                habilitar = document.getElementById('t_5').removeAttribute('disabled');
                break;
            case 'c_3':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_6').removeAttribute('disabled');
                habilitar = document.getElementById('t_7').removeAttribute('disabled');
                break;
            case 'c_4':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_8').removeAttribute('disabled');
                habilitar = document.getElementById('t_9').removeAttribute('disabled');
                break;
            case 'c_5':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_10').removeAttribute('disabled');
                habilitar = document.getElementById('t_11').removeAttribute('disabled');
                break;
            case 'c_6':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_12').removeAttribute('disabled');
                habilitar = document.getElementById('t_13').removeAttribute('disabled');
                break;
            case 'c_7':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_14').removeAttribute('disabled');
                habilitar = document.getElementById('t_15').removeAttribute('disabled');
                break;
            case 'c_8':
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
                habilitar = document.getElementById('t_16').removeAttribute('disabled');
                habilitar = document.getElementById('t_17').removeAttribute('disabled');
                break;
            default:
                for (let off = 0; off < trilha.length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled',''); 
                }
        
        
    }

}

//Essa função recebe um valor como parametro. o valor corresponde a 
function diceroll(dado,repeat){
    if (repeat > 0){
        rolagem = []
        for (let cont = 0; cont < repeat; cont++) {
            roll = Math.floor(Math.random() * dado +1 )
            rolagem.push(roll)
        }
        console.log(rolagem)
        console.log(Math.min(...rolagem))
    }
    else{
        console.log(roll)
        return roll
    } 

    
}   