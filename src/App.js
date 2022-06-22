import './App.css';
import Sidebar from './Sidebar';
import Card from './Card';
import Data from './data'
import {useState} from "react";




function App() {
  
const [card, setCard] = useState(Data)

const maleHandler = () => {
  const filteredArray = card.filter(item => item.gender === 'male')
  setCard(filteredArray)
}
const femaleHandler =() => {
  const filteredArray = card.filter(item => item.gender === 'female')
  setCard(filteredArray)
}
const allHandler =() => {
  setCard(Data)
}
 
  const elements = card.map((element) => {
    return (
        <Card key={element.id}
              items={element}
        />
    )
  });

  return (
    <div className="App">
      <aside className="sideBar row m-0">
        <Sidebar handleClick1={maleHandler} handleClick2={femaleHandler} handleClick3={allHandler}/>
        <div className='col-12 col-md-9 col-lg-10'>
            <div className='row m-0'>
                {elements}
            </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
