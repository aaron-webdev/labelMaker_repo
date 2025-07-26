import { useState } from 'react'
import LabelMaker from './components/LabelMaker'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>LABEL MAKER</h1>
    <LabelMaker/>
    </>
  )
}