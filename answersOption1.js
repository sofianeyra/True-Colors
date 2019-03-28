// Respuestas de primera opción
function finishColorPsicology() {
    const colorsp1 = '2';
    const colorsp2 = '3';
    const colorsp3 = '2';
    const colorsp4 = '3';
    const colorsp5 = '1';

    const correctJs = "Respuesta correcta";
    const incorrectJs = "Respuesta incorrecta";

    // Obteniendo valores de respuestas de trivia DRAMA

    //PRIMERA OPCIÓN
    // pregunta 1
    let answer1;
    let list1 = document.getElementsByName('colors1_1');
    for (let i = 0; i < list1.length; i++) {
        if (list1[i].type == 'radio' && list1[i].checked) {
            answer1 = list1[i].value;
            break;
        }
    }
    // pregunta 2
    let answer2;
    let list2 = document.getElementsByName('colors1_2');
    for (let i = 0; i < list2.length; i++) {
        if (list2[i].type == 'radio' && list2[i].checked) {
            answer2 = list2[i].value;
            break;
        }
    }
    //pregunta 3
    let answer3;
    let list3 = document.getElementsByName('colors1_3');
    for (let i = 0; i < list3.length; i++) {
        if (list3[i].type == 'radio' && list3[i].checked) {
            answer3 = list3[i].value;
            break;
        }
    }
    //pregunta 4
    let answer4;
    let list4 = document.getElementsByName('colors1_4');
    for (let i = 0; i < list4.length; i++) {
        if (list4[i].type == 'radio' && list4[i].checked) {
            answer4 = list4[i].value;
            break;
        }
    }
    //pregunta 5
    let answer5;
    let list5 = document.getElementsByName('colors1_5');
    for (let i = 0; i < list5.length; i++) {
        if (list5[i].type == 'radio' && list5[i].checked) {
            answer5 = list5[i].value;
            break;
        }
    }

    // Comparando las claves marcadas con las claves correctas.
    if (colorsp1 == answer1) {
        document.getElementById("correct-answer-1p").style.display = "block";
        document.getElementById("correct-answer-1p").innerHTML = correctJs;
    } else {
        document.getElementById("wrong-answer-1p").style.display = "block";
        document.getElementById("wrong-answer-1p").innerHTML = incorrectJs + ". <br/>* La respuesta correcta es " + answer1;
    }

    if (colorsp2 == answer2) {
        document.getElementById("correct-answer-2p").style.display = "block";
        document.getElementById("correct-answer-2p").innerHTML = correctJs;
    } else {
        document.getElementById("wrong-answer-2p").style.display = "block";
        document.getElementById("wrong-answer-2p").innerHTML = incorrectJs + ". <br/>* La respuesta correcta es " + answer2;
    }

    if (colorsp3 == answer3) {
        document.getElementById("correct-answer-3p").style.display = "block";
        document.getElementById("correct-answer-3p").innerHTML = correctJs;
    } else {
        document.getElementById("wrong-answer-3p").style.display = "block";
        document.getElementById("wrong-answer-3p").innerHTML = incorrectJs + ". <br/>* La respuesta correcta es " + answer3;
    }

    if (colorsp4 == answer4) {
        document.getElementById("correct-answer-4p").style.display = "block";
        document.getElementById("correct-answer-4p").innerHTML = correctJs;
    } else {
        document.getElementById("wrong-answer-4p").style.display = "block";
        document.getElementById("wrong-answer-4p").innerHTML = incorrectJs + ". <br/>* La respuesta correcta es " + answer4;
    }

    if (colorsp5 == answer5) {
        document.getElementById("correct-answer-5p").style.display = "block";
        document.getElementById("correct-answer-5p").innerHTML = correctJs;
    } else {
        document.getElementById("wrong-answer-5p").style.display = "block";
        document.getElementById("wrong-answer-5p").innerHTML = incorrectJs + ". <br/>* La respuesta correcta es " + answer5;
    }
    document.getElementById("finish-p").style.display = "none";
};