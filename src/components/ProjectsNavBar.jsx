import deleteIcon from "..//assets/DeleteIcon.png";

export default function ProjectsNavBar({
	projectDetails,
	handleDeleteProject,
	handleNavigation,
	selectedProject,
}) {
	return Object.entries(projectDetails).map(([projectKey, value]) => (
		<div
			key={projectKey}
			className={`group m-1 flex items-center truncate rounded-lg transition-all duration-75 ease-in ${projectKey === selectedProject ? "bg-stone-600" : undefined} text-white`}
		>
			<div
				onClick={() => handleNavigation(projectKey)}
				className="flex-auto p-2 transition-all duration-75 ease-in cursor-pointer hover:bg-stone-700"
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
