import './App.css'
import {ButtonComponent, ButtonComponentIcon} from './assets/ButtonComponent';


function App() {

  return (
    <>
      <h1>Button Component</h1>
      <div className="grid-group">
        <div className="column1">
          <ButtonComponent heading="<Button />" type="submit" btntxt="Default" class="graybtn" />
        </div>
        <div className="column2">
          <ButtonComponent heading="<Button variant=”outline” />" type="submit" btntxt="Default" class="outline" />
        </div>
        <div className="column3">
          <ButtonComponent heading="<Button variant=”text” />" type="submit" btntxt="Default" class="text" />
        </div>
        <div className="column4">
          <ButtonComponent heading="<Button disableShadow />" type="submit" btntxt="Default" class=""/>
        </div>
        <div className="column5">
          <ButtonComponent heading="<Button disabled />" btntxt="Disabled" class="disabled" spanClass="colrBlack"/>
        </div>
        <div className="column6">  {/*column6*/}
            <ButtonComponentIcon heading="<Button startIcon=”local_grocery_store” />" btntxt="Default" class="bg-secondary btnIconLeft" spanClass="colrBlack"/>
            <ButtonComponentIcon heading="<Button endIcon=”local_grocery_store” />" btntxt="Default" class="bg-secondary btnIconRight" spanClass="colrBlack"/>
        </div>
        <div className="column7">
            <ButtonComponent heading="<Button size=”sm” />" type="submit" btntxt="Default" class="bg-secondary btnsm" spanClass="colrBlack"/>
            <ButtonComponent heading="<Button size=”md” />" type="submit" btntxt="Default" class="bg-secondary btnmd" spanClass="colrBlack"/>
            <ButtonComponent heading="<Button size=”lg” />" type="submit" btntxt="Default" class="bg-secondary btnlg" spanClass="colrBlack"/>
        </div>
        <div className="column7"> {/*column8*/}
            <ButtonComponent heading="<Button color=”default” />" type="submit" btntxt="Default" class="graybtn" spanClass="colrBlack"/>
            <ButtonComponent heading="<Button color=”primary” />" type="submit" btntxt="Primary" class="btn-primary"spanClass="colrBlack"/>
            <ButtonComponent heading="<Button color=”secondary” />" type="submit" btntxt="Secondary" class="btn-secondary" spanClass="colrBlack"/>
            <ButtonComponent heading="<Button color=”danger” />" type="submit" btntxt="Danger" class="btn-danger" spanClass="colrBlack"/>
        </div>
      </div>
    </>
  );
}

export default App
