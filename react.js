// this file to learn the framework that is called React

// first => we started a new project
// npm create-react-app app-name

// when the project is created, we can run it with the command: npm start
// by default any project creates comes with 
// 1- Modukes node => this is where all the dependencies are installed
// 2- public => this is where the index.html file is located
// 3- src => this is where the main code of the project is located
// 4- package.json => to help the team to manage the project and its dependencies
// 5- package-lock.json => to help the team to manage the project and its dependencies
// 6- README.md => to explain the project and its dependencies
// 7- .gitignore => to ignore files that we don't want to push to the repository

// npm start => to run the project

// react syntax 

// 1- components => these are the building blocks of the project

export default function MyComponent() {
return (
    <div>
    <h2>This is my component</h2>
    <p>React is a JavaScript library for building user interfaces.</p>
    </div>
    );
}

// this is the main component of the project
// components are a functions in original we but in another file export and import it in the main file
// < my-component /> => this is how we use the component in the main file

// 2- JSX => this is a syntax that allows us to write HTML in JavaScript


    let person = {
        name: "John",
        age: 30,
        city: "New York",
        email: "john@example.com"
    };
    
    let elmentsty = {
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center"
    }
    return (
    <div>
        <h1 style={elmentsty}>My name is {person.name}</h1>
        <p style={{backgroundColor: "lightgray", padding: "10px"}}>I am {person.age} years old and I live in {person.city}.</p>
        <p style={elmentsty} onClick={() => alert(`Contacting ${person.name} at ${person.email}`)}>
            You can contact me at {person.email}.
        </p>
    </div>
    );
    <Article name="Dragos" email="dragon@gmail.com" age="25"/>

// it means the actual compation of html and JS so we can use JS in HTML and HTML in JS
// using attributes in JSX is similar to HTML but with some differences
// 1- class => className
// 2- for => htmlFor
// 3- style => style={{key: value}}
// 4- must use camelCase for multi-word attributes like onClick, onMouseOver, etc.
// 5- the props to hand a parameter to a component we use props and we can access it in the component using props.name, props.email, etc.
// 6- the children props to hand a parameter to a component we use props.children and we can access it in the component using props.children

// map => is the method that we use to loop through an array and return a new array with the same length but with different values
// we use to loop r=to make sure we in state of DRY (Don't Repeat Yourself) and to make the code more readable and maintainable
// make the update and delete the code in the main file and put it in a new component and import it in the main file

// state => is a way to manage the data in a component and to make the component re-render when the data changes

// every thing in any web has it own state like:
// user is logged in or not, the theme of the website, the language of the website, etc.
// state mangment mean doing some kind of logic depending on the state of the component and to make the component re-render when the state changes

// react DOM => 
// every web has it own DOM (Document Object Model) and react has it own DOM that is called virtual DOM and it is a copy of the real DOM and it is used to make the component re-render when the state changes and to make the component more efficient and faster
// in react the change that heppens in UI can not affect the local variable in the component because the component is re-rendered and the local variable is re-initialized and it will lose its value so we need to use state to manage the data in the component and to make the component re-render when the data changes
// so we use 

// 1- useState => is a hook that is used to manage the state in a component and to make the component re-render when the state changes

// import { useState } from "react";
// useState(value, setValue) => 
//[value, setValue] => value is the initial value of the state and setValue is a function that is used to update the state and to make the component re-render when the state changes



let [forminputs, setFormInputs] = useState({
        name: "",
        email: "",
        Age: "",
    });

    function handleChange(e) {
        setFormInputs({
            ...forminputs, // shallow copy of the previous state
            [e.target.name]: e.target.value // update the specific field based on the input's name
        });
    }

    function handleCheckboxChange(e) {
        if(e.target.checked === true){
            setFormInputs({
                ...forminputs,
                [e.target.name]: true
            });
        } else {
            setFormInputs({
                ...forminputs,
                [e.target.name]: false
            });
        }
    }
// this how can we take the value of the input and store it in the state and to make the component re-render when the state changes
// by this we can use these data to make an api request to the server for example 
// in react you must not use mutution to state like var++ => you must use shallow copy:
// setState({...state, var: state.var + 1}) => this is how we can update the state and to make the component re-render when the state changes


