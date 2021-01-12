import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {

	constructor(props) {
		super(props);
	}

	renderDish(dish) {
		return(
			<Card>
				<CardImg width="100%" object src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}

	renderComments(comments) {

		const comms = comments.map((comm) => {
			return (
				<li  key={comm.id}>
					<p>{comm.comment}</p>
					<p>-- {comm.author} {comm.date}</p>
				</li>
			);
		});

		if (comments != null) {
			return (
				<div>
					<h4>Comments</h4>
					<ul className="list-unstyled">
						{comms}
					</ul>
				</div>
			);
		}
		else {
			return(
				<div></div>
			);
		}		
	}

	render() {

		if (this.props.dish != null) {
			return(
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(this.props.dish)}
					</div>
					<div className="col-12 col-md-5 m-1">
						{this.renderComments(this.props.dish.comments)}
					</div>
				</div>
			);
		}
		else {
			return(
				<div></div>
			);
		}
	}
}

export default DishDetail;