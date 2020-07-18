var valor =0, a=0, b=0, c=0, delta=0, x1=0, x2=0, variavel=1;
function clique0() {
    valor = valor*10 +0;
    Exibe.innerHTML=` ${valor}`;
}
function clique1() {
    valor = valor*10 +1;
    Exibe.innerHTML=` ${valor}`;
}
function clique2() {
    valor = valor*10 +2;
    Exibe.innerHTML=` ${valor}`;
}
function clique3() {
    valor = valor*10 +3;
    Exibe.innerHTML=` ${valor}`;
}
function clique4() {
    valor = valor*10 +4;
    Exibe.innerHTML=` ${valor}`;
}
function clique5() {
    valor = valor*10 +5;
    Exibe.innerHTML=` ${valor}`;
}
function clique6() {
    valor = valor*10 +6;
    Exibe.innerHTML=` ${valor}`;
}
function clique7() {
    valor = valor*10 +7;
    Exibe.innerHTML=` ${valor}`;
}
function clique8() {
    valor = valor*10 +8;
    Exibe.innerHTML=` ${valor}`;
}
function clique9() {
    valor = valor*10 +9;
    Exibe.innerHTML=` ${valor}`;
}
function confirma(){
    switch (variavel) {
        case 1: 
            a = valor;
            A.innerHTML =`A: ${a}`;
            B.innerHTML =`B: ${b}`;
            C.innerHTML =`C: ${c}`;
            Delta.innerHTML =`Delta: ${delta}`;
            X1.innerHTML =`X1: ${x1}`;
            X2.innerHTML =`X: ${x2}`;
            Fala.innerHTML= `Insira a variável B`;
        break;
        case 2:
            b = valor;
            B.innerHTML =`B: ${b}`;
            Fala.innerHTML= `Insira a variável C`;
        break;
        case 3:
            c = valor;
            C.innerHTML =`C: ${c}`;
            delta = Math.pow(b,2)-4*a*c;
            x1 = (-b + Math.sqrt(delta))/(2*a);
            x2 = (-b - Math.sqrt(delta))/(2*a);

            Delta.innerHTML =`Delta: ${delta}`;
            X1.innerHTML =`X1: ${x1}`;
            X2.innerHTML =`X: ${x2}`;
            a=0; b=0; c=0; delta=0; x1=0; x2=0; variavel=0;
            Fala.innerHTML= `Insira a variável A`;
        break;
    }
    valor = 0;
    Exibe.innerHTML=` ${valor}`;
    variavel++
}
function apagar(){
    valor = valor / 10;
    valor = Math.floor(valor);
    Exibe.innerHTML=` ${valor}`;
}
