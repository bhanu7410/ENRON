import deleteIcon from "..//assets/DeleteIcon.png";

export default function ProjectsNavBar({
	projectDetails,
	handleDeleteProject,
}) {
	return Object.entries(projectDetails).map(([projectKey, value]) => (
		<div
			key={projectKey}
			className="flex items-center m-1 text-white truncate group"
		>
			<div className="flex-auto p-2 transition-all duration-75 ease-in rounded-lg cursor-pointer hover:bg-stone-700">
				{value.title}
			</div>
			<div
				onClick={() => handleDeleteProject(projectKey)}
				className="w-10 opacity-0 cursor-pointer h-max rounded-xl group-hover:opacity-100 hover:bg-red-400"
			>
				<img src={deleteIcon} alt="" />
			</div>
		</div>
	));
}
