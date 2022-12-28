import { useState, useEffect } from "react";
import { RobotModel } from "../../features/models/robot.model";
import { RobotsRepo } from "../../services/repository";
import { Creator } from "../creator/creator";
import { Robot } from "../robot/robot";

export function List() {
    const repo = new RobotsRepo();
    const initialState: Array<RobotModel> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = async () => {
        const data = await repo.load();
        setRobots(data);
    };

    useEffect(() => {
        handleLoad();
    }, []);

    const handleAdd = async function (robot: RobotModel) {
        setRobots([...robots, robot]);
        await repo.create(robot);
    };

    const handleUpdate = async function (robot: Partial<RobotModel>) {
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
        await repo.update(robot);
    };

    const handleDelete = async function (id: RobotModel["id"]) {
        setRobots(robots.filter((item) => item.id !== id));
        await repo.delete(id);
    };

    const handleFavourite = async function (robot: Partial<RobotModel>) {
        robot.isFavourite = !robot.isFavourite;
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
        await repo.update(robot);
    };

    return (
        <>
            <Creator handleAdd={handleAdd}></Creator>
            <ul className="robots-list">
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
