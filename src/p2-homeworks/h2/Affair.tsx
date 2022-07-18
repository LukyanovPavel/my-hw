import React from 'react'
import s from "./Affairs.module.css"
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    const changeColor = () => {
        if (props.affair.priority === 'low') return s.low
        if (props.affair.priority === 'high') return s.high
        if (props.affair.priority === 'middle') return s.middle
    }


    return (
        <div className={s.affair}>
            <div>{props.affair.name}</div>
            <div className={changeColor()}>{`[${props.affair.priority}]`}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
