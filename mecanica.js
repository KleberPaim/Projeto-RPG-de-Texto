var personagem = [];
var racas = ['Elfo','Humano','Anão','Tiefling','Draconato'];
var classe = ['Barbaro','Guerreiro','Paladino','Bardo','Monge','Ladrão','Druida','Bruxo','Mago'];
var trilha = ['Caminho da Furia','Caminho do Espirito','Mestre das Armas','Pugilista','Devoto da luz','Devoto das Trevas','Escola do conhecimento','Escola do Valor','Punho suave','Elementarista','Batedor','Assassino','Xamã','Guardião da Natureza','Pacto Feerico','Pacto Profano','Mago da Mente','Mago da Evocador']
var atributos = ['Força','Destreza','Constituição','Inteligencia','Sabedoria','Carisma'];
var verif_bonus = []
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
//criar Atributos
for (let a = 0; a < atributos.length; a++) {
    var selecao = document.querySelector('#atributos');
    selecao.insertAdjacentHTML('afterend',`<big id='valorbase_${a}'> 00 </big> <small id ='bonus_${a}'>Bonus: 0</small> </<label>${atributos[a]}</label><button id="atb_${a}" onclick="bonus(${a},valorBase(diceroll(6,4)))" > 4d6 </button> <br>`);
}

// Onchange pra habilitar trilha 
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
//Dado = Numero de faces | Repeat = Quantidade de dados a serem rolados
function diceroll(dado,repeat){
    if (repeat > 0){
        rolagem = []
        soma = 0
        for (let cont = 0; cont < repeat; cont++) {
            roll = Math.floor(Math.random() * dado +1 )
            soma += roll
            rolagem.push(roll)
        }
        return soma;rolagem
    }
    else{
        return roll
    } 
}   
//função especifica para rolagem de atributo | Roll = Funtion Diceroll 
function valorBase(roll){
    final = roll - Math.min(...rolagem)
    return final
}
// onchange pra exibir o atributo
function bonus(num,final){ 
    const valorBase = document.querySelector(`#valorbase_${num}`);
    const bonus = document.querySelector(`#bonus_${num}`);
    const botao = document.querySelector(`#atb_${num}`);
    valorBase.innerText = `${final}`;
    let soma = 0
    if (final == 2 || final == 3){
        bonus.innerText = `Mod |-4|`;
        verif_bonus.push(-4);
        botao.setAttribute("disabled", "disabled");
    }if (final == 4 || final == 5){
        bonus.innerText = `Mod |-3|`;
        verif_bonus.push(-3);
        botao.setAttribute("disabled", "disabled");
    }if (final == 6 || final == 7){
        bonus.innerText = `Mod |-2|`;
        verif_bonus.push(-2);
        botao.setAttribute("disabled", "disabled");
    }if (final == 8 || final == 9){
        bonus.innerText = `Mod |-1|`;
        verif_bonus.push(-1);
        botao.setAttribute("disabled", "disabled");
    }if (final == 10 || final == 11){
        bonus.innerText = `Mod |+0|`;
        verif_bonus.push(0);
        botao.setAttribute("disabled", "disabled");
    }if (final == 12 || final == 13){
        bonus.innerText = `Mod |+1|`;
        verif_bonus.push(+1);
        botao.setAttribute("disabled", "disabled");
    }if (final == 14 || final == 15){
        bonus.innerText = `Mod |+2|`;
        verif_bonus.push(+2);
        botao.setAttribute("disabled", "disabled");
    }if (final == 16 || final == 17){
        bonus.innerText = `Mod |+3|`;
        verif_bonus.push(+3);
        botao.setAttribute("disabled", "disabled");
    }if (final == 18 || final == 19){
        verif_bonus.push(+4);
        bonus.innerText = `Mod |+4|`;
        botao.setAttribute("disabled", "disabled");
    }if (final == 20 || final == 21){
        verif_bonus.push(+5);
        bonus.innerText = `Mod |+5|`;
        botao.setAttribute("disabled", "disabled");
    }if (final == 22 || final == 23){
        verif_bonus.push(+6);
        bonus.innerText = `Mod |+6|`;
        botao.setAttribute("disabled", "disabled");
    } 
    for(var i = 0; i < verif_bonus.length; i++) {
        soma += verif_bonus[i];
    }
    if (soma < 7){
        menor = Math.min(...verif_bonus)
        console.log(menor)
        console.log(soma)
    }
    console.log(verif_bonus)
}   
