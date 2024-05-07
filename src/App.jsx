import React, { useRef } from "react";
import data from "./data.js";
import { useState } from "react";
function App() {
	const [select, setselect] = useState(null);
	const [multiselection, setmultiselection] = useState(false);
	const [selectiondata, setselectiondata] = useState([]);

	function handleSelect(id) {
		console.log(id);
		setselect(id === select ? null : id);
	}

	function handlemultiselection(id) {
		let temp = [...selectiondata];

		let index = temp.indexOf(id);
		// console.log("index   ",id)
		if (index === -1) {
			temp.push(id);
		} else {
			temp.splice(index, 1);
		}

		setselectiondata(temp);
	}
	return (
		<div
			className=" min-w-screen min-h-screen absolute  
			top-[100px] md:left-[35vw]
  
   "
		>
			<h1
				className="border-2 border-slate-400 w-[400px]
      text-center p-4 bg-green-300
      "
				onClick={() => setmultiselection(!multiselection)}
			>
				Accordion
			</h1>
			<div className="border-2 border-slate-700 w-[400px] ">
				{data && data.length > 0 ? (
					data.map((item) => (
						<div
							key={item.id}
							className="bg-blue-500 m-2 flex
           justify-between m-3 p-4 flex-col"
						>
							<div className="flex justify-between border-2 border-slate-400 p-3">
								<div>{item.question} </div>
								<span
									className="text-end mr-5"
									onClick={
										multiselection
											? () => handlemultiselection(item.id)
											: () => handleSelect(item.id)
									}
								>
									+
								</span>
							</div>
							{multiselection && selectiondata.indexOf(item.id) !== -1 ? (
								<div>{item.answer}</div>
							) : (
								item.id === select && (
									<div className="bg-blue-400 text-center p-0">
										{item.answer}
									</div>
								)
							)}
						</div>
					))
				) : (
					<div>No data is present </div>
				)}
			</div>
		</div>
	);
}

export default App;
