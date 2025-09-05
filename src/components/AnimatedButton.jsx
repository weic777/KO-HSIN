import { useEffect, useRef, useState } from "react";
import "./AnimatedButton.css";

const confettiCount = 20;
const sequinCount = 10;
const gravityConfetti = 0.3;
const gravitySequins = 0.55;
const dragConfetti = 0.075;
const dragSequins = 0.02;
const terminalVelocity = 3;

const colors = [
  { front: "#7b5cff", back: "#6245e0" },
  { front: "#b3c7ff", back: "#8fa5e5" },
  { front: "#5c86ff", back: "#345dd1" },
];

const randomRange = (min, max) => Math.random() * (max - min) + min;

const initConfettoVelocity = (xRange, yRange) => {
  const x = randomRange(xRange[0], xRange[1]);
  const range = yRange[1] - yRange[0] + 1;
  let y =
    yRange[1] -
    Math.abs(randomRange(0, range) + randomRange(0, range) - range);
  if (y >= yRange[1] - 1) y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
  return { x, y: -y };
};

function Confetto(canvas, button) {
  this.randomModifier = randomRange(0, 99);
  this.color = colors[Math.floor(randomRange(0, colors.length))];
  this.dimensions = { x: randomRange(5, 9), y: randomRange(8, 15) };
  this.position = {
    x:
      randomRange(
        canvas.width / 2 - button.offsetWidth / 4,
        canvas.width / 2 + button.offsetWidth / 4
      ) || 0,
    y:
      randomRange(
        canvas.height / 2 + button.offsetHeight / 2 + 8 - 100,
        canvas.height / 2 + 1.5 * button.offsetHeight - 8 - 100
      ) || 0,
  };
  this.rotation = randomRange(0, 2 * Math.PI);
  this.scale = { x: 1, y: 1 };
  this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
}
Confetto.prototype.update = function () {
  this.velocity.x -= this.velocity.x * dragConfetti;
  this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity);
  this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
  this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
};

function Sequin(canvas, button) {
  this.color = colors[Math.floor(randomRange(0, colors.length))].back;
  this.radius = randomRange(1, 2);
  this.position = {
    x:
      randomRange(
        canvas.width / 2 - button.offsetWidth / 3,
        canvas.width / 2 + button.offsetWidth / 3
      ) || 0,
    y:
      randomRange(
        canvas.height / 2 + button.offsetHeight / 2 + 8,
        canvas.height / 2 + 1.5 * button.offsetHeight - 8
      ) || 0,
  };
  this.velocity = { x: randomRange(-6, 6), y: randomRange(-12, -8) };
}
Sequin.prototype.update = function () {
  this.velocity.x -= this.velocity.x * dragSequins;
  this.velocity.y += gravitySequins;
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
};

export default function AnimatedButton({
  submitText = "Submit",
  successText = "Success",
  downloadLink,
}) {
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);
  const [disabled, setDisabled] = useState(false);

  const confetti = useRef([]);
  const sequins = useRef([]);

  const initBurst = () => {
    for (let i = 0; i < confettiCount; i++) {
      confetti.current.push(new Confetto(canvasRef.current, buttonRef.current));
    }
    for (let i = 0; i < sequinCount; i++) {
      sequins.current.push(new Sequin(canvasRef.current, buttonRef.current));
    }
  };

  const render = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    confetti.current.forEach((c, i) => {
      let width = c.dimensions.x * c.scale.x;
      let height = c.dimensions.y * c.scale.y;
      ctx.translate(c.position.x, c.position.y);
      ctx.rotate(c.rotation);
      c.update();
      ctx.fillStyle = c.scale.y > 0 ? c.color.front : c.color.back;
      ctx.fillRect(-width / 2, -height / 2, width, height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      if (c.position.y >= canvasRef.current.height) confetti.current.splice(i, 1);
    });

    sequins.current.forEach((s, i) => {
      ctx.translate(s.position.x, s.position.y);
      s.update();
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(0, 0, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      if (s.position.y >= canvasRef.current.height) sequins.current.splice(i, 1);
    });

    requestAnimationFrame(render);
  };

  const clickButton = async () => {
    if (disabled) return;
    setDisabled(true);

    const btn = buttonRef.current;
    btn.classList.add("loading");
    btn.classList.remove("ready");

    // 非同步下載 PDF
    if (downloadLink) {
      try {
        const response = await fetch(downloadLink);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = downloadLink.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (err) {
        console.error("下載失敗", err);
      }
    }

    setTimeout(() => {
      btn.classList.add("complete");
      btn.classList.remove("loading");

      setTimeout(() => {
        initBurst();
        setTimeout(() => {
          setDisabled(false);
          btn.classList.add("ready");
          btn.classList.remove("complete");
        }, 4000);
      }, 320);
    }, 1800);
  };

  const resizeCanvas = () => {
    if (!canvasRef.current) return;
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    render();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const renderText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
        {char}
      </span>
    ));

  return (
    <>
      <button
        ref={buttonRef}
        className="animated-button ready"
        onClick={clickButton}
        disabled={disabled}
      >
        <div className="message submitMessage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
          >
            <path
              d="M7.60107 8.25879C7.95977 7.59263 7.47772 6.78436 6.72119 6.78418L4.86084 6.78418L4.86084 1.90527C4.86052 1.35326 4.41293 0.905274 3.86084 0.905274C3.30893 0.905484 2.86115 1.35339 2.86084 1.90527L2.86084 6.78418L1.00049 6.78418C0.243996 6.78441 -0.238084 7.59265 0.120605 8.25879L2.97998 13.5703C3.35755 14.2715 4.36413 14.2715 4.7417 13.5703L7.60107 8.25879Z"
              fill="currentColor"
            />
          </svg>
          <span className="button-text">{renderText(submitText)}</span>
        </div>

        <div className="message loadingMessage">
          <svg viewBox="0 0 19 17">
            <circle className="loadingCircle" cx="2.2" cy="10" r="1.6" />
            <circle className="loadingCircle" cx="9.5" cy="10" r="1.6" />
            <circle className="loadingCircle" cx="16.8" cy="10" r="1.6" />
          </svg>
        </div>
        <div className="message successMessage">
          <svg viewBox="0 0 13 11">
            <polyline
              points="1.4,5.8 5.1,9.5 11.6,2.1"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="button-text">{renderText(successText)}</span>
        </div>
      </button>
      <canvas ref={canvasRef} id="canvas"></canvas>
    </>
  );
}
