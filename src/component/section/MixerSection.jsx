import { useContext } from "react";
import MixerContext from "../context/MixerContext";

export default function MixerSection() {
    const {volume,VolumeUp,VolumeDown,Mute,isMute} = useContext(MixerContext);

    return (
        <section className="flex-grow-1 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <h2 className=" d-flex justify-content-center">MixerSection</h2>
                <p className="text-center">Volume: {volume}</p>
                <div className="d-flex justify-content-between gap-3">
                    <button className="btn btn-primary" onClick={VolumeDown} disabled={isMute}>Volume Down</button>
                    <button className="btn btn-primary" onClick={Mute} disabled={isMute}>Mute/Unmute</button>
                    <button className="btn btn-primary" onClick={VolumeUp} disabled={isMute}>Volume Up</button>
                    
                    
                </div>
            </div>
        </section>
            
    )
}       