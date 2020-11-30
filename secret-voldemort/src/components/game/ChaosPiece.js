import React, { useState, useEffect } from "react";


export const ChaosPiece = props => {

  const [Image, setImage] = useState('');
    
  useEffect(() => {
    setImage(props.image);
  }, [props])

  return(
    <div class='column is-4 mx-4 is-vcentered align-cntr'>
      <figure class="image is-64x64">
        <img  class='is-rounded' src={Image} alt='Chaos'/>
      </figure>
    </div>
  )
}



