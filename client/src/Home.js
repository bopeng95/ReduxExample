import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandom, getPic } from './action.js';
import './css/main.css';

const Dogs = (props) => (
	<div className="dog-buttons">
		<button key="-1" className="dog button-primary" onClick={props.getRand}>{props.rand}</button>
		{props.dogs.map((d, ind) =>
			<button key={ind} className="dog" onClick={()=>props.func(d)}>{d}</button>
		)}
	</div>
)
const Images = (props) => (
	<div className="dog-images">
		{props.images.map((im, ind) =>
			<img key={ind} src={im} className="image" alt=""/>
		)}
	</div>
)

class Home extends Component {

	constructor(props) {
		super(props);
		this.getDog = this.getDog.bind(this);
		this.getRandom = this.getRandom.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(getRandom());
	}

	getDog = (dogName) => { this.props.dispatch(getPic(dogName)); };
	getRandom = () => { this.props.dispatch(getRandom()); };

	render() {
		return (
			<div>
				<Dogs dogs={this.props.dogs} rand={this.props.rand} func={this.getDog} getRand={this.getRandom}/><br/>
				<Images images={this.props.images}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	rand: state.rand,
	dogs: state.dogs,
	images: state.images
});
export default connect(mapStateToProps)(Home);
