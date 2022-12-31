import BackToTop from './back-to-top/BackToTop'
import OuterScroll from "./components/OuterScroll"
import InsideScroll from './components/InsideScroll'

function App() {
  const colorCodeArr = ["blue", "green", "red", "yellow"]
  return (
    <>
      {colorCodeArr.map((color, ind) => {
        if (ind === 0) return <InsideScroll ind={ind} color={color} key={ind} />;
        return <OuterScroll ind={ind} color={color} key={ind} />
      })}
      <BackToTop />
    </>
  )
}

export default App
