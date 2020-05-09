import React from 'react';

const ValidationComponent = (props) => {
    const textDescription = (<p>
        {props.textLength > 5 ? 'Text too long' : 'Text too short'}
    </p>)
   return(
      
       <div>
           <p>{props.textLength}</p>
           <p>{textDescription}</p>
       </div>
   )
}

export default ValidationComponent