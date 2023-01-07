import BounceLoader from "react-spinners/BounceLoader";

function Spinner() {
    return (
        <div className="spinner">
            <BounceLoader
                color="#FB8500"
                size={100}
            />
        </div>
    )
}

export default Spinner;