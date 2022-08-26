import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

    const [item, setvalue] = useState(Array(9).fill(null));
    const [sow, setsow] = useState(true);

    const i = (index) => {
        item[index] = sow ? 'X' : '0'
        setvalue(item);
        setsow(!sow);
        console.log(item);
    }

    return (
        <>

            <div className='main'>
                <div className='parent dm'>
                    <input type="button" value={item[0]} className='btn left' onClick={() => i(0)} />
                    <input type="button" value={item[1]} className='btn' onClick={() => i(1)} />
                    <input type="button" value={item[2]} className='btn' onClick={() => i(2)} />
                </div>
                <div className='parent'>
                    <input type="button" value={item[3]} className='btn left' onClick={() => i(3)} />
                    <input type="button" value={item[4]} className='btn' onClick={() => i(4)} />
                    <input type="button" value={item[5]} className='btn' onClick={() => i(5)} />
                </div>
                <div className='parent'>
                    <input type="button" value={item[6]} className='btn left down' onClick={() => i(6)} />
                    <input type="button" value={item[7]} className='btn down' onClick={() => i(7)} />
                    <input type="button" value={item[8]} className='btn down' onClick={() => i(8)} />
                </div>
                <div className='new_btn'>
                    <input type="button" value="New Game" className='btn_new' />
                </div>
            </div>

        </>
    );
}

export default App;
