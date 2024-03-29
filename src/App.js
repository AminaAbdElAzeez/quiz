import { Fragment, useEffect, useMemo, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Game from './components/Game';
import Start from './components/Start';
import {data} from './Data/Data.jsx'

function App() {
  const [questionNumber,setQuestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const [earn,setEarn]=useState("$ 0")
  const [username,setUsername]=useState(null);

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(()=>{
    if(questionNumber > 1){
      setEarn(moneyPyramid.find((x)=> x.id === questionNumber - 1).amount);
    }
    if(questionNumber === 15){
      setEarn(moneyPyramid.find((x)=> x.id === questionNumber).amount);
    }
  },[questionNumber,moneyPyramid])

  return (
    <div className="app">
      { username ? (
        <Fragment>
          <div className='main'>
            {stop ? (<h1 className='end-text'>You earned: {earn}</h1>) :
              (
                <Fragment>
                  <div className='top'>
                    <div className='timer'>
                      <Timer setStop={setStop} questionNumber={questionNumber}/>
                    </div>
                  </div>
                  <div className='bottom'>
                    <Game data={data} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setStop={setStop}/>
                  </div>
                </Fragment>
              )
            }
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {
                moneyPyramid.map((m)=>(
                  <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                    <span className='moneyListItemNumber'>{m.id}</span>
                    <span className='moneyListItemAmount'>{m.amount}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </Fragment>
      ): (<Start setUsername={setUsername}/>)
    
    }
    </div>
  );
}

export default App;
