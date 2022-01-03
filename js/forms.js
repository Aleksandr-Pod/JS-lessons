//        Собрать данные с полей ввода

const form = document.querySelector(".js-register-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();        // Отключаем действие браузера по умолчанию
    // console.log(ev.currentTarget); // Это ссылка на объект, где произошло событие
    // console.log(ev.currentTarget.elements); // Элементы объекта, ... 
    // console.log(ev.currentTarget.elements.subscription.value) // Покажет
    // результат формы ввода

            // Класс - FormData

    //         Собрать значения всех полей формы:
    const formData = new FormData(ev.currentTarget);
        formData.forEach((value, fieldName) => {
        console.log(fieldName, ":", value);
    })
}


//           Активируем кнопку submit через checkbox
// const refs = {
//     checkLicense: document.querySelector(".js-checkLicense"),
//     formSubmit: document.querySelector(".js-formSubmit"),
// }
// refs.checkLicense.addEventListener('change', onCheckLicense);
// function onCheckLicense(event) {
//     refs.formSubmit.disabled = !event.currentTarget.checked;
// }
