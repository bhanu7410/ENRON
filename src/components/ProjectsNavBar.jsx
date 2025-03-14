import deleteIcon from "..//assets/DeleteIcon.png";

export default function ProjectsNavBar({
	projectDetails,
	handleDeleteProject,
	handleNavigation,
	selectedProject,
	settings,
}) {
	return Object.entries(projectDetails).map(([projectKey, value]) => (
		<div
			key={projectKey}
			className={`group m-1 flex items-center truncate rounded-lg transition-all duration-75 ease-in ${projectKey === selectedProject ? "bg-stone-600" : undefined} ${
				settings.projectTabColors && selectedProject != undefined
					? projectDetails[projectKey].bgImage
					: undefined
			} text-white`}
		>
			<div
				onClick={() => handleNavigation(projectKey)}
				className={`flex-auto cursor-pointer p-2 ${settings.projectTabColors && "text-black"} transition-all duration-75 ease-in hover:bg-stone-700`}
			>
				{value.title}
			</div>
			<div
				onClick={() => handleDeleteProject(projectKey)}
				className={`h-max w-10 cursor-pointer opacity-0 group-hover:opacity-100 ${projectKey === selectedProject ? "bg-red-400" : undefined} hover:bg-red-400`}
			>
				<img src={deleteIcon} alt="" />
			</div>
		</div>
	));
}
