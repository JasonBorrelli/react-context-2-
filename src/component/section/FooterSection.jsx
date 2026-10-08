import { useContext } from "react";
import MixerContext from "../context/MixerContext";



export default function FooterSection() {
    const {volume, isMuted} = useContext(MixerContext);


    return (
        <footer className="bg-light border-top bg-dark border-dark d-flex justify-content-center ">
            <h2  className= "badge text-secondary-emphasis glow-text text-center h5 py-3 w-25"
            >{isMuted ? <h2 className="text-info fw-bold">MUTO</h2> : <h2 className="text-info fw-bold">Volume: {volume}</h2>}</h2>
        </footer>
    )
}        