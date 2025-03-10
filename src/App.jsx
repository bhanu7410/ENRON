import ProjectDisplay from "./components/ProjectDisplay";

import { useState } from "react";

function App() {
	const [projectDetails, setProjectDetails] = useState({});

	function handleNewProject() {
		let projectNo = Object.keys(projectDetails).length
			? Number(
					Object.keys(projectDetails)[
						Object.keys(projectDetails).length - 1
					],
				) + 1
			: 1;
		setProjectDetails((projectsArray) => {
			const newProject = {
				...projectsArray,
				[projectNo]: {
					title: ` New Project No.${projectNo}`,
					dateModified: new Date().toLocaleDateString(),
					tasks: [],
					markdown: "",
					dueDate: "",
				},
			};
			return newProject;
		});
	}

	return (
		<>
			<div className="flex flex-wrap">
				<div className="flex flex-col h-screen py-4 pl-4 pr-1 overflow-y-auto flex-2 rounded-tr-2xl bg-stone-900">
					<div className="flex-1 pt-3 pr-4 text-2xl font-bold text-left text-white uppercase align-text-bottom xl:text-4xl">
						Your Projects
					</div>
					<div className="flex-1 pl-4 my-2">
						<button
							onClick={() => handleNewProject()}
							className="h-12 pl-3 my-2 text-xl text-left text-white transition-all duration-100 ease-in w-45 rounded-2xl bg-stone-600 hover:bg-stone-700"
						>
							+ New Project
						</button>
					</div>
					<div className="overflow-y-auto custom_scrollbar flex-15">
						{Object.entries(projectDetails).map(([key, value]) => (
							<div
								key={key}
								className="flex items-center p-2 m-1 text-white truncate transition-all duration-75 ease-in rounded-lg hover:bg-stone-700"
							>
								{value.title}
							</div>
						))}
					</div>
					<div className="flex-1 text-white rounded h-30">user</div>
				</div>
				<ProjectDisplay
					projectDetails={projectDetails}
					handleNewProject={handleNewProject}
				/>
			</div>
		</>
	);
}

export default App;
