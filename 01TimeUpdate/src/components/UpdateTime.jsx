import React, { useState } from 'react'

export default function updateTime() {
    let newTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(newTime)

    const currTime = () => {
        let currentTime = new Date().toLocaleTimeString()
        setTime(currentTime)
    }

    setInterval(currTime, 1000);

    return (
        <div>
            <h2>And current time is {time}</h2>
            {/* jb hum button click kr rahe the toh tabhi time update ho rah tha islye hum time ko live dikhane ke liye setInterval ka use krege */}
            {/* <button onClick={currTime}>TimeRefresing</button> */}
        </div>
    )
}
