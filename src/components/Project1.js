import React, { useState } from 'react';
import './Project1.css'
function Project1() {
    const [Run, setRun] = useState(true);
    const [Oh, setOh] = useState("오");
    const [My, setMy] = useState("마이");
    const [Mirror, setMirror] = useState("미러");
    const toEnglish = () => {
        setTimeout(setMirror, 2200, "미러|");
        setTimeout(setMirror, 2300, "미|");
        setTimeout(setMirror, 2400, "");
        setTimeout(setMy, 2400, "마이|");
        setTimeout(setMy, 2500, "마|");
        setTimeout(setMy, 2600, "");
        setTimeout(setOh, 2600, "오|");
        setTimeout(setOh, 2700, "|");
        setTimeout(setOh, 2800, "");
        setTimeout(setOh, 2900, "|");
        setTimeout(setOh, 3000, "Oh|");
        setTimeout(setOh, 3200, "Oh ");
        setTimeout(setMy, 3200, "My|");
        setTimeout(setMy, 3400, "My ");
        setTimeout(setMirror, 3400, "Mirror|");
        setTimeout(setMirror, 3600, "Mirror");
    }
    if (Run === true){
        toEnglish();
        setRun(false);
    }
    return(
        <div className="OMM">
            <h2>
                {Oh}{My}{Mirror} 프로젝트를 소개합니다.
            </h2>
        </div>
    );
}

export default Project1;