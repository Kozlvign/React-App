import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

const App = () => {
    const buttonText = { text: 'Click Me!' };
    const style = { backgroundColor: 'blue', color: 'white' }

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={style}>{buttonText.text}</button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);