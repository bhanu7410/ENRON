import ProjectDisplay from "./components/ProjectDisplay";
import settingsIcon from "./assets/icons8-settings-100.svg";

import { useEffect, useRef, useState } from "react";

import ProjectsNavBar from "./components/ProjectsNavBar";

import tailwindRandomColorGen from "./utils/TailwindRandomColorgen";
import { getCurrentDateTime } from "./utils/dateTime";

function App() {
	const [projectDetails, setProjectDetails] = useState({});
	const [settings, setSettings] = useState({
		projectTabColors: false,
	});
	const [currentProjectId, setCurrentProjectId] = useState();
	const [settingsBoxStatus, setSettingsBoxStatus] = useState(false);

	const settingsBoxRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				settingsBoxRef.current &&
				!settingsBoxRef.current.contains(event.target)
			) {
				setSettingsBoxStatus(false); // Hide settings box when clicking outside
			}
		}

		function handleEscapeKey(event) {
			if (event.key === "Escape") {
				setSettingsBoxStatus(false); // Hide when pressing Escape key
			}
		}

		if (settingsBoxStatus) {
			document.addEventListener("keydown", handleEscapeKey);
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [settingsBoxStatus]);

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
		<>
			<div
				ref={settingsBoxRef}
				className={`absolute top-1/2 left-1/2 z-10 p-4 font-sans text-white ${settingsBoxStatus ? "block" : "hidden"} h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-stone-900 text-stone-100 shadow-2xl shadow-stone-700 transition-all duration-500 ease-in`}
			>
				<div className="mb-5 text-3xl">Settings</div>
				<div
					className="flex gap-2 px-5"
					onClick={() =>
						setSettings((prev) => ({
							...prev,
							projectTabColors: !prev.projectTabColors,
						}))
					}
				>
					<input
						className="rounded-sm border-red-300 bg-red-900 text-blue-600 focus:ring-blue-500"
						type="checkbox"
						name="projectTabColor"
						checked={settings.projectTabColors}
						readOnly
					/>
					<div>Enable Porject Tab Colors</div>
				</div>
				<div className="px-5 text-sm text-stone-400">
					.....More settings will come soon
				</div>
			</div>

			<div
				className={`flex flex-wrap ${settingsBoxStatus ? "opacity-90" : ""} transition-all duration-100 ease-in`}
			>
				<div className="2xl:flex-1.5 flex h-screen flex-2 flex-col overflow-y-auto bg-stone-900 py-4 pr-1 pl-4">
					<div className="flex-2 pt-3 pr-4 text-left align-text-bottom text-2xl font-bold text-white uppercase xl:text-4xl">
						Your Projects
					</div>
					<div className="my-2 flex flex-1 items-center justify-between px-4">
						<button
							onClick={() => handleNewProject()}
							className="my-2 h-12 w-45 rounded-2xl bg-stone-600 pl-3 text-left text-xl text-white transition-all duration-100 ease-in hover:bg-stone-700"
						>
							+ New Project
						</button>
						<button className="h-fit w-fit flex-none rounded-full transition-all duration-100 ease-in hover:bg-stone-700 active:bg-stone-800">
							<img
								className="h-14"
								src={settingsIcon}
								alt="settings button"
								onClick={() =>
									setSettingsBoxStatus((status) => !status)
								}
							/>
						</button>
					</div>
					<div className="custom_scrollbar flex-30 overflow-y-auto">
						<ProjectsNavBar
							projectDetails={projectDetails}
							handleDeleteProject={handleDeleteProject}
							handleNavigation={handleNavigation}
							selectedProject={currentProjectId}
							settings={settings}
						/>
					</div>
					<div className="h-30 flex-2 rounded text-white">user</div>
				</div>
				<ProjectDisplay
					projectDetails={projectDetails}
					handleNewProject={handleNewProject}
					setProjectDetails={setProjectDetails}
					selectedProject={currentProjectId}
					handleDeleteProject={handleDeleteProject}
				/>
			</div>
		</>
	);
}

export default App;
