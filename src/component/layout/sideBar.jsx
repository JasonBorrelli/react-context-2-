import { useContext } from "react"
import MixerContext from "../context/MixerContext"


export default function SideBar() {


  const {resetVolume} = useContext(MixerContext)

    return (
      <aside className= "w-25  border-end p-3 text-center mt-3">
       <h4>SideBar</h4>
       <button onClick={resetVolume} className="btn btn-primary w-100 mt-3">Reset</button>
      </aside> 
    ) 
}   