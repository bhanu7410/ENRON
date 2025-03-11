import ProjectDisplay from "./components/ProjectDisplay";
import deleteIcon from "./assets/DeleteIcon.png";

import { useState } from "react";

import ProjectsNavBar from "./components/ProjectsNavBar";

import tailwindRandomColorGen from "./utils/TailwindRandomColorgen";
import { getCurrentDateTime } from "./utils/dateTime";

function App() {
	const [projectDetails, setProjectDetails] = useState({});
	const [currentProjectId, setCurrentProjectId] = useState();

	function handleNavigation(projectKey) {
		setCurrentProjectId(() => projectKey);
	}
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
					title: `New Project No.${projectNo}`,
					dateModified: getCurrentDateTime(),
					tasks: [],
					markdown: "",
					dueDate: getCurrentDateTime(),
					bgImage: tailwindRandomColorGen(),
				},
			};
			return newProject;
		});
		setCurrentProjectId(() => projectNo);
	}

	function handleDeleteProject(key) {
		setProjectDetails((projectsArray) => {
			const newProject = {
				...projectsArray,
			};
			delete newProject[key];
			return newProject;
		});
		if (key == currentProjectId) {
			setCurrentProjectId(null);
		}
	}
	return (
		<div className="flex flex-wrap">
			<div className="2xl:flex-1.5 flex h-screen flex-2 flex-col overflow-y-auto bg-stone-900 py-4 pr-1 pl-4">
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
					<ProjectsNavBar
						projectDetails={projectDetails}
						handleDeleteProject={handleDeleteProject}
						handleNavigation={handleNavigation}
						selectedProject={currentProjectId}
					/>
				</div>
				<div className="flex-1 text-white rounded h-30">user</div>
			</div>
			<ProjectDisplay
				projectDetails={projectDetails}
				handleNewProject={handleNewProject}
				setProjectDetails={setProjectDetails}
				selectedProject={currentProjectId}
				handleDeleteProject={handleDeleteProject}
			/>
		</div>
	);
}

export default App;
