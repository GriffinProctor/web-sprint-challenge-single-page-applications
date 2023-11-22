import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div  style={{ margin: '20px' }}>
            <h1>Bloomtech Eats</h1>
            <Link to='/pizza' id='order-pizza'>
                Order Pizza
            </Link>
            <div>
                <img src="https://preview.redd.it/zq9nkbjqibx31.jpg?auto=webp&s=34ea224370860ab298fe9a777ca5fa56b7062941"
                    alt="Pepperoni Pizza"
                    style={{ marginTop: '20px', maxWidth: '50%' }} />
            </div>
        </div>
    )
}

export default HomePage