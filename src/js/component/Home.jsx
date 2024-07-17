import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			<div className="container flex-grow-1">
				<Jumbotron />
				<div className="row">
					<Card
						title="Card 1"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						buttonText="More"
					/>
					<Card
						title="Card 2"
						text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						buttonText="More"
					/>
					<Card
						title="Card 3"
						text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
						buttonText="More"
					/>
					<Card
						title="Card 4"
						text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						buttonText="More"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Home