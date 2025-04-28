document.addEventListener("DOMContentLoaded", () => {
  const formatTime = (date = new Date()) => {
    return date.toLocaleTimeString("es-BO", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  setTimeout(() => {
    document.querySelectorAll(".group").forEach((card) => {
      const status = card.querySelector(".status-indicator");
      const lastAccess = card.querySelector(".last-access");

      if (status && lastAccess) {
        status.textContent = "En línea";
        status.classList.replace("bg-esam-offline/10", "bg-esam-success/10");
        status.classList.replace("text-esam-offline", "text-esam-success");
        lastAccess.textContent = formatTime();
      }
    });
  }, 2000);
});
