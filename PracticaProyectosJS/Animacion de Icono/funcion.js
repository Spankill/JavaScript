const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
  const posicionX = event.offsetX;
  const posicionY = event.offsetY;

  const spanElement = document.createElement("span");
  spanElement.classList.add("particle");

  // Posiciona el elemento
  spanElement.style.left = posicionX + "px";
  spanElement.style.top = posicionY + "px";
  spanElement.style.transform = "translate(-50%, -50%)";
  const rotation = Math.random() * 720;
  spanElement.style.setProperty("--rotation", `${rotation}deg`);
  // Añade el span al DOM
  bodyElement.appendChild(spanElement);

  // Elimina después de que termine la animación
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
