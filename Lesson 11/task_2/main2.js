//Создать страницу с некоторыми блоками текста.Реализуйте обработчики событий таким образом
//чтобы при нажатии на кнопку r - текст становился красного цвета, кнопка g сделает цвет зеленым,а b синим.
const main = document.getElementById("main");
//keydown - событие,которое обрабатывает нажатие на клавиши
//keyCode - код клавиши
main.addEventListener("keydown",function(event){
    if(event.keyCode==82)
    this.style.color="red";
    else if(event.keyCode==71)
    this.style.color="green";
    else if(event.keyCode==66)
    this.style.color="blue";
});
//keyup - событие,срабатывает при отпукании клавиши
main.addEventListener("keyup",function(event){
    if(event.keyCode==82)
    this.style.color="";
    else if(event.keyCode==71)
    this.style.color="";
    else if(event.keyCode==66)
    this.style.color="";
});