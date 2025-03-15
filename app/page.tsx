"use client";

import IDE from "@/components/Editor";
import IDEOptions from "@/components/IDEOptions";
import React, { useState, useCallback, useEffect } from "react";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

const Page = () => {
	const [lang, setLang] = useState<string>("javascript");
	const [code, setCode] = useState<string>("");
	const [output, setOutput] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === "Enter") {
				handleCodeExecution(code, lang);
			}
		},
		[code, lang]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [handleKeyPress]);

	function handleLangChange(e: string) {
		setLang(e);
	}

	function handleSetCode(e: string | undefined) {
		setCode(e || "");
	}

	async function handleCodeExecution(code: string, lang: string) {
		if (code) {
			
			setLoading(true);
			setOutput("");

			try {
				const response = await fetch("/api/run", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ code, lang }),
				});
				const data = await response.json();
				setOutput(data.output || data.error || "No output");
			} catch (error) {
				console.error("Execution error:", error);
				setOutput("Error running the code.");
			} finally {
				setLoading(false);
			}
		} else {
			setOutput("WRITE SOME FIRST!!")
		}
	}

	return (
		<>
			<header>
				<IDEOptions
					onLangChange={handleLangChange}
					handleRun={() => handleCodeExecution(code, lang)}
				/>
			</header>
			<main>
				<ResizablePanelGroup direction="horizontal">
					<ResizablePanel>
						<IDE lang={lang} handleSetCode={handleSetCode} />
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel>
						<div className="border-r-green-950 border-2 w-full h-[90vh] p-4">
							{loading ? (
								<p>Executing...</p>
							) : (
								<pre style={{ whiteSpace: "pre" }}>{output}</pre>
							)}
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</main>
		</>
	);
};

export default Page;
