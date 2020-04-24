import React, { Component } from 'react';

export default class Cities extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		const cities=[
			{ _id:1, name: 'LA',image: "#",description : "test description",posts : [],},
			{ _id:2, name: 'SF',image: "#",description : "test description",posts : [],},
			{ _id:2, name: 'LA',image: "#",description : "test description",posts : [],},

		]



		return (
			<>
			{cities.map((city)=>(
				
					<div class="container">
					  <div class="row gamerow" id="#">
					    <div class="col-sm">
					      <img src={city.image} class="img-thumbnail" alt={city.name} />
					    </div>
					    <div class="col-sm">
					     <h2> <a className="nav-link" href="/city/">{city.name}</a></h2>
					     
					     <h5>descroption: {city.description} </h5>
					    </div>
					    <div class="col-sm">
					      Has {city.posts.length} {city.posts.length === 1 ? ' review' : ' reviews'} 
					    </div>
					  </div>
					</div>
				

				))}
			</>
		);
	}
}
