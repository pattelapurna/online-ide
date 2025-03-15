import React from "react";
import SelectLang from "@/components/SelectLang";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface IDEOptionsProps {
	onLangChange: (lang: string) => void;
}

interface IDEOptionsProps {
	onLangChange: (lang: string) => void;
	handleRun: () => void;
}

const IDEOptions = ({ onLangChange, handleRun }: IDEOptionsProps) => {
	return (
		<div
			style={{ height: "10vh" }}
			className="flex items-center w-full px-10 justify-between"
		>
			<h1 className="text-4xl">COMPILER👑</h1>
			<div className="flex gap-2">
				<SelectLang onLangChange={onLangChange} />
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger
							className="border-white border-2 w-20 rounded-2xl"
							onClick={handleRun}
						>
							RUN
						</TooltipTrigger>
						<TooltipContent>
							<p>ctrl + enter</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};

export default IDEOptions;
