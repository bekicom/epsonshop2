import React, { useState, useEffect } from 'react';

function App() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(data));
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({
            input1,
            input2,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Input 1:</label>
                    <input
                        type="text"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                    />
                </div>
                <div>
                    <label>Input 2:</label>
                    <input
                        type="text"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </div>
                <button type="submit">add</button>
            </form>
            <div>
                <h2>Kaydedilen Veriler:</h2>
                <p>Input 1: {data.input1}</p>
                <p>Input 2: {data.input2}</p>
            </div>
        </div>
    );
}

export default App;
