import { useState } from "react";
import png from "../assets/no-projects.png";

import { getCurrentDateTime, getTimeDifference } from "../utils/dateTime";

export default function ProjectDisplay({
	projectDetails,
	handleNewProject,
	setProjectDetails,
	handleDeleteProject,
	selectedProject = null,
}) {
	let currentProjectId = selectedProject
		? selectedProject
		: Object.keys(projectDetails)[Object.keys(projectDetails).length - 1];
	let currentProject = projectDetails[currentProjectId];

	const [titleStatus, setTitleStatus] = useState(false);

	function handleTitleStatus() {
		setTitleStatus((status) => !status);
		console.log(titleStatus);
	}

	function handleTitleChange(e) {
		setProjectDetails((projectsArray) => {
			const newProject = {
				...projectsArray,
				[currentProjectId]: {
					...projectsArray[currentProjectId],
					title: e.target.value,
					dateModified: getCurrentDateTime(),
				},
			};
			return newProject;
		});
	}

	return (
		<>
			{Object.keys(projectDetails).length ? (
				<div className="custome_scrollbar flex h-screen flex-5 flex-col overflow-y-auto [&>div]:pl-7">
					<div
						className={`flex h-1/5 flex-none ${currentProject.bgImage} font-sans`}
					>
						<div className="flex items-end justify-start flex-auto pb-6 text-4xl font-bold text-stone-950">
							{titleStatus ? (
								<input
									autoFocus
									className="border-violet-600"
									type="text"
									placeholder={currentProject.title}
									value={currentProject.title}
									onChange={handleTitleChange}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleTitleStatus();
										}
									}}
								/>
							) : (
								<div onClick={handleTitleStatus}>
									{currentProject.title}
								</div>
							)}
						</div>
						<div>
							<div>
								{getTimeDifference(
									getCurrentDateTime(),
									currentProject.dateModified,
								)}
							</div>
						</div>
					</div>

					<div className="flex flex-col flex-auto">
						{currentProject.dateModified}
						{currentProject.tasks}
						{currentProject.markdown}
						{currentProject.dueDate}
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center h-screen gap-4 overflow-y-auto flex-5">
					<img src={png} alt="" width={100} />
					<div className="text-3xl">No Project Selected</div>
					<div className="text-xl text-stone-400">
						Select a Project or get started with a new one
					</div>
					<button
						onClick={handleNewProject}
						className="px-5 py-4 text-xl rounded-2xl bg-stone-800 text-stone-400"
					>
						Create new project
					</button>
				</div>
			)}
		</>
	);
}
