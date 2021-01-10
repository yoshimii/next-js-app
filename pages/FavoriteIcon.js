import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from '../styles/Stash.module.css'

const FavoriteIcon = (props) => {
    const [ style, setStyle ] = useState();

const handleClick = () => {
    setStyle(!style)
}

console.log(props)
    return (
<span className={styles.favoriteicon} favorite onClick={handleClick}>
{props.favorite ? (<MdFavorite className={styles.fullhearticon}/>) : (<MdFavoriteBorder className={styles.emptyhearticon}/>) }
</span>
    )
}

export default FavoriteIcon;