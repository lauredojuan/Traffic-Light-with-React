import React from "react";
import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";

function Counter() {
	return (
		<div className="container-fluid">
			<div className="box d-flex justify-content-center mt-3">
				<div className="d-flex flex-column">
					<div onClick={onFunction} className="red m-2" />
					<div className="yellow m-2 lightOn" />
					<div className="green m-2" />
				</div>
			</div>
		</div>
	);
}

// let isOn = true;

function onFunction(event) {
	console.log(event);

	// if (event.target.color == "red")
	// ${isOn ? "lightOn" : ""}

	ReactDOM.render(
		<Counter />,
		// 		digitOne={one}

		document.querySelector("#app")
	);
}
ReactDOM.render(
	<Counter />,
	// 		digitOne={one}

	document.querySelector("#app")
);

// ----------------------------

// function SimpleCounter(props) {
// 	return (
// 		<div className="bigCounter">
// 			<div className="calendar">
// 				<i className="far fa-clock" />
// 			</div>
// 			<div className="four">{props.digitFour % 10}</div>
// 			<div className="three">{props.digitThree % 10}</div>
// 			<div className="two">{props.digitTwo % 10}</div>
// 			<div className="one">{props.digitOne % 10}</div>
// 		</div>
// 	);
// }
// SimpleCounter.propTypes = {
// 	digitFour: PropTypes.number,
// 	digitThree: PropTypes.number,
// 	digitTwo: PropTypes.number,
// 	digitOne: PropTypes.number
// };

// let counter = 0;

// setInterval(function() {
// 	const four = Math.floor(counter / 1000);
// 	const three = Math.floor(counter / 100);
// 	const two = Math.floor(counter / 10);
// 	const one = Math.floor(counter / 1);
// 	console.log(four, three, two, one);
// 	//render your react application
// 	counter++;
// 	ReactDOM.render(
// 		<SimpleCounter
// 			digitOne={one}
// 			digitTwo={two}
// 			digitThree={three}
// 			digitFour={four}
// 		/>,
// 		document.querySelector("#app")
// 	);
// }, 1000);
