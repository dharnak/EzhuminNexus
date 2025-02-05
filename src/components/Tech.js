import './css/Tech.css'
import React from 'react';
import act from './TechImages/React.png'
import Java from "./TechImages/Java.png"
import node from "./TechImages/Node.png"
function Tech(){
    const image = [
        {url:act},
        {url:Java},
        {url:node}
    ]

    return (
        <>
        <div className="Whole-con">
            <div className="container-c">
                <span id="Title-c">Technology</span>
            <div className="element">
                {image.map(element=>{
                    return(
                        <>
                        
                           <img id="img-100" src={element.url} alt="" />
                           
                        </>
                    )
                   
                })}
                 </div>
                
                
            </div>
        </div>
        </>
    )
}
export default Tech;