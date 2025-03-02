import { useEffect, useState } from "react";
import primepng from "./assets/investment-calculator-logo.png";

import Input from "./components/Input";
import { calculateInvestmentResults, formatter } from "./util/investment";

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
	let investedCapital = initialInvestment;
	let totalInterest = 0;

	const annualData = calculateInvestmentResults({
		initialInvestment: initialInvestment,
		annualInvestment: annualInvestment,
		expectedReturn: expectedReturn,
		duration: duration,
	});

	console.log(annualData);
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
			{duration > 0 ? (
				<table id="result">
					<thead>
						<tr>
							<th>Year</th>
							<th>Investment Value</th>
							<th>Interest(Year)</th>
							<th>Total Interest</th>
							<th>Invested Capital</th>
						</tr>
					</thead>
					<tbody>
						{annualData.map((data) => {
							totalInterest += data.interest;
							investedCapital += annualInvestment;
							return (
								<tr key={data.year}>
									<td>{data.year}</td>
									<td>
										{formatter.format(data.valueEndOfYear)}
									</td>
									<td>{formatter.format(data.interest)}</td>
									<td>{formatter.format(totalInterest)}</td>
									<td>
										{formatter.format(investedCapital)}{" "}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<p className="center">Duration Should be Greater Than Zero</p>
			)}
		</>
	);
}

export default App;
