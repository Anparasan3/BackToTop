import React from "react"
import BackToTop from "../back-to-top/BackToTop"

interface ForInsideScrollProps {
  ind: number
  color: string
}


const ForInsideScroll: React.FC<ForInsideScrollProps> = (props) => {
  const { ind, color } = props
  const id = `id${ind}`

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center",
      backgroundColor: color,
    }}>
      <div>
        <h2>SECTION {ind}</h2>
        <div
          style={{
            backgroundColor: "gray",
            overflow: "auto",
            width: "500px",
            height: "500px",
            margin: "0 auto"
          }}
          id={id}
        >
          {[...Array(50)].map(() => <div><h3>Children</h3></div>)}
        </div>


        <div style={{ position: "relative", width: "500px", height: "10px", margin: "0 auto" }}>
          <BackToTop scrollId={id} progressStyle={{ position: "absolute", right: "50px", bottom: "50px" }} />
        </div>
      </div>

    </div >
  )
}

export default ForInsideScroll