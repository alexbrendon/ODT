import React from 'react';
import Country from './Country';


class DraftCountry extends React.Component {
	render(){
		const country = this.props.country;
		return (
			<div className="draftCountry">
				<li onClick={() => this.props.pickCountry(country)}>
					<Country country={country} />
				</li>
			</div>
		)
	}
}


export default DraftCountry;