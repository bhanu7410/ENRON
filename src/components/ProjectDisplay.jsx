import png from "../assets/no-projects.png";

export default function ProjectDisplay({ projectDetails, handleNewProject }) {
	// print all the incoming props
	console.log(projectDetails);
	return (
		<>
			{Object.keys(projectDetails).length ? (
				<div className="flex flex-col flex-5">
					{projectDetails[Object.keys(projectDetails).length].title}
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
