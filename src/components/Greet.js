import React from 'react'

const Greet = ({ name, age, children }) => {
    return (
        <div>
            <h1>
                Hello {name} ! <br />
                Age: {age}
            </h1>
            {children}
        </div>

    );
}

export default Greet;