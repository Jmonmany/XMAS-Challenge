import React, { useEffect } from "react";
import { useRobots } from "../../hooks/use.robots";

export function Counter() {
    
    const { robots, handleLoad } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const RobotNumber = React.createContext(robots)

    return (
        <>
            <RobotNumber.Provider value={robots}>
                <p>{robots.length} Robots available</p>
            </RobotNumber.Provider>
        </>
    );
}
