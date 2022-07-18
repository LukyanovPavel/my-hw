import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from "./Header.module.css"

function Header() {

    let [trigger, setTrigger] = useState(false)

    const floatingMenuHandler = () => {
        setTrigger(!trigger)
    }

    let shift = trigger ? styles.shift_menu : styles.menu

    return (

        <div className={shift}>
            <div>
                <NavLink style={{textDecoration: 'none', color: "inherit"}} to={PATH.PRE_JUNIOR}><span
                    className={styles.links}>PreJunior</span></NavLink>
                <NavLink style={{textDecoration: 'none', color: "inherit"}} to={PATH.JUNIOR}><span
                    className={styles.links}>Junior</span></NavLink>
                <NavLink style={{textDecoration: 'none', color: "inherit"}} to={PATH.JUNIOR_PLUS}><span
                    className={styles.links}>Junior+</span></NavLink>
            </div>
            <button onClick={floatingMenuHandler}>x</button>
        </div>
    )
}

export default Header
