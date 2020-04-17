// Разработайте страницу которая будет выводить сообщение сохранено при нажатии на клавиши Ctrl + S
// выбрано все при нажатии на  Ctrl + A и сохранено все при нажатии на комбинацию Ctrl + Shift + S.
let main = document.getElementById("main");
//keydown - событие,которое обрабатывает нажатие на клавиши
main.addEventListener("keydown",function(e) {
		
			if (!e) {
				e = window.event;
            }
            //условие при котором идет проверка на нажатие клавиши(должно прийти код символа или свойство)
				if (e.keyCode == 17 || e.ctrlKey)  {

					if (e.keyCode == 16 || e.shiftKey)  {

						if (e.keyCode == 83 || String.fromCharCode(e.keyCode) == "S") {
		 				
							alert("сохранено все");
		 				}
					} else {
						if (e.keyCode == 83 || String.fromCharCode(e.keyCode) == "S") {
			 			
							alert("сохранено");
			 			}
					}

					if (e.keyCode == 65 || String.fromCharCode(e.keyCode) == "A") {
		 	
		 				alert("выбрано все");
					}
				}
       
    });

