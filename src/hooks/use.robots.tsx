import { useCallback, useMemo, useState } from 'react';
import { RobotsRepo } from '../services/repository';
import { RobotModel } from '../features/models/robot.model'

export type UseRobots = {
    robots: Array<RobotModel>;
    handleLoad: () => Promise<void>;
    handleAdd: (robotData: RobotModel) => Promise<void>;
    handleDelete: (id: RobotModel['id']) => Promise<void>;
    handleUpdate: (robot: Partial<RobotModel>) => Promise<void>;
    handleFavourite: (robot: Partial<RobotModel>) => Promise<void>;
};
export function useRobots(): UseRobots {
    const repo = useMemo(() => new RobotsRepo(), []);

    const initialState: Array<RobotModel> = [];
    const [robots, setRobots] = useState(initialState);

    const handleLoad = useCallback(async () => {
        const robotList = await repo.load();
        setRobots(robotList);
    }, [repo]);

    const handleAdd = async (robot: RobotModel) => {
        setRobots([...robots, robot]);        
        await repo.create(robot);
    };

    const handleUpdate = async (robot: Partial<RobotModel>) => {
        const updatedRobot = await repo.update(robot); 
        setRobots(
            robots.map((item) =>
                item.id === updatedRobot.id ? updatedRobot : item
            )
        );
        /**  return could be used for knowing that the robot was updated or not.
        return await repo.update(robot);
        */
    };

    const handleDelete = async (id: RobotModel['id']) => {
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

    return {
        robots,
        handleLoad,
        handleAdd,
        handleDelete,
        handleUpdate,
        handleFavourite,
    };
}
