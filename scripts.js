setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = hours >= 12 ? "PM" : "AM"; // Simplificação da lógica AM/PM

    // Converter horas para o formato de 12 horas (se necessário)
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12; // Meia-noite deve ser 12 AM, não 0 AM
    }

    // Adicionar zero à esquerda para minutos e segundos menores que 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Atualizar o conteúdo do elemento HTML com a hora atualizada
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
}, 1000); // Atualiza a cada segundo (1000 milissegundos)
