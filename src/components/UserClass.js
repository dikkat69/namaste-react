import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {name, location, age} = this.props;
        return (
            <div className="User-Card">
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>{age}</h4>
            </div>
        );
    }
}

export default UserClass;