var char = [['Elfo','Humano','Anão','Tiefling','Draconato'],['Barbaro','Guerreiro','Paladino','Bardo','Monge','Ladrão','Druida','Bruxo','Mago'],['Caminho da Furia','Caminho do Espirito','Mestre das Armas','Pugilista','Devoto da luz','Devoto das Trevas','Escola do conhecimento','Escola do Valor','Punho suave','Elementarista','Batedor','Assassino','Xamã','Guardião da Natureza','Pacto Feerico','Pacto Profano','Mago da Mente','Mago da Evocador'],['Força','Constituição','Destreza','Inteligencia','Sabedoria','Carisma']];
var val = [[],[],[]]
var playerChar = []
//Cria as Raças pegando as informações da Lista
for (let r = 0; r < char[0].length; r++) {
    var selecao = document.querySelector('#racas');
    selecao.insertAdjacentHTML('beforeend',`<option id="r_${r}">${char[0][r]}</option>`);
}
//Criando Classes
for (let c = 0; c < char[1].length; c++) {
    if ( c <= 2 ) {
        var selecao = document.querySelector('#Combatentes');
        selecao.insertAdjacentHTML('beforeend',`<option id="c_${c}">${char[1][c]}</option>`);
    } 
    if ( c > 2 && c <= 5  ) {
        var selecao = document.querySelector('#Especialistas');
        selecao.insertAdjacentHTML('beforeend',`<option id="c_${c}">${char[1][c]}</option>`);
    }
    if ( c > 5 ) {
        var selecao = document.querySelector('#Conjuradores');
        selecao.insertAdjacentHTML('beforeend',`<option id="c_${c}">${char[1][c]}</option>`);
    }   
}
// Criando Trilhas
for (let t = 0; t < char[2].length; t++){
    var selecao = document.querySelector('#trilha');
    selecao.insertAdjacentHTML('beforeend',`<option id="t_${t}" disabled >${char[2][t]}</option>`);
}
//criar Atributos
for (let a = 0; a < char[3].length; a++) {
    var selecao = document.querySelector('#atributos');
    selecao.innerHTML += `<big id='valorbase_${a}'> 00 </big> <small id ='bonus_${a}'> Mod: 0</small> </<label>${char[3][a]}</label><button id="atb_${a}" onclick="vida_Energia(bonus(${a},valorBase(diceroll(3,8))))" > 4d6 </button> <br>`;
    document.body.appendChild(selecao)
}
//onchange 
function bonusDaRaca(){
    var raca = document.querySelector('#racas');
    raca = raca.options[raca.selectedIndex].id;
    switch (raca) {
        case `r_0`:
            console.log(1)
            break;
        case `r_1`:
                console.log(2)
                break;
        case `r_2`:
            console.log(3)
            break;
        case `r_3`:
            console.log(4)
            break;
        case `r_4`:
            console.log(5)
            break;
    
        default:
            console.log(0)
            break;
    }

}
// Onchange pra habilitar trilha 
function desbloqueiaTrilha(){
    var classe = document.querySelector('#ClasseOps');
    classe = classe.options[classe.selectedIndex].id;
        switch (classe) {
            case 'c_0':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_0').removeAttribute('disabled');
                habilitar = document.getElementById('t_1').removeAttribute('disabled');
                break;
            case 'c_1':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_2').removeAttribute('disabled');
                habilitar = document.getElementById('t_3').removeAttribute('disabled');
                break;
            case 'c_2':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_4').removeAttribute('disabled');
                habilitar = document.getElementById('t_5').removeAttribute('disabled');
                break;
            case 'c_3':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_6').removeAttribute('disabled');
                habilitar = document.getElementById('t_7').removeAttribute('disabled');
                break;
            case 'c_4':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_8').removeAttribute('disabled');
                habilitar = document.getElementById('t_9').removeAttribute('disabled');
                break;
            case 'c_5':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_10').removeAttribute('disabled');
                habilitar = document.getElementById('t_11').removeAttribute('disabled');
                break;
            case 'c_6':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_12').removeAttribute('disabled');
                habilitar = document.getElementById('t_13').removeAttribute('disabled');
                break;
            case 'c_7':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_14').removeAttribute('disabled');
                habilitar = document.getElementById('t_15').removeAttribute('disabled');
                break;
            case 'c_8':
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
                }
                habilitar = document.getElementById('t_16').removeAttribute('disabled');
                habilitar = document.getElementById('t_17').removeAttribute('disabled');
                break;
            default:
                for (let off = 0; off < char[2].length; off++) {
                    desabilitar = document.getElementById(`t_${off}`).setAttribute('disabled','disabled'); 
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
// valor nos botões e caulcula os bonus
function bonus(num,final){ 
    const valorBase = document.querySelector(`#valorbase_${num}`);
    const bonus = document.querySelector(`#bonus_${num}`);
    const botao = document.querySelector(`#atb_${num}`);
    valorBase.innerText = `${final}`;
    val[0].push(final);
    let soma = 0
    if (final == 2 || final == 3){
        bonus.innerText = `Mod |-4|`;
        val[1].push(-4);
        botao.setAttribute("disabled", "disabled");
    }if (final == 4 || final == 5){
        bonus.innerText = `Mod |-3|`;
        val[1].push(-3);
        botao.setAttribute("disabled", "disabled");
    }if (final == 6 || final == 7){
        bonus.innerText = `Mod |-2|`;
        val[1].push(-2);
        botao.setAttribute("disabled", "disabled");
    }if (final == 8 || final == 9){
        bonus.innerText = `Mod |-1|`;
        val[1].push(-1);
        botao.setAttribute("disabled", "disabled");
    }if (final == 10 || final == 11){
        bonus.innerText = `Mod |+0|`;
        val[1].push(0);
        botao.setAttribute("disabled", "disabled");
    }if (final == 12 || final == 13){
        bonus.innerText = `Mod |+1|`;
        val[1].push(+1);
        botao.setAttribute("disabled", "disabled");
    }if (final == 14 || final == 15){
        bonus.innerText = `Mod |+2|`;
        val[1].push(+2);
        botao.setAttribute("disabled", "disabled");
    }if (final == 16 || final == 17){
        bonus.innerText = `Mod |+3|`;
        val[1].push(+3);
        botao.setAttribute("disabled", "disabled");
    }if (final == 18 || final == 19){
        val[1].push(+4);
        bonus.innerText = `Mod |+4|`;
        botao.setAttribute("disabled", "disabled");
    }if (final == 20 || final == 21){
        val[1].push(+5);
        bonus.innerText = `Mod |+5|`;
        botao.setAttribute("disabled", "disabled");
    }if (final == 22 || final == 23){
        val[1].push(+6);
        bonus.innerText = `Mod |+6|`;
        botao.setAttribute("disabled", "disabled");
    } 
    // for(var i = 0; i < val[1].length; i++) {
    //     soma += val[1][i];
    // }
    // if (soma < 7){
    //     menor = Math.min(...val[1])
    //     console.log(menor)
    //     console.log(soma)
    // }
}   
// função vai pegar os valores do tipo de classe escolhida e 
const pv = document.querySelector('#pv');
    const pe = document.querySelector('#pe');
    
function vida_Energia(){
    const forca = document.querySelector('#valorbase_0').innerText;
    const constituicao = document.querySelector('#valorbase_1').innerText;
    var classe = document.querySelector('#ClasseOps');
    classe = classe.options[classe.selectedIndex].id;
    soma = Number(forca) + Number(constituicao)
    if (classe == 'c_0' || classe == 'c_1' || classe == 'c_2'){
        pv.innerHTML = `${soma+15}`
        pe.innerHTML = `${5}`
    }if (classe == 'c_3' || classe == 'c_4' || classe == 'c_5'){
        pv.innerHTML = `${soma+10}`
        pe.innerHTML = `${10}`
    }if (classe == 'c_6' || classe == 'c_7' || classe == 'c_8'){
        pv.innerHTML = `${soma+5}`
        pe.innerHTML = `${20}`
        
    }
}

//salva todas as informações.
function salvar(){
    var nome = document.querySelector('#name').value;
    playerChar.splice(0,1,nome);
    playerChar.splice(1,1,pv.innerText);
    playerChar.splice(2,1,pe.innerText);
    console.log(playerChar)
}
