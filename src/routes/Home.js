import React, { useState } from 'react';
import './Home.css'
function Home(){
    const [name1, setName1] = useState(" Woosub ");
    const [name2, setName2] = useState("...");
    const [Bname, setBname] = useState(false);
    const dropName = () => {
        setTimeout(setName1, 3100, " oosub ");
        setTimeout(setName2, 3100, "W");
        setTimeout(setName1, 3200, " osub ");
        setTimeout(setName2, 3200, "Wo");
        setTimeout(setName1, 3300, " sub ");
        setTimeout(setName2, 3300, "Woo");
        setTimeout(setName1, 3400, " ub ");
        setTimeout(setName2, 3400, "Woos");
        setTimeout(setName1, 3500, " b ");
        setTimeout(setName2, 3500, "Woosu");
        setTimeout(setName1, 3600, " ");
        setTimeout(setName2, 3600, "Woosub");
        setTimeout(setName2, 3700, "Woosub!");
        setTimeout(setName2, 4000, "우섭!");
        
    };
    const upName = () => {
        setBname(false);
        setName1(" Woosub ");
        setName2("...");
    };
    if (Bname === false){
        dropName();
        setBname(true);
    }
    return (
        <div className="container">
            <h1>Hello{name1}World!</h1>
            {Bname ? (
                <h2 onClick={upName}>I'm {name2}</h2>
            ) : (
                <>
                </>
            )}
        </div>
    );
}

export default Home;