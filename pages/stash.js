import React, { useEffect, useState } from 'react';
import FavoriteIcon from './FavoriteIcon';
import { MdEdit, MdAdd } from "react-icons/md";
import styles from '../styles/Stash.module.css'
import api from './api';
const HomeScreen = (props) => {
    const [patientList, setPatientList] = useState([]);
    
    useEffect(() => {
        let token = localStorage.getItem('token');
        api.get("stash", {
            headers: {
                'Authorization': token }
        })
        .then(res => setPatientList(res.data))
        .catch(e => e);
    }, [])

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        props.history.push('/newCategory')
    }

    return(
        <main className={styles.main}>
            {patientList.map((s, index) => (
                <div className={styles.productlistitem} key={index}>
                    <h2 className={styles.productname} aria-label={`Product name: ${s.strain_name}`}>
                        {s.strain_name}
                    </h2>
                    <span className={styles.addtocategoryicon} aria-label="Categorize this item"><MdAdd stroke="#017C6B" id="add-icon" fill="#017C6B" title="Add this item to a category" aria-labelledby="add-icon" desc="plus symbol" /></span>
                    <span className={styles.editproductinfoicon} aria-label="Edit this item's information and or notes"><MdEdit title="Edit this item's information and or notes"/></span>
                    <span className={styles.favoriteicon} aria-label="Add this item to your favorites"><FavoriteIcon favorite={true} title="Favorite this item" desc="heart symbol"/></span>
                </div>
            ))}
            <button className={styles.addproductbutton} onClick={handleAddNewProduct} title="Add new product"><MdAdd fontSize="2rem"/></button>
        </main>
    );
};

export default HomeScreen;