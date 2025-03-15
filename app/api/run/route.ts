import { NextResponse } from "next/server";
import { spawn } from "child_process";

export async function POST(req: Request) {
	try {
		const { code, lang } = await req.json();

		if (!code || !lang) {
			return NextResponse.json(
				{ error: "Missing code or language" },
				{ status: 400 }
			);
		}

		const dockerCmd = ["docker", "run", "--rm", "-i", `${lang}-runner`];

		return new Promise((resolve) => {
			const process = spawn(dockerCmd[0], dockerCmd.slice(1));
			let output = "";
			let errorOutput = "";

			process.stdin.write(code);
			process.stdin.end();

			process.stdout.on("data", (data) => {
				output += data.toString();
			});

			process.stderr.on("data", (data) => {
				errorOutput += data.toString();
			});

			process.on("close", () => {
				resolve(
					NextResponse.json({
						output: output.trim(),
						error: errorOutput.trim() || null,
					})
				);
			});
		});
	} catch (error) {
		return NextResponse.json(
			{ errorMSG: "Internal Server Error",error },
			{ status: 500 }
		);
	}
}
