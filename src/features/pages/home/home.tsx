import { Link } from "react-router-dom";
import { Counter } from "../../../components/counter/counter";

export default function Home () {
    return <>
        <div className="home-container" role="main">
            <Counter></Counter>
            <Link to={"/robots"} className="material-symbols-outlined btn" title="Generate">precision_manufacturing</Link>
        </div>
    </>
}

