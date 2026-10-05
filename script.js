const letterButton = document.querySelector(".letter-button");
const letter = document.querySelector("#letter");

letterButton.addEventListener("click", () => {
	const isOpen = letterButton.getAttribute("aria-expanded") === "true";
	letterButton.setAttribute("aria-expanded", String(!isOpen));
	letter.hidden = isOpen;
	letterButton.querySelector(".button-label").textContent = isOpen
		? "Open your letter"
		: "Close your letter";
});

const memories = [
	{
		quote: "You told me I could do hard things, and somehow I believed you.",
		caption: "A little courage, carried a long way",
	},
	{
		quote: "You made it feel safe to ask one more question.",
		caption: "Curiosity has a way of sticking around",
	},
	{
		quote: "You remembered my name before I knew I belonged.",
		caption: "The smallest kindness can change a whole day",
	},
];

const quote = document.querySelector("#memory-quote");
const caption = document.querySelector("#memory-caption");
const count = document.querySelector("#memory-count");
const nextMemory = document.querySelector(".next-memory");
let memoryIndex = 0;

nextMemory.addEventListener("click", () => {
	memoryIndex = (memoryIndex + 1) % memories.length;
	quote.classList.remove("is-changing");
	void quote.offsetWidth;
	quote.textContent = memories[memoryIndex].quote;
	caption.textContent = memories[memoryIndex].caption;
	count.innerHTML = `0${memoryIndex + 1} <span>/ 0${memories.length}</span>`;
	quote.classList.add("is-changing");
});
