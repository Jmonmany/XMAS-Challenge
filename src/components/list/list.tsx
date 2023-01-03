import { useEffect } from "react";
import { useRobots } from '../../hooks/use.robots';
import { Creator } from "../creator/creator";
import { Robot } from "../robot/robot";
import "./list.scss";
export function List() {
    const { robots, handleLoad, handleDelete, handleAdd, handleUpdate, handleFavourite } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <Creator handleAdd={handleAdd}></Creator>
            <ul className="robot-list">
                {robots.map((item) => {
                    return (
                        <Robot
                            key={item.id}
                            item={item}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                            handleFavourite={handleFavourite}
                        ></Robot>
                    );
                })}
            </ul>
        </>
    );
}
