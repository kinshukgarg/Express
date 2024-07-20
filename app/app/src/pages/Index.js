import React from 'react'
export default function Index()
{
    const [imgSrc,setImgSrc]= React.useState("");
    const [guess, setGuess] = React.useState("");

    const fetchNewImage=()=> setImgSrc("https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp")
    const submitGuess=()=>{
        console.log(guess)
        setGuess("")
    }

return(<>
 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Welcome to Covid Catchphrase</h1>
        <button onClick={fetchNewImage}>Get new image</button>
        <div style={{ margin: 12 }}>
          <img src={imgSrc} height="400" width="400" alt="Covid Catchphrase" />
        </div>
        <div>
          <h2>Enter your Guess</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={submitGuess}>Submit Guess</button>
          </div>
        </div>
      </div>
</>)
}