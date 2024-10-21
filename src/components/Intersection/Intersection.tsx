import React, { useEffect, useState } from "react";
import Light from "../Light";
import "./intersection.css";

// even indexes are green or red, else yellow
// ["n", "ny", "e", "ey", "s", "sy", "w", "wy"];

const yellowTimeSpan = 1000;

function calculateColorValue(signalState: number): "green" | "yellow" | "red" {
    return signalState === 2 ? "green" : signalState === 1 ? "yellow" : "red";
}

function getSignalStates(signalIndex: number) {
    let signalStatus = [0, 0, 0, 0];

    signalStatus[parseInt("" + signalIndex / 2)] = signalIndex % 2 === 0 ? 2 : 1;
    
    return (
        <>
            <Light direction="light-north" color={calculateColorValue(signalStatus[0])} />
            <Light direction="light-east" color={calculateColorValue(signalStatus[1])} />
            <Light direction="light-south" color={calculateColorValue(signalStatus[2])} />
            <Light direction="light-west" color={calculateColorValue(signalStatus[3])} />
        </>
    );
}

function Intersection() {
    const [signalIndex, setSignalIndex] = useState(0);
    const [greenTimeSpan, setGreenTimeSpan] = useState(5000);

    useEffect(() => {
        let timeoutId = setTimeout(
            () => {
                setSignalIndex((signalIndex) => (signalIndex + 1) % 8);
            },
            signalIndex % 2 === 0 ? greenTimeSpan : yellowTimeSpan
        );

        return () => {
            clearTimeout(timeoutId);
        };
    }, [signalIndex]);



    function handleGreenTimeSpanChange(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let inputSpan = parseInt((event.currentTarget.elements[0] as HTMLInputElement).value);

        if (inputSpan > 0) {
            setGreenTimeSpan(inputSpan * 1000);
        }
    }

    return (
        <>
            <h1>Intersection Simulator</h1>
            <div className="intersection-container">
                <div className="spacer"></div>
                <div className="road north"></div>
                <div className="spacer"></div>
                <div className="road west"></div>
                <div className="road intersection"></div>
                <div className="road east"></div>
                <div className="spacer"></div>
                <div className="road south"></div>
                <div className="spacer"></div>
                <div className="signal">{getSignalStates(signalIndex)}</div>
            </div>
            <form onSubmit={handleGreenTimeSpanChange}>
                <div>
                    <label htmlFor="green-time-span">Green Time Span (in Seconds)</label>
                    <input name="green-time-span" type="text" />
                </div>
                <button>Set Time</button>
            </form>
        </>
    );
}

export default Intersection;
