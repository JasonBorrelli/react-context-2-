import Header from './component/layout/Header'
import MainContent from './component/layout/MainContent'
import Footer from './component/layout/Footer'
import SideBar from './component/layout/sideBar'
import { useState } from 'react'
import MixerContext from './component/context/MixerContext'


function App() {

  const [volume,setVolume] = useState(50)
  const [isMuted,setIsMuted] = useState(false)
  const [actualVolume,setActualVolume] = useState(volume)

  
 

function VolumeUp() {
  if (isMuted) return
   setVolume(actual => actual < 100 ? actual + 5 : actual)
}

function VolumeDown() {
  if (isMuted) return 
   setVolume(actual => actual > 0 ? actual - 5 : actual)
}

function resetVolume(){
  if (isMuted) return 
  setVolume(50)
} 


function Mute(){
  if (isMuted){
    setVolume(actualVolume)
    setIsMuted(false)
  }else{ 
    setActualVolume(volume)
    setVolume(0)
    setIsMuted(true)
  }
}




  return (
    
    <div className='d-flex flex-column min-vh-100'>
      <MixerContext.Provider value={
        {volume,
         setVolume, 
         VolumeUp, 
         VolumeDown, 
         resetVolume, 
         Mute,
         isMuted
         }}>
        <Header />
        <div className="d-flex  flex-grow-1 gap-3">
          <SideBar />
          <MainContent />
        </div>
        <Footer />
      </MixerContext.Provider>
    </div>
  )
}

export default App
