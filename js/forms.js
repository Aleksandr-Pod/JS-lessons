const form = document.querySelector(".js-register-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();        // Отключаем действие браузера по умолчанию
    // console.log(ev.currentTarget); // Это ссылка на объект, где произошло событие
    // console.log(ev.currentTarget.elements); // Элементы объекта, ... 
    // console.log(ev.currentTarget.elements.subscription.value) // Покажет
    // результат формы ввода


    // Класс - FormData

    // Собрать значения всех полей формы:
    const formData = new FormData(ev.currentTarget);
        formData.forEach((value, fieldName) => {
        console.log(fieldName, ":", value);
    })
}