import { Post } from './components/posts'

import phone from './assets/phone.svg';
import boris from './assets/boris.svg';
import client from './assets/client.svg';
import protect from './assets/protect.svg';
import cardCar from './assets/cardCar.svg';

import './App.css';
import './global.css';

function App() {
  var messages = [
    {
      photo: client,
      text: 'Boris estou no local já lhe esperando. estou com camisa azul e calça jeans',
      trash: true
    },
    {
      photo: boris,
      text: 'Acabei de lhe ver. Vou estacionar o carro próximo.',
      trash: true
    },
  ]

  return (
    <div className='allContainer'>
      <div className='container'>
        <div className='top'>.</div>
        <main>
          <aside className='top-container'>
            <p className='text-title'>Encontre <a>Fábio</a> no local de partida</p>
            <p className='text-subtitle'>Chega em 3 minutos (800 metros)</p>
          </aside>
          <div className='carInfo'>
            <img src={cardCar} alt="" />
            <aside >
              <p className='plateCar'>BCD0D19</p>
              <p className='plateInfo'>Honda Civic Roxo</p>
            </aside>
          </div>
          <div className='messageInfo'>
            <input type="text" placeholder={'Enviar mensagem para Boris...'} />
            <button>Publicar</button>
            <img src={phone} alt="" />
            <img src={protect} alt="" />
          </div>
          <Post
            messages={messages}
          />
        </main>
      </div>
    </div>
  )
}

export default App
