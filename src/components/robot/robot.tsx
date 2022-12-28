import { RobotModel } from "../../features/models/robot.model";

export function Robot({
    item,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    item: RobotModel;
    handleUpdate: (robot: Partial<RobotModel>) => void;
    handleDelete: (id: RobotModel["id"]) => void;
    handleFavourite: (robot: Partial<RobotModel>) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };
    const handleUpdateClick = () => {
        handleUpdate(item);
    };
    const handleFavouriteClick = () => {
        handleFavourite(item);
    };
    return (
        <li className="robot-item">
            <button className="remove-btn" onClick={handleClick}>
                <span className="material-symbols-outlined">cancel</span>
            </button>
            <img src={item.imageUrl} alt={item.name}></img>
            <p>{item.name}</p>
            <div className="robot-features">
                <p>
                    Speed: <span>{item.speed}</span>
                </p>
                <p>
                    Endurance: <span>{item.endurance}</span>
                </p>
                <p>
                    Creation date: <span>{item.creationDate.toDateString()}</span>
                </p>
                <p>
                    Creator: <span>{item.creationUser}</span>
                </p>
            </div>
            <div className="buttons-group">
                <button onClick={handleUpdateClick}>
                    <span className="material-symbols-outlined">
                        edit_square
                    </span>
                </button>

                <button>
                    <span className="material-symbols-outlined">smart_toy</span>
                </button>

                <button onClick={handleFavouriteClick}>
                    {item.isFavourite ? (
                        <span className="material-symbols-outlined">
                            heart_minus
                        </span>
                    ) : (
                        <span className="material-symbols-outlined">
                            heart_plus
                        </span>
                    )}
                </button>
            </div>
        </li>
    );
}
