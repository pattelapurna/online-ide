"use client";

import Editor from "@monaco-editor/react";

interface IDEProps {
	lang: string;
	handleSetCode: (value: string | undefined) => void;
}

export default function IDE({ lang, handleSetCode }: IDEProps) {
	return (
		<Editor
			height="90vh"
			width="100vw"
			defaultLanguage="javascript"
			language={lang || "javascript"}
			theme="vs-dark"
			options={{
				fontSize: 24,
			}}
			onChange={(value) => handleSetCode(value)}
		/>
	);
}
