import { useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { sortPlacesByDistance } from "./loc.js";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

const storedIDs = JSON.parse(localStorage.getItem("selectedPlacess")) || [];
const storedPlaces = storedIDs.map((id) =>
	AVAILABLE_PLACES.find((place) => place.id === id),
);

function App() {
	// const modal = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const selectedPlace = useRef();
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [pickedPlaces, setPickedPlaces] = useState([...storedPlaces]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const sortedPlacesArray = sortPlacesByDistance(
				AVAILABLE_PLACES,
				position.coords.latitude,
				position.coords.longitude,
			);

			setAvailablePlaces(sortedPlacesArray);
		});
	}, [pickedPlaces]);

	function handleStartRemovePlace(id) {
		// modal.current.open();
		setIsOpen(true);

		selectedPlace.current = id;
	}

	function handleStopRemovePlace() {
		// modal.current.close();
		setIsOpen(false);
	}

	function handleSelectPlace(id) {
		setPickedPlaces((prevPickedPlaces) => {
			if (prevPickedPlaces.some((place) => place.id === id)) {
				return prevPickedPlaces;
			}
			const place = AVAILABLE_PLACES.find((place) => place.id === id);
			return [place, ...prevPickedPlaces];
		});
		const storedIds =
			JSON.parse(localStorage.getItem("selectedPlacess")) || [];

		if (storedIds.indexOf(id) == -1) {
			localStorage.setItem(
				"selectedPlacess",
				JSON.stringify([id, ...storedIds]),
			);
		}
	}

	function handleRemovePlace() {
		setPickedPlaces((prevPickedPlaces) =>
			prevPickedPlaces.filter(
				(place) => place.id !== selectedPlace.current,
			),
		);
		// modal.current.close();
		setIsOpen(false);

		const storedIds =
			JSON.parse(localStorage.getItem("selectedPlacess")) || [];

		localStorage.setItem("selectedPlacess", [
			JSON.stringify(
				storedIds.filter((id) => id !== selectedPlace.current),
			),
		]);
	}

	return (
		<>
			<Modal open={isOpen}>
				<DeleteConfirmation
					onCancel={handleStopRemovePlace}
					onConfirm={handleRemovePlace}
				/>
			</Modal>

			<header>
				<img src={logoImg} alt="Stylized globe" />
				<h1>PlacePicker</h1>
				<p>
					Create your personal collection of places you would like to
					visit or you have visited.
				</p>
			</header>
			<main>
				<Places
					title="I'd like to visit ..."
					fallbackText={
						"Select the places you would like to visit below."
					}
					places={pickedPlaces}
					onSelectPlace={handleStartRemovePlace}
				/>
				<Places
					title="Available Places"
					places={availablePlaces}
					fallbackText="Sorting the places by distance from your location..."
					onSelectPlace={handleSelectPlace}
				/>
			</main>
		</>
	);
}

export default App;
