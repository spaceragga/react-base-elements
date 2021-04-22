import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext.Provider value='Hello World 123'>
            <Child />
        </MyContext.Provider>
    );
};

const Child = () => {
    const value = useContext(MyContext);

    return <p>{value}</p>;
};

// без использовани хука
//
// const Child = () => {
//     return (
//         <MyContext.Consumer>
//             { (value) => {
//                 return (
//                     <p> {value} </p>
//                 )
//             }
//             }
//         </MyContext.Consumer>
//     );
// };

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  