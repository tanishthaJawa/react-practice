import React from 'react'

const Greet = ({ name, age }) => {
    return (
        <h1>
            Hello {name} ! <br />
            Age: {age}
        </h1>
    );
}

export default Greet;