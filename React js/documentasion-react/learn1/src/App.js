
import React from 'react';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';



function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', isAvailable: true },
    { id: 2, name: 'Banana', isAvailable: false },
    { id: 3, name: 'Orange', isAvailable: false },
    { id: 4, name: 'Strawberry', isAvailable: false },
    { id: 5, name: 'Grapes', isAvailable: false },
    { id: 6, name: 'Cherry', isAvailable: true },
    { id: 7, name: 'Watermelon', isAvailable: true },
    { id: 8, name: 'Mango', isAvailable: true },
    { id: 9, name: 'Pineapple', isAvailable: true },
    { id: 10, name: 'Kiwi', isAvailable: true },
    { id: 11, name: 'Peach', isAvailable: true },
    { id: 12, name: 'Plum', isAvailable: false },
    { id: 13, name: 'Pear', isAvailable: false },
    { id: 14, name: 'Lemon', isAvailable: false },
    { id: 15, name: 'Lime', isAvailable: false },
    { id: 16, name: 'Grapefruit', isAvailable: false },
    { id: 17, name: 'Blueberry', isAvailable: false },
    { id: 18, name: 'Raspberry', isAvailable: false },
    { id: 19, name: 'Cranberry', isAvailable: false },
    { id: 20, name: 'Blackberry', isAvailable: false }
  ]);
  const [countFruits, setCountFruits] = useState(null);
  const [newItem,setNewItem]=useState("")
  const checkItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isAvailable: !item.isAvailable };
      }
      return item;
    });

    setItems(updatedItems);
    localStorage.setItem('fruitList', JSON.stringify(updatedItems));
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
    setCountFruits(updatedItems.length);
    localStorage.setItem('fruitList', JSON.stringify(updatedItems));
  };
  const addNewItem=(e)=>{
    e.preventDefault();
  
    const newItemData = {
      id: items.length + 1,
      name: newItem,
      isAvailable: false,
    };
  
    const updatedItems = [...items, newItemData];
  
    setItems(updatedItems);
    localStorage.setItem('fruitList', JSON.stringify(updatedItems));
  
    setNewItem({ id: null, name: "", isAvailable: true });
  }


  return (
      <div className="h-screen">
        <Header />
      <Content  items={items} countFruits={countFruits} checkItem={checkItem} removeItem={removeItem} setNewItem={setNewItem} newItem={newItem} addNewItem={addNewItem}/>
      <Footer length={items.length}/>
      </div>
  );
}

export default App;
