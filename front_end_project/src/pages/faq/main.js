import React, { useState } from "react";
import Dark from './dark.js';
import Light from './faq.js';
// import './faq.css';
// import './darkMode.css';
import './main.css';
import Screen from '../../components/app/Screen.js';

function Main () {
    const [DarkMode, DarkmodeSelect] = useState(false);
    const [LighttMode, LightModeSelect] = useState(false);

    const ModeHandler = () => {
        DarkmodeSelect(true);
        LightModeSelect(false);
    };
    const SelectMode = () => {
        LightModeSelect(true);
        DarkmodeSelect(false);
    };

    return (
        <Screen>
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
        </Screen>
    );
}

export default Main;
