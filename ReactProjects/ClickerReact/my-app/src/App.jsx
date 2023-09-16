import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  return (
      <div className="App">
        <div className="main">
          <div className="counter">
            <div className='number'>{counter}</div>
            <button onClick={() => {setCounter(counter + 1)}}>Click!</button>
          </div>
        </div>
        <div className="supers">
            <div className="supers_group">
              <div className="super">
                <div className="super_text">Uppgrate this super to have 1 point per second</div>
                <button className="super_btn" onClick={() => {setInterval(() => {
                  setCounter(counter => counter + 1) }, 1000)}}>Uppgrate!</button>
              </div>
              <div className="super">
                <div className="super_text">Uppgrate this super to have 10 points per second</div>
                <button className="super_btn"onClick={() => {setInterval(() => {
                  setCounter(counter => counter + 10) }, 1000)}}>Uppgrate!</button>
              </div>
            </div>
            <div className="supers_group">
              <div className="super">
                <div className="super_text">Uppgrate this super to have 1'000 points per second</div>
                <button className="super_btn"onClick={() => {setInterval(() => {
                  setCounter(counter => counter + 1000) }, 1000)}}>Uppgrate!</button>
              </div>
              <div className="super">
                <div className="super_text">Uppgrate this super to have 100'000 points per second</div>
                <button className="super_btn"onClick={() => {setInterval(() => {
                  setCounter(counter => counter + 100000) }, 1000)}}>Uppgrate!</button>
              </div>
            </div>
            <div className="supers_group">
              <div className="super">
                <div className="super_text">Uppgrate this super to have 1'000'000 points per second</div>
                <button className='super_btn' onClick={() => {setInterval(() => {
                  setCounter(counter => counter + 1000000)}, 1000)}}>Uppgrate!</button>
              </div>
              <div className="super">
                <div className="super_text">Uppgrate this super to have 10'000'000 points per second</div>
                <button className='super_btn' onClick={() => {setInterval(() => {
                  setCounter(counter => counter + 10000000)}, 1000)}}>Uppgrate!</button>
              </div>
            </div>
        </div>
      </div>
  )
}
export default App;
