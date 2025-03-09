import { useState } from "react";
import png from "./assets/no-projects.png";

function App() {
	let [test, setTest] = useState(true);
	return (
		<>
			<div className="flex flex-wrap">
				<div className="flex flex-col flex-none h-screen py-4 pl-4 pr-1 overflow-y-auto w-100 rounded-tr-2xl bg-stone-900">
					<div className="pr-4 text-4xl font-bold text-white uppercase">
						Your Projects
					</div>
					<div className="pl-4 my-2">
						<button className="h-12 pl-3 my-2 text-xl text-left text-white transition-all duration-100 ease-in w-45 rounded-2xl bg-stone-600 hover:bg-stone-700">
							+ New Project
						</button>
					</div>
					<div className="overflow-y-auto custome_scrollbar">
						{Array.from({ length: 40 }, (_, i) => (
							<div
								key={i}
								className="flex items-center gap-2 p-2 rounded-md hover:bg-stone-700"
							>
								<div className="w-8 h-8 bg-red-300 rounded-full"></div>
								<div className="flex-auto text-white truncate">
									Project {i + 1}
								</div>
							</div>
						))}
					</div>
					<div className="text-white rounded h-30">user</div>
				</div>
				<div className="flex flex-col items-center justify-center flex-auto h-screen gap-4 overflow-y-auto">
					<img src={png} alt="" width={100} />
					<div className="text-3xl">No Project Selected</div>
					<div className="text-xl text-stone-400">
						Select a Project or get started with a new one
					</div>
					<button className="px-5 py-4 text-xl rounded-2xl bg-stone-800 text-stone-400">
						Create new project
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
