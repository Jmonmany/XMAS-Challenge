import { useEffect } from "react";
import { Robot } from "../../../components/robot/robot";
import { useRobots } from "../../../hooks/use.robots";

export default function Bookmarks () {
    const { robots, handleLoad, handleDelete, handleFavourite } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    
    return (
        <>
            <h2>Bookmarks</h2>
            <ul className="robot-list">
                {robots
                .filter((item) => item.isFavourite)
                .map((item) => {
                    return (
                    <Robot
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></Robot>
                    );
                })}
            </ul>
        </>
        );
}
