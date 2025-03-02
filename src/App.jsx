import { useEffect, useState } from "react";
import primepng from "./assets/investment-calculator-logo.png";

import Input from "./components/Input";
import { calculateInvestmentResults } from "./util/investment";
function Header() {
	return (
		<>
			<div id="header">
				<img src={primepng} alt="investmentLogo" />
				<h1 id="header">Investment Caluculator</h1>
			</div>
		</>
	);
}

function App() {
	const [initialInvestment, setInitialInvestment] = useState(0);
	const [annualInvestment, setAnnualInvestment] = useState(0);
	const [expectedReturn, setExpectedReturn] = useState(0);
	const [duration, setDuration] = useState(0);

	const annualData = calculateInvestmentResults(
		initialInvestment,
		annualInvestment,
		expectedReturn,
		duration
	);
	console.log(initialInvestment);

	return (
		<>
			<Header />;
			<div id="user-input">
				<Input
					lable="Initial Investment"
					setValue={setInitialInvestment}
				/>
				<Input
					lable="Annual Investment"
					setValue={setAnnualInvestment}
				/>
				<Input lable="Expected Return" setValue={setExpectedReturn} />{" "}
				<Input lable="Duration" setValue={setDuration} />
			</div>
			{annualData}
		</>
	);
}

export default App;
