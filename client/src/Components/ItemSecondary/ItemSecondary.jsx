import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useStyles } from '../SecondaryNavigation/SecondaryNavigation.styles'
import ModalUsers from '../ModalUsers/ModalUsers';
import { useContext } from 'react';
import BrowseContext from '../../Contexts/BrowseContext';

const ItemSecondary = ({ name, id }) => {
	const classes = useStyles();

	const { setIsVisibleModalUsers, isVisibleModalUsers } = useContext(BrowseContext);

	return (
		<span className={classes.navElement} onClick={() => setIsVisibleModalUsers(!isVisibleModalUsers)}>
			<div className={(
				id === 1 ? classes.searchBox : undefined,
				id === 2 ? classes.profileAvatar : undefined
			)}>
				{name === 'FaSearch' && <FaSearch className={classes.faSearch} />}
				{name === 'IoMdArrowDropdown' && (
					<>
						<img src="" className={classes.imageAvatar} alt="" />
						<IoMdArrowDropdown className={isVisibleModalUsers ? `${classes.rotate} ${classes.iconDrop}` : classes.iconDrop} />
						<ModalUsers />
					</>
				)}
			</div>
		</span>
	)
}

export default ItemSecondary