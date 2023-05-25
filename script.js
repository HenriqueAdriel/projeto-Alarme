function displayTime() {
    var clock = document.getElementById("clock");
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var currentTime = hours + ":" + minutes + ":" + seconds;
    clock.innerHTML = currentTime;
}

setInterval(displayTime, 1000);

function definirAlarme() {
    const horaSelecionada = document.getElementById("hora").value;
    const horaAtual = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  
    if (horaSelecionada === "") {
        alert("Por favor, selecione uma hora para definir o alarme.");
        return;
    }
  
    if (horaSelecionada <= horaAtual) {
        alert("A hora selecionada já passou. Por favor, selecione uma hora futura.");
        return;
    }
  
    const horaAlarme = new Date();
    const [hora, minutos] = horaSelecionada.split(":");
    horaAlarme.setHours(hora);
    horaAlarme.setMinutes(minutos);
    horaAlarme.setSeconds(0);
  
    const diferencaTempo = horaAlarme.getTime() - Date.now();
  
    setTimeout(() => {
        exibirNotificacao();
    }, diferencaTempo);
  
    alert("Alarme definido para " + horaSelecionada);
}

function exibirNotificacao() {
    if (!("Notification" in window)) {
        alert("Este navegador não suporta notificações.");
        return;
    }
  
    if (Notification.permission === "granted") {
        const options = {
            body: "notificação para as aulas!",
            icon: "https://cdn-icons-png.flaticon.com/512/1082/1082146.png"
        };
  
        new Notification("Alarme", options);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const options = {
                    body: "notificação para as aulas!",
                    icon: "https://cdn-icons-png.flaticon.com/512/1082/1082146.png" 
                };
  
                new Notification("Alarme", options);
            }
        });
    }
}
