import { RobotModel } from "../../features/models/robot.model";
import { Edit } from "../edit/edit";
import "./robot.scss";
import { useState } from "react";

export function Robot({
    item,
    handleDelete,
    handleFavourite,
}: {
    item: RobotModel;
    handleDelete: (id: RobotModel["id"]) => void;
    handleFavourite: (robot: Partial<RobotModel>) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };
    const handleRobotUpdated = (formData : Partial<RobotModel>) => {
        handleClose();
        setUpdatedItem({...updatedItem,...formData});
    };

    const handleFavouriteClick = () => {
        handleFavourite(item);
    };
    
    const [show, setShow] = useState(false);
    const [updatedItem, setUpdatedItem] = useState(item);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <li className="item">
                <button className="item__delete material-symbols-outlined btn" onClick={handleClick}>cancel</button>
                <img src={updatedItem.imageUrl} alt={updatedItem.name}></img>
                <p>{updatedItem.name}</p>
                <div className="item__features">
                    <p>
                        Speed: <span>{updatedItem.speed}</span>
                    </p>
                    <p>
                        Endurance: <span>{updatedItem.endurance}</span>
                    </p>
                    <p>
                        Creation date: <span>{updatedItem.creationDate}</span>
                    </p>
                    <p>
                        Creator: <span>{updatedItem.creationUser}</span>
                    </p>
                </div>
                <div className="item__btn-group">
                    <button onClick={handleShow} className="material-symbols-outlined btn">edit</button>
                    <button onClick={handleFavouriteClick} className="material-symbols-outlined btn">
                        {updatedItem.isFavourite ? 'heart_minus' : 'heart_plus'}
                    </button>
                </div>
            </li>
            {show ? 
                <div className="modal">
                    <h3>Editing your Robot</h3>
                    <Edit robot={updatedItem} onRobotUpdated={handleRobotUpdated}></Edit>
                    <button onClick={handleClose} >Close</button>
                </div> : ''
            }
        </>
    );
}
