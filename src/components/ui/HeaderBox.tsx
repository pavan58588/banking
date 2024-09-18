import { title } from "process";
import React from "react";

const HeaderBox = ({ type = "title", title, subtext, user}: HeaderBoxProps) => {
    return (
     <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
                 <span className="bankGradient" style={{ color: '#007bff' }}>&nbsp;{user}</span>
            )}
            </h1>
            <p className="header-box-subtext">{subtext}</p>
     </div>
    )
}

export default HeaderBox