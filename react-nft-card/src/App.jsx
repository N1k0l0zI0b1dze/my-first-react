import rect from './assets/rect.png'
import etherium from './assets/etherium.svg'
import clock from './assets/clock.svg'
import Oval from './assets/Oval.png'
import './App.css'

function App() {
  
  return (
    <>
      <div className="container">
        <div className="card">
            <img src={rect} alt="foto" className='foto-1'/>
            <h3 className='h-1'>Equilibrium #3429</h3>
            <p className='p-1'>Our Equilibrium collection promotes balance and calm.</p>

            <div className="container-2">
                
                <div className="m-1">
                <img src={etherium} alt="eth-photo" />
                <p className='p-2'>0.041 ETH</p>
                </div>
                
                <div className="m-2">
                <img src={clock} alt="eth-photo" />
                <p className='p-3'>3 days left</p>
                </div>
      
            </div>

            <div className="line"></div>

            <div className="footer">
              <img src={Oval} alt="profile-photo" className='foto'/>

              <div className="parags">
              <p className='p-4'>Creation of</p>
              <p className='p-5'>Jules Wyvern</p>
              </div>
            </div>


        </div>
      </div>


    </>
  )
}

export default App
