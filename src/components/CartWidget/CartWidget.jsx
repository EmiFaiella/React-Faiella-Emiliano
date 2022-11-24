import "./CartWidget.css"
const CartWidget = () => {

    return (
       
            <ul className="navbar-nav me-auto">

                <li className="nav-link">

                    <button className="btn btn-dark"><img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" alt="icon" className="carrito"  /> </button>

                </li>

                <p>0</p>
                
            </ul>
    
    );
}

export default CartWidget;