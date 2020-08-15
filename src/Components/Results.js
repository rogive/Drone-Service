import React from 'react';


function Results(){

  let info = {
    image : "",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eum consequatur architecto, odit expedita quidem perspiciatis in obcaecati dignissimos unde sunt iure accusamus beatae vero. Exercitationem blanditiis ad quas consequuntur?",
  }
  

  return(
    <div>
      <h2>Resultados</h2>
      <div>
        <img src={info.image} alt="paisaje"/>
        <div>
          <p>{info.description}</p>
          <div>
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results