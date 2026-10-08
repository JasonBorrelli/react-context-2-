import { useContext } from "react";
import MixerContext from "../context/MixerContext";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { MinusCircle } from "lucide-react";

export default function MixerSection() {
    const {volume,VolumeUp,VolumeDown,Mute,isMute} = useContext(MixerContext);

    return (
        <section className="flex-grow-1 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <h2 className=" d-flex justify-content-center">MixerSection</h2>
               
                <div className="border border-dark border-3 rounded bg-body-secondary p-3">
                    <div className="bg-dark rounded p-3 text-center w-50 mx-auto mt-2 ">
                        <p className="h5 text-info fw-bold glow-text m-4 fs-2 ">Volume: {volume}</p>
                    </div>
                    
                    <div className="d-flex justify-content-between gap-3 bg-dark border border-dark rounded p-3 mt-5">
                        <button className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center p-2"
                        style={{
                        boxShadow: '0 0 12px var(--bs-info), inset 0 0 8px var(--bs-info)',
                        textShadow: '0 0 8px var(--bs-info)',
                        width: '55px',
                        height: '55px'
                        }}
                        onClick={VolumeDown} 
                        disabled={isMute}> < MinusCircle size={35}/></button>
                        <button className="btn btn-outline-warning fw-bold px-3 py-2"
                        style={{
                        boxShadow: '0 0 12px var(--bs-warning), inset 0 0 8px var(--bs-warning)',
                        textShadow: '0 0 8px var(--bs-warning)'
                        }}
                        onClick={Mute} disabled={isMute}>Mute/Unmute</button>
                        <button className="btn btn-outline-danger rounded-circle d-flex align-items-center justify-content-center p-2"
                        style={{
                        boxShadow: '0 0 12px var(--bs-danger), inset 0 0 8px var(--bs-danger)',
                        textShadow: '0 0 8px var(--bs-danger)',
                        width: '55px',
                        height: '55px'}}
                        onClick={VolumeUp} 
                        disabled={isMute}><PlusCircle size={35}/></button>
                    
                    
                    </div>
                </div>
            </div>
        </section>
    )
}         