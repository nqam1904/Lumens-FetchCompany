import './App.scss';
import { images } from './assets';
import { Header, Item, Available, Naviagation } from './components';
const data = [
  {
    id: 0,
    description: "50% discount for every $100 top-up on your Shell Petrol Card",
    image: images.item1,
    coins: "15"
  },
  {
    id: 1,
    description: "70% discount top-up on your Shell Petrol Card",
    image: images.item1,
    coins: "1000",
    note: "Insufficient coins"
  },

]
const data1 = [
  {
    id: 0,
    description: "50% discount for every $100 top-up on your Shell Petrol Card",
    image: images.item2,
    coins: "15"
  },
  {
    id: 1,
    description: "70% discount top-up on your Shell Petrol Card",
    image: images.item3,
    coins: "1000",
    note: "Insufficient coins"
  },

]
const data2 = [
  {
    id: 0,
    description: "50% discount for every $100 top-up on your Shell Petrol Card",
    image: images.item3,
    coins: "15"
  },
  {
    id: 1,
    description: "70% discount top-up on your Shell Petrol Card",
    image: images.item4,
    coins: "1000",
    note: "Insufficient coins"
  },

]
const App = () => {
  return (
    <div className="app">
      <div className='main'>
        <Header />
        <Available />
        {/* Petrol */}
        <div className='section section_index'>
          <p className='title'>Petrol</p>
          <div className='item_section'>
            {data.map(item => (
              <Item
                key={item.id}
                coins={item.coins}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/* Rental Rebate */}
        <div className='section'>
          <p className='title'>Rental Rebate</p>
          <div className='item_section'>
            {data1.map(item => (
              <Item
                key={item.id}
                coins={item.coins}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/* Food and Beverage */}
        <div className='section item_last'>
          <p className='title'>Food and Beverage</p>
          <div className='item_section '>
            {data2.map(item => (
              <Item
                key={item.id}
                coins={item.coins}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <Naviagation />
      </div>
    </div>
  );
}

export default App;
