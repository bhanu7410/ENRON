import { use, useState } from "react";

import DeleteIconBlack from "../assets/Cross.png";

import { getCurrentDateTime } from "../utils/dateTime.jsx";

export default function Tasks({
	tasks,
	projectDetails,
	setProjectDetails,
	currentProjectId,
}) {
	const [newTaskStatus, setNewTaskStatus] = useState(false);
	const [newTaskDetails, setNewTaskDetails] = useState("");
	const [taskArrayStatus, setTaskArrayStatus] = useState(
		projectDetails[currentProjectId].tasks.map(() => false),
	);

	function handleNewTask() {
		setNewTaskStatus((status) => !status);
		let newSetTasks = [...projectDetails[currentProjectId].tasks];
		newSetTasks.push(newTaskDetails);
		setProjectDetails((projectArray) => {
			const newProjects = {
				...projectArray,
				[currentProjectId]: {
					...projectArray[currentProjectId],
					tasks: [...newSetTasks],
					dateModified: getCurrentDateTime(),
				},
			};
			return newProjects;
		});
		setNewTaskDetails(null);
		setTaskArrayStatus((taskArray) => [...taskArray, false]);
	}

	function handleNewTaskEntry(target) {
		setNewTaskDetails(() => target);
	}

	return (
		<div className="pl-4 my-2 mr-4">
			{tasks.map((task, index) => (
				<div
					key={index}
					className="flex items-center justify-between my-2"
				>
					<div className="flex-auto text-xl text-left border-2 border-transparent rounded cursor-pointer hover:border-sky-400">
						{index}.{task}
					</div>
					<button className="flex-none px-2 py-1 text-xl transition-all duration-100 ease-in rounded cursor-pointer hover:bg-red-400">
						<img
							className="w-6"
							src={DeleteIconBlack}
							alt="Delete Icon Black"
						/>
					</button>
				</div>
			))}
			{newTaskStatus ? (
				<input
					autoFocus
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleNewTask();
						}
					}}
					onChange={(event) => handleNewTaskEntry(event.target.value)}
					className="w-full p-2 pl-4 text-xl rounded-lg"
					value={newTaskDetails}
				/>
			) : null}

			<button
				onClick={() => setNewTaskStatus((status) => !status)}
				className="w-full p-2 pl-4 text-xl transition-all duration-150 ease-in border-2 border-green-400 rounded-2xl hover:bg-green-400"
			>
				+ New Task
			</button>
		</div>
	);
}
