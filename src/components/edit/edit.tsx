import { useRobots } from "../../hooks/use.robots";
import "./edit.scss";
export function Edit() {
    
    const {handleUpdate} =
        useRobots();

    return (
        <section className="modal">
            <form className="modal__form">
                <div className="modal__div">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
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
