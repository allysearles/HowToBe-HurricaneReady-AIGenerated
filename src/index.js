function displayPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 2.0,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "bf3ac0311d9084536tao67043b4313ef";

	let context = `You are an expert in Hurrican Preperation.Your mission is to generate 1 sentence on how to prepare that for a category 4 hurricane in basic HTML without replying back to me. Make sure to follow the user instructions below:. Be sure to sign the poem at the very end with a <strong> SheCodes AI </strong> and do not include any quotations or the word "html" in any of the text.`;
	let prompt = `Generate 1 sentence on how to prep ${instructionsInput.value} for a category 4 hurricane`;
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<div class = "generating"> ⏳ Generating Hurrican Saftey Preperation Measures for ${instructionsInput.value}. . .</div> `;

	axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
