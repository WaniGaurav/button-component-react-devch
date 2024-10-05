import React, { useRef, useState } from 'react';
import './ButtonCompDesign.css'
import CartSvg from './images/shopping_cart.svg'



export const ButtonComponent = (desc) => {


  const buttonRef = useRef(null); // Create a ref to the button
  const [copied, setCopied] = useState(false); // State to track if text is copied

  const handleClick = () => {
    if (buttonRef.current) {
      // Access the button's computed style
      const style = window.getComputedStyle(buttonRef.current);

      // Retrieve desired CSS properties
      const btnWidth = style.width;
      const btnHeight = style.height;
      const backgroundColor = style.backgroundColor;
      const btnBorder = style.border;
      const btnBorderRadius = style.borderRadius;
      const fontSize = style.fontSize;
      const fontWeight = style.fontWeight;
      const border = style.border;
      const btntxtColr = style.color;
      const btnCursor = style.cursor;

      // Create a string to copy
      const cssProperties = `width:${btnWidth}; height:${btnHeight}; background-color: ${backgroundColor}; border:${btnBorder}; border-radius:${btnBorderRadius}; font-size: ${fontSize}; font-weight: ${fontWeight}; border: ${border}; color: ${btntxtColr}; cursor:${btnCursor};`;

      // Copy the CSS properties to the clipboard
      navigator.clipboard.writeText(cssProperties).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 4000); // Reset the copied state after 2 seconds
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  };


  let classes = ' '
  if (desc.class) {
    classes+=desc.class;
  } else {
    classes='';
  }
  return (
    <>
      <div className="btn-info btn-width">
        <span className={`btn-heading ${desc.spanClass}`}>{desc.heading}</span>
        {copied && <p className='copy-heading'>CSS properties copied to clipboard!</p>}
        <button ref={buttonRef} onClick={handleClick} type={desc.type} className={`primary${classes}`}>
          {desc.btntxt}
        </button>
      </div>
    </>
  );
}

export const ButtonComponentIcon = (desc) =>{


  const buttonRef = useRef(null); // Create a ref to the button
  const [copied, setCopied] = useState(false); // State to track if text is copied

  const handleClick = () => {
    if (buttonRef.current) {
      // Access the button's computed style
      const style = window.getComputedStyle(buttonRef.current);

      // Retrieve desired CSS properties
      const btnWidth = style.width;
      const btnHeight = style.height;
      const backgroundColor = style.backgroundColor;
      const btnBorder = style.border;
      const btnBorderRadius = style.borderRadius;
      const fontSize = style.fontSize;
      const fontWeight = style.fontWeight;
      const border = style.border;
      const btntxtColr = style.color;
      const btnCursor = style.cursor;

      // Create a string to copy
      const cssProperties = `width:${btnWidth}; height:${btnHeight}; background-color: ${backgroundColor}; border:${btnBorder}; border-radius:${btnBorderRadius}; font-size: ${fontSize}; font-weight: ${fontWeight}; border: ${border}; color: ${btntxtColr}; cursor:${btnCursor};`;

      // Copy the CSS properties to the clipboard
      navigator.clipboard.writeText(cssProperties).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 4000); // Reset the copied state after 2 seconds
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  };



  let classes = ' '
  if (desc.class) {
    classes+=desc.class;
  } else {
    classes='';
  }
  return (
    <>
      <div className="btn-info">
        <span className={`btn-heading ${desc.spanClass}`}>{desc.heading}</span>
        {copied && <p className='copy-heading'>CSS properties copied to clipboard!</p>}
        <button ref={buttonRef} onClick={handleClick} type={desc.type} className={`primary btnIcon${classes}`}>
          <img className='cartImg' src={CartSvg} alt="shopping cart image"/>
          {desc.btntxt}
        </button>
      </div>
    </>
  );

}