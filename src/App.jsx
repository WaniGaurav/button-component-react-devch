import './App.css'
import {ButtonComponent, ButtonComponentIcon} from './assets/ButtonComponent';


function App() {

  return (
    <>
      <h1>Button Component</h1>
      <div className="grid-group">
        <div className="column1">
          <ButtonComponent heading="<Button />" type="submit" class="graybtn" />
        </div>
        <div className="column2">
          <ButtonComponent heading="<Button variant=”outline” />" type="submit" class="outline" />
        </div>
        <div className="column3">
          <ButtonComponent heading="<Button variant=”text” />" type="submit" class="text" />
        </div>
        <div className="column4">
          <ButtonComponent heading="<Button disableShadow />" type="submit" class=""/>
        </div>
        <div className="column5">
          <ButtonComponent heading="<Button disabled />" disabled={true} class="disabled" spanClass="colrBlack"/>
        </div>
        <div className="column6">  {/*column6*/}
          <div className="btnOne">
            <ButtonComponentIcon heading="<Button startIcon=”local_grocery_store” />" class="btnIconLeft" spanClass="colrBlack"/>
          </div>
          <div className="btnTwo">
            <ButtonComponentIcon heading="<Button endIcon=”local_grocery_store” />" class="btnIconRight" spanClass="colrBlack"/>
          </div>
        </div>
        <div className="column7">
          Button
        </div>
        <div className="column8">
          Button
        </div>
      </div>
    </>
  );
}

export default App
