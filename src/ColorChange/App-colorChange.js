import { useState } from 'react'
import ColorChange from './ColorChange';
import Input from './Input';
import Square from './Square';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  const [colorValue, setColorValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (

    <div className="App">
    <div>ColorChange</div>
      <Square 
        colorValue={colorValue}
        isDarkText={isDarkText}

        />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/color" element={<ColorChange />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
