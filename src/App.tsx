import './App.css'
import BackToTop from './back-to-top/BackToTop'
import BoxContent from "./components/BoxContent"

function App() {
  const colorCodeArr = ["blue", "green", "red", "yellow"]
  return (
    <div className="App">
      {colorCodeArr.map((color, ind) => <BoxContent ind={ind} color={color} key={ind} />)}
      <BackToTop />
    </div>
  )
}

export default App
