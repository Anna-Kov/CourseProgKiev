//Сделайте страницу с надписью получить скидку.При наведении кнопка должна убегать от курсора не давая пользователю нажать на себя

let butt = document.getElementById('butt');
let mainleft, maintop, Maxleft, Maxtop;
//вычисляем текущую ширину и высоту елемента
Maxleft = document.documentElement.clientWidth - butt.offsetWidth;
Maxtop = document.documentElement.clientHeight - butt.offsetHeight;
// onmousemove - событие,при котором курсор находится в пределах елемента
butt.onmousemove = click;
function click() {
    //вычисляется на сколько откинуть елемент от текущего положения
    mainleft = Math.random() * Maxleft;
    butt.style.left = mainleft + "px";
    maintop = Math.random() * Maxtop;
    butt.style.top = maintop + "px";
}