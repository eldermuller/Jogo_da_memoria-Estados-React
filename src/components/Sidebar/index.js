import './style.css';
import Logo from '../../assets/logo.svg';

function Sidebar({ setStateCards, cards }) {

    function handleReset() {
        cards.forEach((card) => {
            card.turned = false;
        });

        setStateCards(cards);

    }

    return (
        <div className='sidebar'>
            <img src={Logo} alt='Logo' />
            <div>
                <button
                    onClick={() => handleReset()}
                >RESET
                </button>
            </div>
        </div>
    )
}

export default Sidebar;