if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

function checkAlarm() {
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();

  var desiredHours = [15, 15, 16, 16, 17];
  var desiredMinutes = [0, 30, 0, 30, 0];

  // Verificar se é terça-feira (dia 2) ou quinta-feira (dia 4)
  if ((currentDay === 2 || currentDay === 4)) {
    for (var i = 0; i < desiredHours.length; i++) {
      if (currentHour === desiredHours[i] && currentMinute === desiredMinutes[i]) {
        sendNotification();
        break; // Interrompe o loop após a notificação ser enviada
      }
    }
  }
}


function sendNotification() {
  if (Notification.permission === "granted") {
    var notification = new Notification("notificação", {
      body: "Aula hoje as 17:00",
    });

    notification.onclick = function () {
      // Lógica para lidar com o clique na notificação
    };
  }
}

setInterval(checkAlarm, 6000);
