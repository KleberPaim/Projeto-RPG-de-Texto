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
    selecao.innerHTML += `<big id='valorbase_${a}'> 00 </big>   <small> Mod: </small><small id ='bonus_${a}'>0</small> </<label>${char[3][a]}</label><button class = "dado" id="atb_${a}" onclick="vida_Energia(bonus(${a},valorBase(diceroll(3,8))))" >4d6</button> <br>`;
    document.body.appendChild(selecao)  
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
        bonus.innerText = `-4`;
        val[1].push(-4);
        botao.setAttribute("disabled", "disabled");
    }if (final == 4 || final == 5){
        bonus.innerText = `-3`;
        val[1].push(-3);
        botao.setAttribute("disabled", "disabled");
    }if (final == 6 || final == 7){
        bonus.innerText = `-2`;
        val[1].push(-2);
        botao.setAttribute("disabled", "disabled");
    }if (final == 8 || final == 9){
        bonus.innerText = `-1`;
        val[1].push(-1);
        botao.setAttribute("disabled", "disabled");
    }if (final == 10 || final == 11){
        bonus.innerText = `+0`;
        val[1].push(0);
        botao.setAttribute("disabled", "disabled");
    }if (final == 12 || final == 13){
        bonus.innerText = `+1`;
        val[1].push(+1);
        botao.setAttribute("disabled", "disabled");
    }if (final == 14 || final == 15){
        bonus.innerText = `+2`;
        val[1].push(+2);
        botao.setAttribute("disabled", "disabled");
    }if (final == 16 || final == 17){
        bonus.innerText = `+3`;
        val[1].push(+3);
        botao.setAttribute("disabled", "disabled");
    }if (final == 18 || final == 19){
        val[1].push(+4);
        bonus.innerText = `+4`;
        botao.setAttribute("disabled", "disabled");
    }if (final == 20 || final == 21){
        val[1].push(+5);
        bonus.innerText = `+5`;
        botao.setAttribute("disabled", "disabled");
    }if (final == 22 || final == 23){
        val[1].push(+6);
        bonus.innerText = `+6`;
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
var botao = document.querySelector('#atributos');
botao.innerHTML += `<button class="btn btn-dark" id="enviar" onclick="salvar()"> Salvar </button>`


function salvar(){
    var nome = document.querySelector('#name').value;
    let forca = document.querySelector(`#bonus_0`).innerText;
    let con = document.querySelector(`#bonus_1`).innerText;
    let dex = document.querySelector(`#bonus_2`).innerText;
    let int = document.querySelector(`#bonus_3`).innerText;
    let sab = document.querySelector(`#bonus_4`).innerText;
    let car = document.querySelector(`#bonus_5`).innerText;
    let raca = document.querySelector('#racas');
    raca = raca.options[raca.selectedIndex].innerText;
    let classe = document.querySelector('#ClasseOps');
    classe = classe.options[classe.selectedIndex].innerText;
    let trilha = document.querySelector('#trilha');
    trilha = trilha.options[trilha.selectedIndex].innerText;
    playerChar.splice(0,1,nome);
    playerChar.splice(1,1,raca);
    playerChar.splice(2,1,classe);
    playerChar.splice(3,1,trilha);
    playerChar.splice(4,1,Number(pv.innerText));
    playerChar.splice(5,1,Number(pe.innerText));
    playerChar.splice(6,1,Number(forca));
    playerChar.splice(7,1,Number(con));
    playerChar.splice(8,1,Number(dex));
    playerChar.splice(9,1,Number(int));
    playerChar.splice(10,1,Number(sab));
    playerChar.splice(11,1,Number(car));
    
    console.log(playerChar)
    
}
function card(){
    var card = document.querySelector('#card').innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${playerChar[0]} || Nivel 1</h5>
      <h6 class="card-subtitle mb-2 text-muted">${playerChar[1]} || ${playerChar[2]} || ${playerChar[3]}</h6>
      <p class="card-text">❤PV:${playerChar[4]}/${playerChar[4]}</p>
      <p class="card-text">⚡PE${playerChar[5]}/${playerChar[5]}</p>
      <a href="main.html" class="card-link">Reiniciar</a>
    </div>
  </div>`
    console.log(card)

}