import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>
            <div className={s.messageArea}>
                <div className={s.wrap1}>
                    <div className={s.wrap2}>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.text}>{props.message}</div>
                    </div>
                    <div     className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
