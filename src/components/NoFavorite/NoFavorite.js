import { Link } from "react-router-dom";

function NoFavorite( { modalStatus, setModalStatus } ) {

    const handleModal = () => {
        setModalStatus(!modalStatus);
    }

    return (
        <div className="no-favorite">
            <img src={process.env.PUBLIC_URL + "/assets/images/oh.png"} alt="Título" />
            <h2>Parece que aún no hay patitos en tu lista de favoritos</h2>
            <Link to = {"/products"} onClick={handleModal}>Ver todos los patitos</Link>
        </div>
    )
}

export default NoFavorite;