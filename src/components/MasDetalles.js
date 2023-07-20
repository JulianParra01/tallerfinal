import React from "react";

const Detalles = ({ characters }) => {
    return (
        <div className="row">
 <h1>Tercer Componente - Datos adicionales</h1>
       
            {
                characters.map((item, index) => (
                    <div key={index} className="col">
                        <div className="list">
                           
                      
                        <h1 >{item.name}</h1>
                        <ul>                    
                            <li>{item.gender}</li>
                            <li>{item.species}</li>
                            <li>{item.status}</li>
                        </ul>

                        </div>
                    </div>
                ))
            }


        </div>

    )

}

export default Detalles