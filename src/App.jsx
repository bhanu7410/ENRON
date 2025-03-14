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
					markdown: "You can add your markdown here",
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
				<div className="flex-1 pt-3 pr-4 text-left align-text-bottom text-2xl font-bold text-white uppercase xl:text-4xl">
					Your Projects
				</div>
				<div className="my-2 flex-1 pl-4">
					<button
						onClick={() => handleNewProject()}
						className="my-2 h-12 w-45 rounded-2xl bg-stone-600 pl-3 text-left text-xl text-white transition-all duration-100 ease-in hover:bg-stone-700"
					>
						+ New Project
					</button>
				</div>
				<div className="custom_scrollbar flex-15 overflow-y-auto">
					<ProjectsNavBar
						projectDetails={projectDetails}
						handleDeleteProject={handleDeleteProject}
						handleNavigation={handleNavigation}
						selectedProject={currentProjectId}
					/>
				</div>
				<div className="h-30 flex-1 rounded text-white">user</div>
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
