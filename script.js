"use strict";

let wikiApi = "https://ru.wikipedia.org/w/api.php?action=opensearch&origin=*&search=";
let searchBar = document.querySelector("#article-link");  //инпут в поиске
let searchResultDiv = document.querySelector(".search-result");  //результат данных
let hint = document.querySelector("#hint"); //нижняя надпись под поиском

// поиск в вики после нажаетия Enter
searchBar.addEventListener("keypress", (e) => {
    var key = e.which;
    if (key === 13) {   //если нажата клавиша Enter
        //если div со статьями уже в документе, то удалить все данные (data)
        if (searchResultDiv.childNodes) {
            searchResultDiv.innerHTML = "";
        }
        //не делать ничего, если инпут пустой
        if (searchBar.value === "") {
            hint.hidden = false;
            return;
        }
        // вызвать функцию и получить данные
        getData();
    }
});

//получить дааные из API и создать элементы из статей
function getData() {
    let search = wikiApi + searchBar.value; //ссылка на базу данных JSON из 10 ссылок
    let request = new XMLHttpRequest(); //получение данных без перезагрузки

    request.open('GET', search, true);//инициализация запроса

    //функция выполняется после загрузки
    request.onload = function () {
        // начать обращаться к JSON данным здесь
        let data = JSON.parse(this.response);
        // если нет ошибок
        if (request.status >= 200 && request.status < 400) {
            hint.hidden = true;  //спрятать подсказку
            // если в результате нет данных
            if (!data[1].length) {
                let searchError = document.createElement("div");
                searchError.className = "search-error";
                searchError.textContent = `Не могу найти статьи всключающие ${searchBar.value}, повторите поиск.`;
                searchResultDiv.appendChild(searchError);
                return;
            }

            for (let i = 0; i < data[1].length; i++) {
                let article = document.createElement("div");
                article.className = "article";
                article.setAttribute("data-link", data[3][i]);

                let titleName = document.createElement("h3");
                titleName.innerHTML = data[1][i];

                let about = document.createElement("p");
                if (data[2][i] == "") {
                    about.innerHTML = "Без описания";
                } else {
                    about.innerHTML = data[2][i];
                }

                searchResultDiv.appendChild(article);
                article.appendChild(titleName);
                article.appendChild(about);
            }
        } else {
            // если произошла ошибка
            console.log("Error happened");
        }
    }
    // отсылаем запрос на сервер
    request.send();
}

// открывает ссылку из полученного результата
searchResultDiv.onclick = function(e) {
    var target = e.target; //ссылка на объект инициализатора события

    while (target != searchResultDiv) {
        if (target.className == 'article') {
            window.open(target.getAttribute("data-link"));
            return;
        }

        target = target.parentNode; //Возвращает родителя определенного элемента DOM дерева.
    }
}

function rainbow() {
    let color1 = document.getElementById("1");
    let color2 = document.getElementById("2");
    let color3 = document.getElementById("3");
    let color4 = document.getElementById("4");
    let color5 = document.getElementById("5");
    let color6 = document.getElementById("6");
    let color7 = document.getElementById("7");
    let color8 = document.getElementById("8");
    let color9 = document.getElementById("9");
    let color10 = document.getElementById("10");
    let color11 = document.getElementById("11");
    let color12 = document.getElementById("12");
    let color13 = document.getElementById("13");
    let color14 = document.getElementById("14");
    let color15 = document.getElementById("15");
    let color16 = document.getElementById("16");
    let color17 = document.getElementById("17");
    let color18 = document.getElementById("18");
    let color19 = document.getElementById("19");
    let color20 = document.getElementById("20");
    let color21 = document.getElementById("21");
    let color22 = document.getElementById("22");
    let color23 = document.getElementById("23");
    let color24 = document.getElementById("24");
    let color25 = document.getElementById("25");
    let color26 = document.getElementById("26");
    let color27 = document.getElementById("27");
    let color28 = document.getElementById("28");
    let color29 = document.getElementById("29");
    let color30 = document.getElementById("30");
    let color31 = document.getElementById("31");
    let color32 = document.getElementById("32");
    let color33 = document.getElementById("33");
    let color34 = document.getElementById("34");
    let color35 = document.getElementById("35");
    let color36 = document.getElementById("36");
    let color37 = document.getElementById("37");
    let color38 = document.getElementById("38");
    let color39 = document.getElementById("39");
    let color40 = document.getElementById("40");
    let color41 = document.getElementById("41");
    let color42 = document.getElementById("42");
    let color43 = document.getElementById("43");
    let color44 = document.getElementById("44");
    let color45 = document.getElementById("45");
    let color46 = document.getElementById("46");
    let color47 = document.getElementById("47");
    let color48 = document.getElementById("48");
    let color49 = document.getElementById("49");
    let color50 = document.getElementById("50");

    function changeColors(element, colorRule, initialHue, timeout) {
        setInterval(() => element.style[colorRule] = `hsl(${++initialHue % 360},100%,50%)`, timeout)
    }

    changeColors(color1, "color", 0,    10);
    changeColors(color2, "color", 7,    10);
    changeColors(color3, "color", 14,   10);
    changeColors(color4, "color", 21,   10);
    changeColors(color5, "color", 28,   10);
    changeColors(color6, "color", 36,   10);
    changeColors(color7, "color", 43,   10);
    changeColors(color8, "color", 50,   10);
    changeColors(color9, "color", 57,   10);
    changeColors(color10, "color", 65,  10);
    changeColors(color11, "color", 73,  10);
    changeColors(color12, "color", 80,  10);
    changeColors(color13, "color", 87,  10);
    changeColors(color14, "color", 94,  10);
    changeColors(color15, "color", 101, 10);
    changeColors(color16, "color", 108, 10);
    changeColors(color17, "color", 116, 10);
    changeColors(color18, "color", 123, 10);
    changeColors(color19, "color", 130, 10);
    changeColors(color20, "color", 137, 10);
    changeColors(color21, "color", 144, 10);
    changeColors(color22, "color", 153, 10);
    changeColors(color23, "color", 160, 10);
    changeColors(color24, "color", 167, 10);
    changeColors(color25, "color", 180, 10);
    changeColors(color26, "color", 188, 10);
    changeColors(color27, "color", 186, 10);
    changeColors(color28, "color", 194, 10);
    changeColors(color29, "color", 202, 10);
    changeColors(color30, "color", 210, 10);
    changeColors(color31, "color", 218, 10);
    changeColors(color32, "color", 226, 10);
    changeColors(color33, "color", 234, 10);
    changeColors(color34, "color", 242, 10);
    changeColors(color35, "color", 250, 10);
    changeColors(color36, "color", 258, 10);
    changeColors(color37, "color", 264, 10);
    changeColors(color38, "color", 272, 10);
    changeColors(color39, "color", 280, 10);
    changeColors(color40, "color", 287, 10);
    changeColors(color41, "color", 294, 10);
    changeColors(color42, "color", 301, 10);
    changeColors(color43, "color", 308, 10);
    changeColors(color44, "color", 315, 10);
    changeColors(color45, "color", 322, 10);
    changeColors(color46, "color", 330, 10);
    changeColors(color47, "color", 337, 10);
    changeColors(color48, "color", 344, 10);
    changeColors(color49, "color", 351, 10);
    changeColors(color50, "color", 354, 10);
}
rainbow()