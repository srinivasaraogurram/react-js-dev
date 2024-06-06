import React from 'react'
function GreetingFragment() {
    let isMorning = (new Date()).getHours() < 12;
    let userMessage = isMorning ? <h3>Good Morning! </h3> : <h3>Good Evening! </h3>
    let noOfMessage = 5;
    return  <>
            <p>************ start of GreetingFragment **********</p>
            <h1>GreetingFragment</h1>
            <h3> {userMessage }</h3>
            <p>Showcasing Component with multi line </p>
            <p>You have {noOfMessage} new messages </p>
            <p>************ end of GreetingFragment **********</p>
     </>
}
export default GreetingFragment;