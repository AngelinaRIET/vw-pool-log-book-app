import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <>
                <div>Home Component</div>
                <div>
                    <Link to="/booking">Booking</Link>
                </div>
            </>
        );
    }
}

export default Home;
