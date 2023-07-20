import React from "react";

const Characters = ({ characters }) => {
    return (
        <div className="row">
    <h1>Primer Componente</h1>
            {
           
           characters.map((item, index) => (
                    <div key={index} className="col">
                        <div className="list">
                            <ul>
                                <li>
                                    <p >{index} - {item.name} </p>
                                </li>
                            </ul>

                        </div>
                    </div>
                ))
                
            }
        </div>

    )
   
}

export default Characters 