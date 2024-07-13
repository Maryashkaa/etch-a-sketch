document.addEventListener("DOMContentLoaded", () => {
    //гарантирует, что все элементы HTML будут загружены и разобраны браузером перед выполнением кода

    const gridContainer = document.getElementById("gridContainer");
    const resetButton = document.getElementById("resetButton");
    // getElementById для получения ссылок на два элемента на странице: контейнер для сетки (gridContainer) и кнопку для сброса/создания новой сетки (resetButton)


    function createGrid(size) {
        gridContainer.innerHTML = ''; // Очистить контейнер перед созданием новой сетки
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//Функция createGrid принимает параметр size, который определяет количество квадратов в строке и столбце
//gridContainer.innerHTML = ''; очищает контейнер, удаляя все старые квадраты
//gridTemplateColumns и gridTemplateRows устанавливают размер сетки в зависимости от переданного параметра size



        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.opacity = 0; // Начальная непрозрачность для затемнения
            gridItem.addEventListener('mouseover', changeColor);
            gridContainer.appendChild(gridItem); 
        }
    }
   //используем цикл for, чтобы создать нужное количество квадратов (размер сетки это size на size)
   //document.createElement('div') создает новый HTML элемент <div>
    //gridItem.classList.add('grid-item') добавляет CSS-класс к новому элементу
    //gridItem.style.opacity = 0; устанавливает начальную прозрачность элемента
    //gridItem.addEventListener('mouseover', changeColor); добавляет обработчик события, который изменяет цвет квадрата при наведении мыши
    //gridContainer.appendChild(gridItem); добавляет созданный элемент в контейнер сетки



    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
//Эта функция создает случайный цвет в формате rgb.
//Math.random() * 256 генерирует случайное число от 0 до 255 для каждого из цветов (красного, зеленого и синего)
//Math.floor округляет число до ближайшего целого


    function changeColor(e) {
        const currentColor = e.target.style.backgroundColor;
        const currentOpacity = parseFloat(e.target.style.opacity);

        if (!currentColor || currentOpacity >= 1) {
            e.target.style.backgroundColor = getRandomColor();
            e.target.style.opacity = 0.1; // Начальная непрозрачность
        } else {
            e.target.style.opacity = Math.min(currentOpacity + 0.1, 1);
        }
    }
    //changeColor - это функция, которая изменяет цвет квадрата при наведении мыши.
//e.target - это элемент, на который навели мышь
//Если цвет квадрата еще не установлен или его прозрачность достигла 1 (полностью непрозрачный), устанавливается случайный цвет и начальная прозрачность 0.1.
//Иначе, прозрачность увеличивается на 0.1 до максимума 1



    resetButton.addEventListener("click", () => {
        let size = parseInt(prompt("Введите количество квадратов на сторону (макс. 100):")); // исправлено
        if (size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert("Пожалуйста, введите число от 1 до 100.");
        }
    });
//При нажатии на кнопку, вызывается обработчик события.
//prompt показывает пользователю диалоговое окно с запросом ввести размер сетки.
//parseInt преобразует введенное значение в число.
//Если введенное значение валидно (между 1 и 100), вызывается createGrid для создания новой сетки.
//Иначе, показывается предупреждение с просьбой ввести корректное значение


    createGrid(16);
});
//Вызов функции createGrid(16) создает сетку 16x16 при первой загрузке страницы