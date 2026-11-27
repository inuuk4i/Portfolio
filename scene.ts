// この値を変えると、どのくらい近づいたときに手を振るかが変わる。
const GREETING_DISTANCE = 16;
const MOVE_SPEED = 42;
const host = { x: 62, y: 46 };
const visitor = { x: 34, y: 78 };
function findElement(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) throw new Error("広場に必要な要素が見つかりません。 " + id);
  return element;
}

const scene = findElement("scene");
const hostButton = findElement("host");
const visitorElement = findElement("visitor");
const announcement = findElement("announcement");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const directions = new Map<string, [number, number]>([
  ["ArrowUp", [0, -1]],
  ["ArrowDown", [0, 1]],
  ["ArrowLeft", [-1, 0]],
  ["ArrowRight", [1, 0]],
]);

let destination = visitor;
let greeting = false;
let frame = 0;
let previousTime: number | undefined;

function render() {
  visitorElement.style.left = visitor.x + "%";
  visitorElement.style.top = visitor.y + "%";

  const near = Math.hypot(visitor.x - host.x, visitor.y - host.y) <= GREETING_DISTANCE;
  if (near === greeting) return;

  greeting = near;
  scene.classList.toggle("greeting", greeting);
  announcement.textContent = greeting ? "僕が手を振りました。やあ！" : "";
}

function walk(time: number) {
  const seconds = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, 0.05);
  const xDistance = destination.x - visitor.x;
  const yDistance = destination.y - visitor.y;
  const distance = Math.hypot(xDistance, yDistance);
  const step = MOVE_SPEED * seconds;

  if (distance <= step) {
    Object.assign(visitor, destination);
    frame = 0;
    previousTime = undefined;
  } else {
    visitor.x += (xDistance / distance) * step;
    visitor.y += (yDistance / distance) * step;
    previousTime = time;
    frame = requestAnimationFrame(walk);
  }
  render();
}

function moveTo(x: number, y: number) {
  destination = {
    x: Math.min(92, Math.max(8, x)),
    y: Math.min(92, Math.max(36, y)),
  };
  if (reducedMotion.matches) {
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = undefined;
    Object.assign(visitor, destination);
    render();
    return;
  }
  if (!frame) frame = requestAnimationFrame(walk);
}

scene.addEventListener("click", (event) => {
  if (event.target instanceof Node && hostButton.contains(event.target)) return;

  const bounds = scene.getBoundingClientRect();
  moveTo((event.clientX - bounds.left) / bounds.width * 100,
    (event.clientY - bounds.top) / bounds.height * 100);
});

hostButton.addEventListener("click", () => moveTo(host.x - 5, host.y + 6));

scene.addEventListener("keydown", (event) => {
  const direction = directions.get(event.key);
  if (!direction || event.altKey || event.ctrlKey || event.metaKey) return;

  event.preventDefault();
  moveTo(destination.x + direction[0] * 5, destination.y + direction[1] * 5);
});

render();
