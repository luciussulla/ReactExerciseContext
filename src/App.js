import React, {useEffect} from 'react'

const App = ()=> {
  const [state, setState] = React.useState(0)
  const [counter, setCounter] = React.useState(true)

  useEffect(()=> {
    console.log("Component did mount")
  },[]) 

  const handleIt = ()=> {
    setState(state+1)
  }

  const handleCounter = ()=> {
    setCounter(prev => !prev)
  }

  return (
    <div>
      <button onClick={handleCounter}>Show/Hide Component</button>
      {counter ? <Counter /> : null}
    </div>
  )
}

const Counter = ()=> {
  const [counter, setCounter] = React.useState(0)

  const handleMouse = (e)=> {
    setCounter(e.clientX)
  }

  useEffect(()=> {
    window.addEventListener('mousemove', handleMouse)

    return (()=> {
      window.removeEventListener('mousemove', handleMouse)
    })

  },[])

  return (
    <div>
      <p>{counter}</p>
      {/* <p>{rerenderCounter}</p> */}
    </div>
  )
}

export default App;