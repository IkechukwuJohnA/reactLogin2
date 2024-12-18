import React, { useState } from "react";
import Progress from "./Progress";
import { Personal, Signup, SocialLinks } from "./Forms";


const message = ["Learn React", " Apply For Jobs", "Invest Your Income"]


function MultiSteps() {
    return <Multi />;
}


function Multi() {
    const [step, setStep] = useState(1);
    const totalSteps = 3

    function handlePrev() {
        if (step > 1) setStep((step) => step - 1);
    }

    function handleNext() {
        if (step < 3) setStep((step) => step + 1);
    }
    
    const renderSteps = ()=> {
        switch(step) {
            case 1: return <Personal />
            case 2: return <Signup />
            case 3: return <SocialLinks />
            default: return null;

        }
    }

    return(
        <div className="container">
            <div className="progress_container">
                <Progress totalSteps={totalSteps} step={step} className="progress active"/>
                <div className={`${step >= 1 ? "circle active" : "circle"}`}>1</div>
                <div className={`${step >= 2 ? "circle active" : "circle"}`}>2</div>
                <div className={`${step >= 3 ? "circle active" : "circle"}`} /*OR {`${step === totalSteps ? "circle active" : "circle"}`}*/>3</div>   
            </div>
            
            <div className="content">
                {/*<Message step = {step} />*/}
                {renderSteps()}
            </div>
           
           
            <div className="btns">
                <button className={`${step <= 1 ? "disabled" : "btn"}`} onClick={handlePrev}>Prev</button>
                <button className={`${step >= 3 ? "disabled" : "btn"}`} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

function Message({ step }) {
    //return <h2>{message[step - 1]}</h2>
}

export default MultiSteps;