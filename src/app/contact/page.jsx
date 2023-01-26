"use client";
import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
	const [nom, setNom] = useState("");
	const [error, setError] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "post",
			url: "/api/index.php",
			headers: { "content-type": "application/json" },
			data: nom,
		})
			.then((result) => {
				if (result.data.sent) {
					console.log("sent");
					setError(result.data);
				}
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	return (
		<>
			<h1 className="text-3xl text-center">This is the contact page</h1>
			<form className="text-center mt-6">
				<input
					type="text"
					name="name"
					placeholder="Your name"
					onChange={(e) => setNom(e.value)}
				/>
				<br />
				<br />

				<input
					type="submit"
					className="button rounded border bg-purple-500  uppercase px-5 py-2"
					value="Send"
					onClick={(e) => handleClick(e)}
				/>
			</form>
		</>
	);
};

export default Contact;
