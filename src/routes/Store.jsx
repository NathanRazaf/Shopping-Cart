import { useParams } from "react-router-dom";

const Store = () => {
    const { category } = useParams();

    return (
        <div>
            <h1>Hello from profile page!</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
        </div>
    );
};

export default Store;