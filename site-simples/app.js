'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
   document.body.classList.toggle('dark-theme')

var className = document.body.className;

if (className == "light-theme"){
    this.textContent = "Dark";
}
else{
    this.textContent = "Light";
}

console.log('current class name:' + className);
});

var js_name;
var js_sobrenome;
var js_nomecompleto;

function concatena(){
js_name = document.formC.fNome.value;
js_sobrenome = document.formC.fSobrenome.value;

js_sobrenome = js_name + ' ' + js_sobrenome;

window.alert('Ol\u00e1' + js_nomecompleto);

}