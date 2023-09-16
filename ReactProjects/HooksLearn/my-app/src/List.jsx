import React from "react"
import { useState, useEffect } from 'react'

const List = () => {
    const [nums, setNums] = useState([1, 3, ])

    const [DidMount, setDidMount] = useState(0);
    const [DidUpdate, setDidUpdate] = useState(0);
    const [WillUnmount, setWillUnmount] = useState(0);

    const AddNumber = () => {
        const randNum = Math.round(Math.random() * 10)
        setNums([...nums, randNum])
    }

    useEffect(() => {
        setDidMount(DidMount + 1)

        return () => {
            setWillUnmount(WillUnmount + 1)
        }
    }, [])

    useEffect(() => {
        setDidUpdate(DidUpdate + 1)    
    }, [nums])

    return(
    <>
        <ul>
            {
                nums.map((num, index) => (
                    <li key={index}>{num}</li>
                ))
            }
        </ul>

        <button onClick={AddNumber}>Добавить!</button>

        <div className="usf">
            <p>Did mount: {DidMount}</p>
            <p>Did update nums: {DidUpdate}</p>
            <p>Wil unmount: {WillUnmount}</p>
        </div>
    </>
    );
}

export default List;