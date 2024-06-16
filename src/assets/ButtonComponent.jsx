import React from 'react'
import './ButtonCompDesign.css' 

const ButtonComponent = (desc) => {
  return (
    <>
      <div className="btn-info">
        <span className="btn-heading">{desc.heading}</span>
        <button type={desc.type?`${desc.type}`:"submit"} className={`primary ${desc.class}`}>Default</button>
      </div>
    </>
  );
}

export default ButtonComponent