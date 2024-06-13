import './App.css'
import ButtonComponent from './assets/ButtonComponent';

function App() {

  return (
    <>
      <h1>Button Component</h1>
      <div className="flex-group">
        <div className="column1">
          <ButtonComponent heading="<Button disableShadow />" />
        </div>
        <div className="column2">Button 2</div>
        <div className="column3">Button 3</div>
        <div className="column4">Button 4</div>
      </div>
    </>
  );
}

export default App
