const names = ["Florian", "Sophie", "Constantin", "Gina", "Thomas", "Hanna", "Justin", "Esther", "Lara", "Tom"];
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const size = canvas.width;
const radius = size / 2;
const spinButton = document.getElementById("spinButton");
let rotation = 0;
let isSpinning = false;

function drawWheel() {
  const anglePerSegment = (2 * Math.PI) / names.length;
  ctx.clearRect(0, 0, size, size);

  for (let i = 0; i < names.length; i++) {
    const startAngle = i * anglePerSegment + rotation;
    const endAngle = startAngle + anglePerSegment;

    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, startAngle, endAngle);

    // Blau-Lila Farbpalette abwechselnd
    ctx.fillStyle = i % 2 === 0 ? "#6b5bde" : "#8a79e0";
    ctx.fill();

    // Namen zeichnen
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(startAngle + anglePerSegment / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "white";
    ctx.font = "bold 18px Arial";
    ctx.fillText(names[i], radius - 20, 8);
    ctx.restore();
  }
}

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  let spinAngle = Math.random() * 360 + 720;
  const duration = 4000;
  const start = performance.now();

  function animate(now) {
    let elapsed = now - start;
    if (elapsed > duration) elapsed = duration;
    const easeOut = 1 - Math.pow(1 - elapsed / duration, 3);
    rotation = (spinAngle * easeOut * Math.PI) / 180;
    drawWheel();
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      const anglePerSegment = (2 * Math.PI) / names.length;
      let normalizedRotation = rotation % (2 * Math.PI);
      if (normalizedRotation < 0) normalizedRotation += 2 * Math.PI;
      let index = Math.floor(names.length - (normalizedRotation / anglePerSegment)) % names.length;
      alert("Gewinner: " + names[index]);
    }
  }

  requestAnimationFrame(animate);
}

drawWheel();
spinButton.addEventListener("click", spinWheel);
