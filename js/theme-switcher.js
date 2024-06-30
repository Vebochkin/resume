const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        document
            .querySelector("body")
            .setAttribute("data-theme", e.target.dataset.theme);
        localStorage.setItem("theme", e.target.dataset.theme);
    });
});

function getThemeOnLoad() {
    const theme = localStorage.getItem("theme");

    if (theme) {
        document.querySelector("body").setAttribute("data-theme", theme);
    }
}

function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }
// Функция, которая проверяет, когда страница долистана до самого низа
function handleScroll() {
    const hiddenText = document.getElementById('hidden-text');
    
    if (isBottomReached()) {
        hiddenText.classList.remove('hidden');
    } else {
        hiddenText.classList.add('hidden'); // Скрываем текст, если не достигли низа
    }
}

// Функция для проверки, долистана ли страница до самого низа
function isBottomReached() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Слушаем событие прокрутки страницы
window.addEventListener('scroll', handleScroll);
getThemeOnLoad();
