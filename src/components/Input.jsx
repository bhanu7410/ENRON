export default function Input({ lable, setValue }) {
	function handleValueChange(event) {
		setValue(Number(event.target.value));
	}
	return (
		<div className="input-group">
			<label className="lable">{lable}</label>
			<input
				type="number"
				name={lable}
				id={lable}
				onChange={handleValueChange}
			/>
		</div>
	);
}
