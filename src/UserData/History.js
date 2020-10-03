import React from 'react';


const History = (props) => {
    const myLists = props.myLists;  
    const listItems = myLists.map((myList) =>  
      <li>{myList}</li>  )

    return (
        <div>
            <p>History data entered :</p>
            <p>{listItems}</p>
        </div>
    )
}

export default History;