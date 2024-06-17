import './ButtonCompDesign.css'
import CartSvg from './images/shopping_cart.svg'

const ButtonComponent = (desc) => {
  let classes = ' '
  if (desc.class) {
    classes+=desc.class;
  } else {
    classes='';
  }
  return (
    <>
      <div className="btn-info">
        <span className="btn-heading">{desc.heading}</span>
        <button disabled={desc.disabled} type={desc.type} className={`primary${classes}`}>
          <img src={CartSvg} alt="shopping cart image"/>
          Default
        </button>
      </div>
    </>
  );
}

export default ButtonComponent