import React, { Component } from 'react';
class PersonCard extends Component {
	constructor(props) {
		super(props);
		const { firstName, lastName, age, hairColor } = props;
		this.state = {
			age: this.props.age,
		};
	}
	birthday = () => {
		let plusOne = this.state.age;
		plusOne += 1; //created to get rid of the warning about mutating state directly...
		this.setState({ age: plusOne });
	};
	render() {
		return (
			<div className='Person'>
				<h1>
					{this.props.lastName}, {this.props.firstName}
				</h1>
				<p>Age: {this.state.age}</p>
				<p>Hair Color: {this.props.hairColor}</p>
				<button
					className='btn btn-dark btn-outline-light'
					onClick={this.birthday}>
					Happy B-Day {this.props.firstName}!!!
				</button>
			</div>
		);
	}
}
export default PersonCard;