// 2- array state =>
let [info , setInfo] = useState([
        {
            id: 1,
            name: 'gerges'
        },
        {
            id: 2,
            name: 'john'
        },
        {
            id: 3,
            name: 'jane'
        },
        {
            id: 4,
            name: 'mario'
        }
        ]);
        let [add, setadd] = useState('')

    let showInfo = info.map((item) => {
        return (
            <div>
                <li key={item.id} style={{ backgroundColor: "lightblue", padding: "10px", margin: "10px", borderRadius: "10px" }}>
                    {item.name}
                </li>
                <button onClick={() => deleteInfo(item.id)} style={{ padding: "10px", borderRadius: "10px", border: "1px solid lightgray", margin: "10px", backgroundColor: "lightcoral" }}>delete</button>
                <button onClick={() => editInfo(item.id)} style={{ padding: "10px", borderRadius: "10px", border: "1px solid lightgray", margin: "10px", backgroundColor: "lightgreen" }}>Edit</button>
            </div>
        );
    });

    function addInfo() {
        setInfo([...info, { id: info.length + 1, name: add }]);
        setadd("");
    }

    function deleteInfo(id) {
        let newset = (info.filter((item) => item.id !== id));
        setInfo(newset);
    }

    function editInfo(id) {
        let newset = info.map((item) => {
            if (item.id === id) {
                item.name = `Edited ${item.name}`;
                if (item.name === `Edited ${item.name}`) {
                    alert(`You have edited ${item.name}`);
                }
            }
            return item;
        });
        setInfo(newset);
    }

// in array like most react we do not mutate the array directly like info.push() or info.splice() because it will not trigger a re-render of the component and we will not see the changes in the UI so we use shallow copy to update the array and to make the component re-render when the state changes


// state refresh =>
function handkeRefresh() {
    setinfo(count + 1);
    setinfo((count) => count + 1); // this is the correct way to update the state when the new state depends on the previous state

}

// Props =>
// like passing parameters to a function we can pass parameters to a component using props and we can access it in the component using props.name, props.email, etc.
// in props we can pass parameters and functions nearly everything 
// althought passing alot must remember that must the father compenent who should edit the date not the child 
// we will face a problem while making an react web that is =>
// props drilling => this is when we pass props from a parent component to a child component and then to a grandchild component and so on and it will be hard to manage the state and to make the component re-render when the state changes so we use context API or redux to manage the state in a better way
// on of it is solution is 

// 2- useContext => this is a hook that is used to manage the state in a component and to make the component re-render when the state changes and to avoid props drilling

// 1- create a context using createContext() and export it
import { createContext, useState } from "react";
export const InputLoanContext = createContext({
    labelname: "",
    name: "",
    inputstyle: {},
    lablestyle: {},
    handleChange: null,

});

// 2- wrap the component that needs the context with the context provider and pass the value to the provider 
// this way all the child components of the provider can access the context value without passing it as props
{/* <InputLoanContext.Provider value={{ labelname: "Name:", name: "name", value: name, handleChange: handleChange, inputstyle: { width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }, lablestyle: { display: "block", marginBottom: 10 } }}>
<MyComponent />
</InputLoanContext.Provider>

<InputLoanContext.Provider value={{ labelname: "Phone:", name: "phone", value: phone, handleChange: handleChange, inputstyle: { width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }, lablestyle: { display: "block", marginBottom: 10 } }}>
<MyComponent />
</InputLoanContext.Provider>


<InputLoanContext.Provider value={{ labelname: "Age:", name: "age", value: age, handleChange: handleChange, inputstyle: { width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }, lablestyle: { display: "block", marginBottom: 10 } }}>
<MyComponent />
</InputLoanContext.Provider> */}

// give the component the context value using useContext() hook and access the value using context.value, context.handleChange, etc.
import "./style.css"
import { useContext } from "react";
import { InputLoanContext } from "./context/inputloan.js";
export default function MyComponent() {
    const context = useContext(InputLoanContext);
    return (
    <>
        <label style={context.lablestyle}>{context.labelname}</label>
        <input name={context.name} type="text" placeholder="Enter your name" value={context.value} onChange={(e) => context.handleChange(e)} style={context.inputstyle}/>
        <br />
    </>
    );
    
}

    
// originally when passing a value do let useContext your first option the first option is
// Props we use context if props did not work for us 
// despite the fact that context made to pass date from parent to grandchild we use it for more important usage that is
// is to pass global variables to all project by adding the context to App.js 


// react routing =>
// we using it to move between pages in the same project without reloading the page and to make the project more efficient and faster
// we use react-router-dom library to make the routing in react and we can install it using npm install react-router-dom
// we use BrowserRouter to wrap the whole project and we use Routes to define the routes and we use Route to define the path and the component that will be rendered when the path is matched


<>
        <div>
            <Link to="/">
            <button>Home</button>
            </Link>
            
            <Link to="/props">
            <button>Props</button>
            </Link>

            <Link to="/article">
            <button>Article</button>
            </Link>
        </div>
    <Routes>
        <Route path="/" element={<h1> Welcome to the Home Page</h1>} />
        <Route path="/props" element={<Props />} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<h1>404 page not found</h1>} />


        <Route path="/posts" element={<layout />} > // the layout will appear in all the pages that are nested in this route
            <Route index element={<Posts />} /> // this is the default page that will be rendered when the path is matched
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="edit" element={<EditPost />} />
            <Route path="delete/:postId" element={<DeletePost />} />
        </Route>
    </Routes>
</>


