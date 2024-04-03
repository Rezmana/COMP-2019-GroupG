//pascalcasing
function Message(){
    //JSX: JavaScript xml
    const name = "Bob";
    if (name){ //dynamically changing the app 
        return <h1>Hello {name}</h1>
    }
    return <h1>Hello World</h1>
}
/* 
   We are building a component, in this is a function component for the website
   and exporting a function from this component called message
*/ 
export default Message//export the message function so that the function Message can be used elsewhere 
// within the program