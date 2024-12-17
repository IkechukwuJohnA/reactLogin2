import React from "react";


const message = ["Learn React", " Apply For Jobs", "Invest Your Income"]


function MultiSteps() {
    return <Multi/>
}

function Multi() {
    return(
        <div className="container">
            <div className="progress_container">
                <div className="progress"></div>
                <div className="circle active">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
            </div>
            <div className="content">
                <h2>Learn React JS</h2>
            </div>
            <div className="btns">
                <button className="btn disabled">Prev</button>
                <button className="btn">Next</button>
            </div>
        </div>
    )
}

export default MultiSteps;