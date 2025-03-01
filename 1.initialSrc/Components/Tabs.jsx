export default function Tabs({ tabs, ButtonsContainer, children }) {
	return (
		<>
			<ButtonsContainer>{tabs}</ButtonsContainer>

			{children}
		</>
	);
}
