import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button 
                    onClick={() => setValue((v) => v + 1)}>+</button>
                <button 
                    onClick={() => setVisible(false)}>hide</button>
                {/* <HookCounter value={value} /> */}
                <Notification />
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
};

const Notification = () => {

    const [visibleNotif, setVisibleNotif] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(
            () => setVisibleNotif(false), 2500);
        return () => clearTimeout(timeout);
    }, [ ])

    return (
        <div>
            { visibleNotif && <p>Hello</p> }
        </div>
    );
};

// const HookCounter = ({ value }) => {

//     useEffect(() => {
//         console.log('mount');
//     }, []);
    
//     useEffect(() => {
//         console.log('update');
//     });

//     useEffect(() => {

//         return (() => {
//             console.log('unmount');
//         })
//     }, []);

//     return <p> {value} </p>;
// };

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  