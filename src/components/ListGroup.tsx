import { useState } from "react";

useState

function ListGroup() {
    let items = [
        'Lahore',
        'Isalamabad',
        'Karachi',
        'Faisalabad'
    ]
    //hook state hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    //event handler//
        // const handleClick =  (event: MouseEvent) => console.log(event);
    return(
        <>
            <h1>List Groups</h1>
            {/* {
                items.length ===0 ? <p>No items found</p> : null  
            } */}
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item,index) => <li
                className={selectedIndex === index ? "list-group-item active": "list-group-item"} 
                key = {item}
                onClick={() => {setSelectedIndex(index)}}
                >{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;
