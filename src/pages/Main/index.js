import React, { useState } from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Cardcomponent from '../../components/Card';
import cards from '../../cards';
import Congrats from '../../assets/congrats.png'


function Main() {

  const [stateCards, setStateCards] = useState([...cards]);



  return (
    <div
      className='container'
    >
      <div>
        <Sidebar
          cards={cards}
          setStateCards={setStateCards}
        />
      </div>
      <div
        className='display-cards'
      >
        {stateCards.length ? stateCards.map(card => (
          <Cardcomponent
            className="card"
            key={card.id}
            card={card}
            stateCards={stateCards}
            setStateCards={setStateCards}
          />
        ))
          :
          <img src={Congrats} alt='Congrats'
          />
        }
      </div>


    </div>


  );
}

export default Main;
