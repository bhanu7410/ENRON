import { use, useRef, useState } from "react";

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
	const [editTasknumber, setEditTaskNumber] = useState(null);
	const [editTaskDetails, setEditTaskDetails] = useState(null);

	const inputNewTaskRef = useRef(null);

	function handleNewTask() {
		setNewTaskStatus((status) => false);

		let newSetTasks = [...projectDetails[currentProjectId].tasks];
		newSetTasks.push(
			newTaskDetails ? newTaskDetails : "Random Task Created",
		);

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
	}

	function handleDeleteTask(index) {
		let newSetTasks = [...projectDetails[currentProjectId].tasks];
		newSetTasks.splice(index, 1);
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
	}

	function handleNewTaskEntry(target) {
		setNewTaskDetails(() => target);
	}

	function handleNewTaskClick() {
		if (newTaskStatus) {
			handleNewTask();
			setNewTaskStatus(() => true);
			inputNewTaskRef.current.focus();
		} else setNewTaskStatus((status) => !status);
	}

	function handleEditTaskClick(index) {
		setEditTaskNumber(() => index);
	}

	function handleEdittedTask(index) {
		let newSetTasks = [...projectDetails[currentProjectId].tasks];
		newSetTasks[index] = editTaskDetails
			? editTaskDetails
			: newSetTasks[index];
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
		setEditTaskNumber(null);
		setEditTaskDetails(null);
	}

	return (
		<div className="my-2 mr-4 pl-4">
			{tasks.map((task, index) => (
				<div
					key={index}
					className="my-2 flex items-center justify-between"
				>
					{editTasknumber === index ? (
						<input
							type="text"
							name={`task ${index}`}
							className="w-full rounded-lg p-2 pl-4 text-xl outline-2 outline-violet-500"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleEdittedTask(index);
								}
								if (e.key === "Escape") {
									setEditTaskNumber(null);
									setEditTaskDetails(null);
								}
							}}
							onChange={(e) => setEditTaskDetails(e.target.value)}
							autoFocus
							defaultValue={task}
						/>
					) : (
						<div
							onClick={() => handleEditTaskClick(index)}
							className="flex-auto cursor-pointer rounded border-2 border-transparent text-left text-xl hover:border-sky-400"
						>
							{index}.{task}
						</div>
					)}
					<button
						onClick={() => handleDeleteTask(index)}
						className="flex-none cursor-pointer rounded px-2 py-1 text-xl transition-all duration-100 ease-in hover:bg-red-400"
					>
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
						if (e.key === "Escape") {
							setNewTaskStatus(false);
							setNewTaskDetails("");
						}
					}}
					onChange={(event) => handleNewTaskEntry(event.target.value)}
					className="mb-2 w-full rounded-lg p-2 pl-4 text-xl outline-2 outline-violet-500"
					value={newTaskDetails ? newTaskDetails : ""}
					ref={inputNewTaskRef}
				/>
			) : null}

			<button
				onClick={() => handleNewTaskClick()}
				className="w-full rounded-2xl border-2 border-green-400 p-2 pl-4 text-xl transition-all duration-150 ease-in hover:bg-green-400"
			>
				+ New Task
			</button>
		</div>
	);
}
