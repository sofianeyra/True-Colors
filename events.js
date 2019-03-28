// Evento de texto bienvenida
const userName = document.getElementById('name');
function start() {
    document.getElementById('greeting').innerHTML = '¡Hola ' + userName.value + '!';
    document.getElementById('first-page-welcome').style.display = 'none';
    document.getElementById('second-page-themes').style.display = 'block';
}
// Evento de la primera opción
function firstOption() {
    document.getElementById('second-page-themes').style.display = 'none';
    document.getElementById('first-option-page').style.display = 'block';
}
// Evento de la segunda opción
function secondOption() {
    document.getElementById('second-page-themes').style.display = 'none';
    document.getElementById('second-option-page').style.display = 'block';
}
// Evento de volver a opciones 1
function goBack1() {
    document.getElementById('second-page-themes').style.display = 'block';
    document.getElementById('second-option-page').style.display = 'none';
}
// Evento de volver a opciones 2
function goBack2() {
    document.getElementById('second-page-themes').style.display = 'block';
    document.getElementById('first-option-page').style.display = 'none';
}
// Evento de volver a inicio 1
function goStart1() {
    document.getElementById('first-page-welcome').style.display = 'block';
    document.getElementById('first-option-page').style.display = 'none';
}
// Evento de volver a inicio 2
function goStart2() {
    document.getElementById('first-page-welcome').style.display = 'block';
    document.getElementById('second-option-page').style.display = 'none';
}