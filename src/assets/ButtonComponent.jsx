import './ButtonCompDesign.css'
import CartSvg from './images/shopping_cart.svg'

export const ButtonComponent = (desc) => {
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
        <button disabled={desc.disabled} type={desc.type} className={`primary${classes}`}>
          Default
        </button>
      </div>
    </>
  );
}

export const ButtonComponentIcon = (desc) =>{
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
        <button disabled={desc.disabled} type={desc.type} className={`primary btnIcon${classes}`}>
          <img className='cartImg' src={CartSvg} alt="shopping cart image"/>
          Default
        </button>
      </div>
    </>
  );

}
