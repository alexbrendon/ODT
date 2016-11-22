import React from 'react';
import Country from './Country';


class CountryItem extends React.Component {
	render(){
		const country = this.props.country;

		return (
			<li onClick={() => this.props.pickCountry(country)}>
				<Country country={country} />
			</li>
		)
	}
}


class DraftCountry extends React.Component {
	render(){
		const countryKeys = Object.keys(this.props.countries);
		if( this.props.draft){
			return (
				<ul className="countries">
					{
						countryKeys.map( (key) => <CountryItem key={key} pickCountry={this.props.pickCountry} country={this.props.countries[key]} /> )
					}
				</ul>
			)
		}

		return null;
	}
}


export default DraftCountry;