import React, { useState } from "react";
import Dark from './dark.js';
import Light from './faq.js';
// import './faq.css';
// import './darkMode.css';
import './main.css';

function Main() {
    const [DarkMode, DarkmodeSelect] = useState(false)
    const [LighttMode, LightModeSelect] = useState(false)

    const ModeHandler = () => {
        DarkmodeSelect(true);
        LightModeSelect(false);
    }
    const SelectMode = () => {
        LightModeSelect(true);
        DarkmodeSelect(false);
    }

    return (
        <div>
                <div class="sub">
                    <p>Select Mode</p>
                    <form>
                        <div>
                            <label>
                                <input type="radio"
                                    name="type"
                                    onClick={SelectMode} />LighttMode
                            </label>

                            <label>
                                <input type="radio"
                                    name="type"
                                    onClick={ModeHandler} />DarkMode
                            </label>
                        </div>
                    </form>
                    {LighttMode && <Light />}
                    {DarkMode && <Dark />}
                </div>
            </div>
    );
}

export default Main;
