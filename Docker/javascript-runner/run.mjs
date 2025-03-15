// const fs = require("fs");

let code = "";

process.stdin.on("data", (chunk) => {
	code += chunk.toString();
});

process.stdin.on("end", () => {
	try {
		eval(code); // Execute the JavaScript code
	} catch (err) {
		console.error("Error:", err);
	}
});
