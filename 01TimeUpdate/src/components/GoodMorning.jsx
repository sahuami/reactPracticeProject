import React from 'react'

export default function goodMorning() {
    let currDate = new Date(2024, 5, 5,16)   // date format (year,month,date, hour,min....)
    currDate = currDate.getHours()
    let greeting = ""
    let cssStyle = {}
    if (currDate > 1 && currDate < 12) {
        greeting = "Good morning"
        cssStyle.color = "green"
    } else if (currDate >= 12 && currDate < 16) {
        greeting = "Good afternoon"
        cssStyle.color = "orange"
    }
    else if (currDate >= 16 && currDate < 19) {
        greeting = "Good evening"
        cssStyle.color = "blue"
    }
    else {
        greeting = "Goodnight"
        cssStyle.color = "black"

    }

    return (
        <>
            <div >
                <p>Hii Everyone , <span  style={cssStyle}>{greeting}</span></p>
            </div>

        </>
    )
}
