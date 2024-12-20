import React from "react";

export function Personal() {
    return <div className="form-container">
        <h2>Personal Information</h2>
        <form >
            <input type="text" placeholder="Enter First Name" />
            <input type="text" placeholder="Enter Last Name" />
            <input type="text" placeholder="Enter Your Mobile" />
        </form>
    </div>
}

export function Signup() {
    return <div className="form-container">
        <h2>Registration Form</h2>
        <form >
            <input type="email" placeholder="Enter Your Email" />
            <input type="password" placeholder="Enter Your Password" />
            <input type="password" placeholder="Comfirm Yout Password" />
        </form>
    </div>
}
export function SocialLinks() {
    return <div className="form-container">
        <h2>Social Links</h2>
        <form >
            <input type="text" placeholder="Facebook URL" />
            <input type="text" placeholder="Twitter URL" />
            <input type="text" placeholder="Pinterest URL" />
        </form>
    </div>
}