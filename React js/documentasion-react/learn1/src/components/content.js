import ItemList from './itemList';
import AddItems from './addItems';
function Content({items, checkItem, countFruits, removeItem, newItem,setNewItem, addNewItem}) {
  const numItems = countFruits;
 
  const mainContent = () => {
    if (numItems !== 0) {
      return (
     <ItemList items={items} checkItem={checkItem} removeItem={removeItem}/>
      );
    }
    return (
      <p className="text-lg text-gray-800 italic">Your Items is Empty</p>
    );
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <AddItems setNewItem={setNewItem} newItem={newItem} addNewItem={addNewItem}/>
      {mainContent()}
    </main>
  );
}

export default Content;

  
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