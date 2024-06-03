import React from 'react'
function GreetingMultiline() {
    let isMorning = (new Date()).getHours() < 12;
    return isMorning
        ?
        (
            <div>
                <h3>Good Morning! </h3>
                <p>You have 5 new messages </p>
            </div>

        )
        :
        (
            <div>
                <h3>Good Evening! </h3>
                <p>You have 5 new messages </p>
            </div>
        )
}
export default GreetingMultiline;