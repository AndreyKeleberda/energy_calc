const input = document.querySelector('.input-calc')
const button = document.querySelector('.button-calc')
const result = document.querySelector('.result')
button.addEventListener('click', calculate)

function calculate () {
    const incr = input.value * 0.55 * 24 * 176 *0.08;
    result.innerHTML = `
    <p>Дивись яке буде споживання енергоносіїв: <br>
    Електро-котел - ${incr.toFixed(2)}кВт/год <br>
    Газ - ${incr.toFixed(2)/8} м.куб. <br>
    ТНГ - ${(incr.toFixed(2)/4.2).toFixed(2)} кВт/год <br>
    </p>

    <p>А це витрати за опалювальний сезон, грн: <br>
    Електро-котел - ${incr.toFixed(2)*2.5} грн. <br>
    Газ - ${incr.toFixed(2)/8*10} грн. <br>
    ТНГ - ${(incr.toFixed(2)/4.2).toFixed(2)*2.5} грн. <br>
    </p>
    <h3>Нічого не зрозуміло? -Так і було задумано! Зателефонуй до нас скоріше!!!</h3>

    `
}