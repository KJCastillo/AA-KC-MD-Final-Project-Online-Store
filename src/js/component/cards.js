import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { CartContext } from "./cartContext";
import { Context } from "../store/appContext";
import { CardProvider } from "./cartContext";

export const Cards = props => {
	const { store, actions } = useContext(Context);

	const addToCart = () => {
		const database = {
			name: props.name,
			price: props.price,
			id: props.id,
			image: props.image
		};

		actions.addToCart(database);
	};

	return (
		<div className="col-lg-4 col-md-6 col-12">
			<Card id={props.id} className="mb-3">
				<Card.Body>
					<hr />
					<div className="image">
						<Card.Img variant="top" src={props.image} />
					</div>
					<hr />
					<Card.Text className="itemTextCard">
						<b>{props.name}</b>
					</Card.Text>
					<Card.Text>
						<b>
							Price:
							{props.price}
						</b>
					</Card.Text>
					<Button className="bestselling-button" variant="success" onClick={addToCart}>
						<b>Add To Cart</b>
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

Cards.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.string,
	image: PropTypes.string
};
