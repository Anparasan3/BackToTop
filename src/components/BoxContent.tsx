import React from "react"

interface BoxContentProps {
  ind: number
  color: string
}

const containerStyle = {
  height: "80vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"
}

const BoxContent: React.FC<BoxContentProps> = (props) => {
  const { ind, color } = props
  const id = `id${ind}`

  return (
    <div style={{ backgroundColor: color, ...containerStyle }} id={id}>
      <h2>SECTION {ind}</h2>
    </div>
  )
}

export default BoxContent