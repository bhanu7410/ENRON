import { useEffect, useRef, useState } from "react";
import { getCurrentDateTime } from "../utils/dateTime";

import Markdown from "react-markdown";

export default function MarkdownDisplay({
	projectDetails,
	setProjectDetails,
	currentProjectId,
}) {
	const [markdownStatus, setMarkdownStatus] = useState(true);
	const markdownAreaRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				markdownAreaRef.current &&
				!markdownAreaRef.current.contains(event.target)
			) {
				handleMarkdownSave();
			}
		}
		function handleEscapeKey(event) {
			if (!markdownStatus && event.key == "Escape") {
				handleMarkdownSave();
			}
		}

		if (!markdownStatus) {
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("keydown", handleEscapeKey);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [markdownStatus]);

	function handleMarkdownInput() {
		const textarea = markdownAreaRef.current;
		textarea.style.height = `${textarea.scrollHeight}px`;
	}

	function handleMarkdownSave() {
		let setMarkdown = markdownAreaRef.current.value
			? markdownAreaRef.current.value
			: "You can add your markdown here";
		setMarkdown = setMarkdown
			.split("\n")
			.map((line) => line + "  ")
			.join("\n");
		setProjectDetails((projectArray) => {
			const updatedProject = {
				...projectArray,
				[currentProjectId]: {
					...projectArray[currentProjectId],
					markdown: setMarkdown,
					dateModified: getCurrentDateTime(),
				},
			};
			return updatedProject;
		});
		setMarkdownStatus((e) => !e);
	}

	return (
		<>
			<div className="mr-4 flex pl-5 text-sm text-stone-400">
				<div className="flex-auto">
					Please Save Before going to another project
				</div>
				<div className="flex-none text-right">Cmd-H/CTRL-Y to Save</div>
			</div>
			{markdownStatus ? (
				<div
					className="mx-4 cursor-pointer rounded border-2 border-transparent pl-1 hover:border-sky-500"
					onClick={() => {
						setMarkdownStatus((e) => !e);
						setTimeout(() => handleMarkdownInput(), 10);
					}}
				>
					<Markdown>
						{projectDetails[currentProjectId].markdown}
					</Markdown>
				</div>
			) : (
				<textarea
					ref={markdownAreaRef}
					onInput={handleMarkdownInput}
					className="mx-4 rounded border-2 border-transparent p-1 outline-2 outline-violet-500"
					name={`${currentProjectId} Project Markdown`}
					placeholder="Markdown Can be used Here....... use Cmd-H/Ctrl-Y to save as markdown"
					onKeyDown={(e) => {
						if (
							(e.metaKey && e.key == "h") ||
							(e.ctrlKey && e.key == "y") ||
							e.key == "Escape"
						) {
							handleMarkdownSave();
						}
					}}
					defaultValue={projectDetails[currentProjectId].markdown}
					autoFocus
				/>
			)}
		</>
	);
}
