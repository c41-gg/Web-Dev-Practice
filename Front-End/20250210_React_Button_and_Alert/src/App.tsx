import React, { useState } from "react";
import Alert from "./components/Alerts";
import Button from "./components/Button";



function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
  const [buttonVisible, setButtonVisibility] = useState(true);
  return(
    <div>
      {alertVisible && <Alert onClose={() => {setAlertVisibility(false); setButtonVisibility(true)}}>You Clicked it?!?!</Alert>}
      {buttonVisible && <Button color="primary" onClick={() => {setAlertVisibility(true); setButtonVisibility(false)}}>Click Here!</Button>}
    </div>
  )
}

export default App;