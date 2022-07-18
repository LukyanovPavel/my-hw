import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = error ? s.error : s.someClass
    let disable = name ? false : true

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={disable} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
