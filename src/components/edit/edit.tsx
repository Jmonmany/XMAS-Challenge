import { SyntheticEvent, useState } from "react";
import { RobotModel } from "../../features/models/robot.model";
import { useRobots } from "../../hooks/use.robots";
import "./edit.scss";
export function Edit({robot}: {robot: RobotModel}) {
    const initialFormData: Partial<RobotModel> = {
        id: robot.id,
        name: robot.name,
        speed: robot.speed,
        endurance: robot.endurance,
        creationUser: robot.creationUser,
    };
    const {handleUpdate} =
        useRobots();
    
    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault()
        handleUpdate(formData)
    };
    
    
    

    

    return (
        <section className="modal">
            <form className="modal__form" onSubmit={handleSubmit}>
                <div className="modal__div">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onInput={handleInput}
                        placeholder="Write a name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="speed">Speed</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        name="speed"
                        id="speed"
                        value={formData.speed}
                        onInput={handleInput}
                        placeholder="between 0-10"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="endurance">Endurance</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        name="endurance"
                        id="endurance"
                        value={formData.endurance}
                        onInput={handleInput}
                        placeholder="between 0-10"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="creationUser">User</label>
                    <input
                        type="text"
                        name="creationUser"
                        id="creationUser"
                        value={formData.creationUser}
                        onInput={handleInput}
                        placeholder="Write your name"
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="modal__btn">Edit</button>
                </div>
            </form>
        </section>
    );
}
