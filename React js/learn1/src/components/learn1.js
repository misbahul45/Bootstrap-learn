import React from 'react';
import {FaTrashAlt} from 'react-icons/fa'

class Day1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [
        { id: 1, name: 'Apple', isAvailable: false },
        { id: 2, name: 'Banana', isAvailable: false },
        { id: 3, name: 'Orange', isAvailable: false },
        { id: 4, name: 'Strawberry', isAvailable: false },
        { id: 5, name: 'Grapes', isAvailable: false }
      ],
      countFruits:null,
    };
  }
  header() {
    return (
      <header className="text-center bg-amber-400 fixed top-0 left-0 w-full py-3">
        <h1 className=" text-blue-800 text-xl font-bold uppercase">Fruit List</h1>
      </header>
    );
  }


  content() {
    //chek item
    const checkItem=(id)=>{
      const listItems=[...this.state.item]
      listItems.map((item)=>{
        if(item.id===id){
          if(item.isAvailable===true){
           item.isAvailable=false
          }else{
            item.isAvailable=true            
          }
        }
    })
    this.setState({item:listItems})
    localStorage.setItem('fruitList',JSON.stringify(listItems))
    }

    const removeItem=(id)=>{
      const listItems=[...this.state.item]
     const updated= listItems.filter((item)=>item.id!==id)
      this.setState({
        item:updated,
        countFruits:updated.length})
      localStorage.setItem('fruitList',JSON.stringify(listItems))
    }


    const numItems=this.state.countFruits;

    const mainContent=()=>{
      if(numItems !==0){
        return(
          <ul>
            {this.state.item.map((item, index) =>(
              <li key={item.id} className="flex items-center px-2 py-5 w-80 h-20 bg-cyan-400 my-2 relative">
                  <input type="checkbox" checked={item.isAvailable}  className="w-8 h-8 cursor-pointer mr-6" onChange={()=>{
                    checkItem(item.id)
                  }}/>
                  <label 
                  className={`text-indigo-950 font-bold text-2xl ${item.isAvailable ? 'line-through text-thin italic' : ''}`}
                  onDoubleClick={()=>checkItem(item.id)}>
                  {item.name}
                  </label>
                  <FaTrashAlt role="button" tabIndex="0" className="absolute right-5 w-8 h-8 text-cyan-900 hover:text-red-900  ease-in duration-300" onClick={()=>{
                    removeItem(item.id)
                  }}/>
              </li>
            ))}
          </ul>
        )
      }
      return(
        <p className="text-lg text-gray-800 italic">Your Items is Empty</p>
      )
    }
    return (
      <main className="h-screen flex flex-col justify-center items-center">
      {mainContent()}
      </main>
    );
  }

  footer() {
    const today = new Date();
    return (
      <footer className=" text-center absolute bottom-0 left-0 w-full bg-blue-500 py-5">
        <p className=" font-bold text-red-200 text-sm ">Copyright &copy;{today.getFullYear()}</p>
      </footer>
    );
  }

  render() {
    return (
      <div>
        {this.header()}
        {this.content()}
        {this.footer()}
      </div>
    );
  }
}

export default Day1;


/*
ini kode yang mirip dengan kode contentku namus lebih efisien
content() {
  const checkItem = (id) => {
    this.setState((prevState) => {
      const updatedItems = prevState.item.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isAvailable: !item.isAvailable, // Toggle the 'isAvailable' value
          };
        }
        return item;
      });

      return {
        item: updatedItems,
      };
    });
  };

  // Rest of your content function...
}


*/