// most of time you will need to pass a parameter to a page like the id of the post or the name of the user and we can do that using useParams() hook and we can access the parameter using useParams().paramName and we can use it to make an api request to the server 
// you will also need to use useContext() hook to access the context value in the page and we can use it to make an api request to the server 

// nested routes => this is when we have a route that has a child route and we can use it to make a layout for the child routes and we can use it to make a dashboard for example and we can use it to make a layout for the child routes and we can use it to make a dashboard for example
// we can use it to make a layout for the child routes and we can use it to make a dashboard for example and we can use it to make a layout for the child routes and we can use it to make a dashboard for example

// SPA => single Page Applications
// using one page but we move between pages using CSR (Client Side Rendering) and we can use it to make a dashboard for example and we can use it to make a layout for the child routes and we can use it to make a dashboard for example
// CSR => Client Side Rendering
// the client will render the page and send it to the server and we can use it to make a dashboard for example and we can use it to make a layout for the child routes and we can use it to make a dashboard for example


// SSR => Server Side Rendering
// the server will render the page and send it to the client and we can use it to make a dashboard for example and we can use it to make a layout for the child routes and we can use it to make a dashboard for example



// Material UI => this is a library that is used to make the UI of the project more beautiful and we can install it using npm install @mui/material @emotion/react @emotion/styled and we can use it to make a dashboard for example and we can use it to make a layout for the child routes and we can use it to make a dashboard for example


// useEffect => this is a hook that is used to perform side effects in a component and to make the component re-render when the state changes and to avoid props drilling
// API request, local storage, setInterval, setTimeout, etc. are examples of side effects and we can use useEffect() hook to perform these side effects in a component and to make the component re-render when the state changes and to avoid props drilling

useEffect(() => {
    console.log("Component mounted");
}, []); // the empty array means that the effect will run only once when the component is mounted and will not run again when the state changes

// [] === [] ? // will compare if changed will work with every re-render but if we put a state in the array like [state] it will work only when the state changes and will not work with every re-render


// useMemo =>
// used to memoize a value and to avoid re-computing the value when the state changes and to make the component more efficient and faster
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]); // the value will be re-computed only when a or b changes and will not be re-computed when the state changes

// make the peformance better only re-render the important part of the component and not the whole component and we can use it to make a dashboard for example and we can use it to make a layout for the child routes and we can use it to make a dashboard for example

import { useState, createContext, useContext } from "react";

export const ToastContext = createContext({
    open: false,
    handleToast: () => {},
    setMessage: () => {},
    setType: () => {},
    message: "",
    type: "success",

});


export const ToastProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");

    const handleToast = (message, type) => {
        setMessage(message);
        setType(type);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 1500);
    }

    return (   
        <ToastContext.Provider value={{ open, handleToast, message, type }}>
            {children}
        </ToastContext.Provider>
    );
}

// this type of logic aim to make all connected logic be in one place and to make the code more readable and maintainable and to avoid props drilling and to make the component re-render when the state changes and to avoid props drilling


const useToast = () => {
    return useContext(ToastContext);
}

// this is called custom hook


    function resultReducer(state, action) {
    const { firstNumber, secondNumber} = action.payload;
    switch (action.type) {
        case 'add':
        return Number(firstNumber) + Number(secondNumber);
        case 'subtract':
        return Number(firstNumber) - Number(secondNumber);
        case 'multiply':
        return Number(firstNumber) * Number(secondNumber);
        case 'divide':
        return Number(firstNumber) / Number(secondNumber);
        default:
        return state;
    }
    }

    const [firstNumber, setFirst] = useState(null);
    const [secondNumber, setSecond] = useState(null);
    const [result, dispatch] = useReducer(resultReducer, 0);

    function handleAdd() {
        dispatch({ type: 'add', payload:{ firstNumber: firstNumber, secondNumber: secondNumber } });
    }

    function handleSubtract() {
        dispatch({ type: 'subtract', payload:{ firstNumber: firstNumber, secondNumber: secondNumber } });
    }
    
    function handleMultiply() {
        dispatch({ type: 'multiply', payload:{ firstNumber: firstNumber, secondNumber: secondNumber } });
    }

    function handleDivide() {
        dispatch({ type: 'divide', payload:{ firstNumber: firstNumber, secondNumber: secondNumber } });
    }

// this is called the useReducer hook and it is used to manage the state in a component and to make the component re-render when the state changes and to avoid props drilling and to make the component more efficient and faster
// useReducer(function, initialState) => [state, dispatch] => state is the current state and dispatch is a function that is used to update the state and to make the component re-render when the state changes and to avoid props drilling and to make the component more efficient and faster

// we use it to same reason make the logic of code in one source of truth



// Redux 
// originally used to store the state of the whole project in one place and to make the component re-render when the state changes and to avoid props drilling and to make the component more efficient and faster
// it is the final solution for state management in react 

// Redus Usage =>













































