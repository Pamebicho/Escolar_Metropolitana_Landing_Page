function initCountdown() {
  const championshipStart = new Date("2026-11-28T09:00:00-03:00").getTime();

  const cdDays = document.getElementById("cd-days");
  const cdHours = document.getElementById("cd-hours");
  const cdMinutes = document.getElementById("cd-minutes");
  const cdSeconds = document.getElementById("cd-seconds");
  const cdMessage = document.getElementById("cd-message");

  if (!cdDays || !cdHours || !cdMinutes || !cdSeconds) return;

  const pad = (value) => String(value).padStart(2, "0");

  const tick = () => {
    const diff = championshipStart - Date.now();

    if (diff <= 0) {
      [cdDays, cdHours, cdMinutes, cdSeconds].forEach((element) => {
        element.textContent = "00";
      });

      if (cdMessage) {
        cdMessage.textContent = "¡El campeonato ha comenzado!";
      }

      clearInterval(timer);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    cdDays.textContent = pad(Math.floor(totalSeconds / 86400));
    cdHours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    cdMinutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    cdSeconds.textContent = pad(totalSeconds % 60);
  };

  const timer = setInterval(tick, 1000);
  tick();
}
