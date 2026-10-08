import { useContext } from "react";
import MixerContext from "../context/MixerContext";



export default function FooterSection() {
    const {volume, isMuted} = useContext(MixerContext);


    return (
        <footer className="bg-light border-top border-dark d-flex justify-content-center ">
            <h2  className= "badge text-secondary-emphasis text-center h5 py-3 w-25"
            >{isMuted ? <h2>MUTO</h2> : <h2>Volume: {volume}</h2>}</h2>
        </footer>
    )
}       