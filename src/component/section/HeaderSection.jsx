import { VolumeOff, Volume2 } from "lucide-react"
import { useContext } from "react";
import MixerContext from "../context/MixerContext";


export default function HeaderSection() {

    const { isMuted} = useContext(MixerContext);

    return (
      <header className="bg-light border-top border-dark">
        <h1 className="h4 text-center py-3">Mixer Application</h1>
        <div className="d-flex justify-content-center mb-4">
          {isMuted  ? <VolumeOff size={40} /> : <Volume2 size={40} />}
         
        </div>
      </header>

       
    )
}