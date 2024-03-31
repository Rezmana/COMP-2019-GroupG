import { Fragment } from "react"
function ListGroup() {

    const items = ['helo','brth','urrwf','tiyorpp', 'yipee']
    return (
        //Fragments are used when multiple html elements are used within one function
        <Fragment> 
            <h1>List</h1>
            <ul class="list-group">
                {/* by assigning a unique key to each element in the map we can easily identify the items */}
                {items.map(item => <li key={item}>{item}</li>)} 
            </ul>

        </Fragment>
    )
}

export default ListGroup//react cannot return more than one element