import React from 'react'
function GreetingMultiline() {
    let isMorning = (new Date()).getHours() < 12;
    return isMorning
        ?
        (
            <div>
                <p>************ start of GreetingMultiline **********</p>
                <h3>Good Morning! </h3>
                <p>Showcasing Component with multi line </p>
                <p>You have 5 new messages </p>
                <p>************ End of GreetingMultiline **********</p>
            </div>

        )
        :
        (
            <div>
                 <p>************ start of GreetingMultiline **********</p>
                <h3>Good Evening! </h3>
                <p>Showcasing Component with multi line </p>
                <p>You have 5 new messages </p>
                <p>************ End of GreetingMultiline **********</p>
            </div>
        )
}
export default GreetingMultiline;