import React from 'react';
import { useStyles } from './ItemUser.styles';
import { Link } from 'react-router-dom';

const ItemUser = (image, name, role) => {

	const classes = useStyles();

	return (
	
			<span>{name}</span>
	
	)
}

export default ItemUser;