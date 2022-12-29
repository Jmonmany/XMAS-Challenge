import { RobotModel } from "../../features/models/robot.model";
import "./robot.scss";
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
        <li className="item">
            <button className="item__delete material-symbols-outlined btn" onClick={handleClick}>cancel</button>
            <img src={item.imageUrl} alt={item.name}></img>
            <p>{item.name}</p>
            <div className="item__features">
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
            <div className="item__btn-group">
                <button onClick={handleUpdateClick} className="material-symbols-outlined btn">edit</button>
                <button onClick={handleFavouriteClick} className="material-symbols-outlined btn">
                    {item.isFavourite ? 'heart_minus' : 'heart_plus'}
                </button>
            </div>
        </li>
    );
}
