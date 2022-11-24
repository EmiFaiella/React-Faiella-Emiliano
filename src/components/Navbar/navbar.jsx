import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="https://png.pngtree.com/template/20191017/ourlarge/pngtree-monoline-f-letter-logo-vector-designs-image_320521.jpg" className="carrito" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
            <Categorias/>
        </div>
            <CartWidget/>
  </div>
</nav>

    );
}

export default Navbar;