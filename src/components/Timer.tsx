"use client";
import { useEffect, useState, useRef } from "react";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import { RippleButton } from "@/components/magicui/ripple-button";
import Counter from "@/components/magicui/Counter";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipForwardBtnFill } from "react-icons/bs";


function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
}
type TimerState = "ready" | "focus" | "focus-ended" | "break";

export default function Timer() {

    const [progressValue, setprogressValue] = useState(0);
    const [timerState, setTimerState] = useState<TimerState>("ready");
    const [focusSeconds, setFocusSeconds] = useState(0);
    const [breakSeconds, setBreakSeconds] = useState(0);
    const [breakMax, setBreakMax] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    // Start focus timer
    const startFocus = () => {
        setTimerState("focus");
        setFocusSeconds(0);
    };

    // Stop focus and show break options
    const stopFocus = () => {
        if (timerState === "focus") {
            setTimerState("focus-ended");
            const breakTime = Math.ceil(focusSeconds / 5);
            // setBreakMax(breakTime);
            // setBreakSeconds(breakTime);
            setBreakMax(focusSeconds);
            setBreakSeconds(focusSeconds); 
        } else if (timerState === "break") {
            reset();
        }
    };

    // Start break
    const startBreak = () => {
        setTimerState("break");
    };

    // Skip break
    const skipBreak = () => {
        reset();
    };

    const addTwenty = () => {
        setFocusSeconds((s) => s + 20);
    };

    // Reset to initial state
    const reset = () => {
        setTimerState("ready");
        setFocusSeconds(0);
        setBreakSeconds(0);
        setBreakMax(0);
    };

    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        if (timerState === "focus") {
            intervalRef.current = setInterval(() => {
                setFocusSeconds((s) => s + 1);
            }, 1000);
        } else if (timerState === "break") {
            intervalRef.current = setInterval(() => {
                setBreakSeconds((s) => {
                    if (s <= 1) {
                        clearInterval(intervalRef.current!);
                        setTimeout(reset, 500);
                        return 0;
                    }
                    return s - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [timerState]);

    const { minutes, seconds } =
        timerState === "break"
            ? formatTime(breakSeconds)
            : formatTime(focusSeconds);





    return (
        <>
            <div className="flex flex-col gap-9 items-center justify-center  h-full" >
                <AnimatedCircularProgressBar
                    max={breakMax === 0 ? 1 : breakMax}
                    min={0}
                    value={breakSeconds}
                    gaugePrimaryColor="rgb(221, 192, 255)"
                    gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                    className="size-72"
                >


                    <div className="flex items-center justify-center text-black dark:text-white">
                        <Counter
                            value={minutes}
                            places={[10, 1]}
                            fontSize={50}
                            gradientFrom="transparent"
                            
                        />
                        <div className="text-6xl font-bold mx-0 pb-3 text-black dark:text-white" >:</div>
                        <Counter
                            value={seconds}
                            places={[10, 1]}
                            fontSize={50}
                            gradientFrom="transparent"
                            
                        />
                    </div>

                </AnimatedCircularProgressBar>



                <div className="flex gap-6 justify-center ">

                    {timerState === "ready" && (
                        <>
                            <a data-tooltip-id="my-tooltip-diff" data-tooltip-content="Start Focus">
                                <RippleButton className="p-4 size-16" rippleColor="#ADD8E6" onClick={startFocus}>
                                    <FaPlay />
                                </RippleButton>
                            </a>
                            <Tooltip id="my-tooltip-diff" className="tooltip-box" classNameArrow="blue" place="bottom" />
                        </>

                    )}

                    {timerState === "focus" && (

                        <>
                            <a data-tooltip-id="my-tooltip-diff" data-tooltip-content="+20 seconds">
                                <RippleButton className="p-4 size-16" rippleColor="#ADD8E6" onClick={addTwenty}>+20</RippleButton>
                            </a>
                            <Tooltip id="my-tooltip-diff" className="tooltip-box" classNameArrow="blue" place="bottom" />
                             <a data-tooltip-id="my-tooltip-diff" data-tooltip-content="Stop">
                            <RippleButton className="p-4 size-16" rippleColor="#ADD8E6" onClick={stopFocus} > <FaStop /> </RippleButton>
                            </a>
                            <Tooltip id="my-tooltip-diff" className="tooltip-box" classNameArrow="blue" place="bottom" />

                        </>
                    )}


                    {timerState === "focus-ended" && (
                        <>
                            <a data-tooltip-id="my-tooltip-diff" data-tooltip-content="Start break">
                                <RippleButton className="p-4 size-16" rippleColor="#ADD8E6" onClick={startBreak} > <FaPlay /> </RippleButton>
                            </a>
                            <Tooltip id="my-tooltip-diff" className="tooltip-box" classNameArrow="blue" place="bottom" />
                            <a data-tooltip-id="my-tooltip-diff" data-tooltip-content="Skip Break">
                                <RippleButton className="p-4 size-16" rippleColor="#ADD8E6" onClick={skipBreak} ><BsFillSkipForwardFill /> </RippleButton>
                            </a>
                            <Tooltip id="my-tooltip-diff" className="tooltip-box" classNameArrow="blue" place="bottom" />

                        </>
                    )}


                    {timerState === "break" && (
                        <>
                        <a data-tooltip-id="my-tooltip-diff" data-tooltip-content="Stop Break">
                        <RippleButton className="p-4 size-16" onClick={stopFocus} ><FaStop /> </RippleButton>
                        </a>
                            <Tooltip id="my-tooltip-diff" className="tooltip-box" classNameArrow="blue" place="bottom" />
                        </>

                    )}
                </div>
            </div>
        </>
    )
}