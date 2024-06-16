import './App.css'
import ButtonComponent from './assets/ButtonComponent';

function App() {

  return (
    <>
      <h1>Button Component</h1>
      <div className="flex-group">
        <div className="column1">
          <ButtonComponent heading="<Button />" class="graybtn" />
        </div>
        <div className="column2">
          <ButtonComponent heading="<Button variant=”outline” />" class="outline" />
        </div>
        <div className="column3">
          <ButtonComponent heading="<Button variant=”text” />" class="text" />
        </div>
        <div className="column4">
          <ButtonComponent heading="<Button disableShadow />" />
        </div>
        <div className="column5">
          <ButtonComponent heading="<Button disabled />" type="disabled" class="disabled" />
        </div>
        <div className="column6">
          Button
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
