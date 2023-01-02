import { SyntheticEvent, useState } from "react";
import { RobotClass, RobotModel } from "../../features/models/robot.model";
import "./creator.scss";
export function Creator({ handleAdd }: { handleAdd: (item: RobotModel) => void }) {
    const initialFormData: Partial<RobotModel> = {
        name: '',
        imageUrl: '',
        speed: '',
        endurance: '',
        creationUser: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        formData.imageUrl = "https://robohash.org/" + formData.name + ".png";
        handleAdd(
            new RobotClass(
                formData.name as string,
                formData.imageUrl ? formData.imageUrl : "",
                formData.speed as string,
                formData.endurance as string,
                new Date(),
                formData.creationUser as string,
                false
            )
        );
        setFormData(initialFormData);
    };

    return (
        <section className="creator">
            <h3>Roboter Generator</h3>
            <form className="creator__form" onSubmit={handleSubmit}>
                <div className="creator__div">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Write a name"
                        value={formData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="creator__div">
                    <label htmlFor="speed">Speed</label>
                    <input
                        type="text"
                        name="speed"
                        id="speed"
                        placeholder="between 0-10"
                        value={formData.speed}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="creator__div">
                    <label htmlFor="endurance">Endurance</label>
                    <input
                        type="text"
                        name="endurance"
                        id="endurance"
                        placeholder="between 0-10"
                        value={formData.endurance}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="creator__div">
                    <label htmlFor="creationUser">User</label>
                    <input
                        type="text"
                        name="creationUser"
                        id="creationUser"
                        placeholder="Write your name"
                        value={formData.creationUser}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="creator__btn">CREATE</button>
                </div>
            </form>
        </section>
    );
}
