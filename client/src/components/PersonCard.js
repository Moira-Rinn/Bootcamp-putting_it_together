import React, { Component } from 'react';
class PersonCard extends Component {
	render() {
		const { firstName, lastName, age, hairColor } = this.props;

		// const [personAge, setPersonAge] = useState({
		//   age: age
		// })

		// const birthday = (e) => {
		//   setPersonAge({
		//     age: personAge.age + 1
		//   })
		// }
		return (
			<div className='Person'>
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {age}</p>
				<p>Hair Color: {hairColor}</p>
				{/* <button className="btn btn-dark btn-outline-light" onClick={birthday}>Happy B-Day {firstName}!!!</button> */}
			</div>
		);
	}
}
export default PersonCard;
