import { RobotModel } from "../../features/models/robot.model";
import { Edit } from "../edit/edit";
import "./robot.scss";
import { useState } from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";

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
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    const handleClose = () =>setShow(false)

    return (
        <>
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
                        Creation date: <span>{item.creationDate}</span>
                    </p>
                    <p>
                        Creator: <span>{item.creationUser}</span>
                    </p>
                </div>
                <div className="item__btn-group">
                    <button onClick={handleShow} className="material-symbols-outlined btn">edit</button>
                    <button onClick={handleFavouriteClick} className="material-symbols-outlined btn">
                        {item.isFavourite ? 'heart_minus' : 'heart_plus'}
                    </button>
                </div>
            </li>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Editing your robot
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Edit></Edit>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
