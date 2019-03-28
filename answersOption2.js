// Respuestas de segunda opción
function finishColorTheory(){
	const colorst1 ='1';
	const colorst2 ='3';
    const colorst3 ='2';
    const colorst4 ='2';
    const colorst5 ='1';
const correctJs = "Respuesta correcta";
const incorrectJs = "Respuesta incorrecta";
// Obteniendo valores de respuestas 

//SEGUNDA OPCIÓN
// pregunta 1
let answer12;
let list12 = document.getElementsByName('colors1');
for (let i = 0;i < list12.length; i++){
    if (list12[i].type == 'radio' && list12[i].checked){
        answer12 = list12[i].value;
    break;
    }
}
// pregunta 2
let answer22;
let list22 = document.getElementsByName('colors2');
for (let i = 0;i < list22.length; i++){
    if (list22[i].type == 'radio' && list22[i].checked){
        answer22 = list22[i].value;
    break;
    }
}
//pregunta 3
let answer32;
let list32 = document.getElementsByName('colors3');
for (let i = 0; i < list32.length; i++){
    if (list32[i].type == 'radio' && list32[i].checked){
        answer32 = list32[i].value;
    break;
    }
}
//pregunta 4
let answer42;
let list42 = document.getElementsByName('colors4');
for (let i = 0; i < list42.length; i++){
    if (list42[i].type == 'radio' && list42[i].checked){
        answer42 = list42[i].value;
    break;
    }
}
//pregunta 5
let answer52;
let list52 = document.getElementsByName('colors5');
for (let i = 0; i < list52.length; i++){
    if (list52[i].type == 'radio' && list52[i].checked){
        answer52 = list52[i].value;
    break;
    }
}

// Comparando las claves marcadas con las claves correctas.
if(colorst1 == answer12) {
    document.getElementById("correct-answer-1t").style.display = "block";
    document.getElementById("correct-answer-1t").innerHTML = correctJs;
}else {
    document.getElementById("wrong-answer-1t").style.display = "block";
    document.getElementById("wrong-answer-1t").innerHTML = incorrectJs +". <br/>* La respuesta correcta es "+ answer12;
}

if(colorst2 == answer22){
    document.getElementById("correct-answer-2t").style.display = "block";
    document.getElementById("correct-answer-2t").innerHTML = correctJs;
}else {
    document.getElementById("wrong-answer-2t").style.display = "block";
    document.getElementById("wrong-answer-2t").innerHTML = incorrectJs +". <br/>* La respuesta correcta es "+ answer22;
}

if(colorst3 == answer32){
    document.getElementById("correct-answer-3t").style.display = "block";
    document.getElementById("correct-answer-3t").innerHTML = correctJs;
}else {
    document.getElementById("wrong-answer-3t").style.display = "block";
    document.getElementById("wrong-answer-3t").innerHTML = incorrectJs +". <br/>* La respuesta correcta es "+ answer32;
}

if(colorst4 == answer42){
    document.getElementById("correct-answer-4t").style.display = "block";
    document.getElementById("correct-answer-4t").innerHTML = correctJs;
}else {
    document.getElementById("wrong-answer-4t").style.display = "block";
    document.getElementById("wrong-answer-4t").innerHTML = incorrectJs +". <br/>* La respuesta correcta es "+ answer42;
}

if(colorst5 == answer52){
    document.getElementById("correct-answer-5t").style.display = "block";
    document.getElementById("correct-answer-5t").innerHTML = correctJs;
}else {
    document.getElementById("wrong-answer-5t").style.display = "block";
    document.getElementById("wrong-answer-5t").innerHTML = incorrectJs +". <br/>* La respuesta correcta es "+ answer52;
}
document.getElementById("finish-t").style.display="none";
};