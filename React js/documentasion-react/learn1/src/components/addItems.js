import {FaPlus} from 'react-icons/fa'

function addItems({ addNewItem, setNewItem}){
    return(
        <form action="" className="AddFrom w-[600px] flex gap-2 justify-center items-center px-3 py-3" onSubmit={(e)=>{
            addNewItem(e)
            document.querySelector("#addItem").value=""
        }}>
            <label 
            htmlFor="AddItem" 
            className="uppercase text-blue-500 font-bold text-[17px]">
                Add Item        
            </label>
            <input
             type="text" 
             autoFocus 
             id="addItem" 
             placeholder="Add Item" 
             required className="px-2 py-1 w-[100px] border-b-[5px]  border-cyan-400 outline-none ease-in duration-300 text-cyan-700 font-semibold placeholder:text-blue-800 focus:w-[300px]"
             onChange={(e)=>{
                setNewItem(e.target.value)
             }} />
            <button
             type="submit" 
             aria-label="Add Item" 
             className=" bg-blue-500 p-3 hover:bg-blue-200 active:bg-red-600 rounded-sm"
             >
                <FaPlus />
            </button>
        </form>
    )
}
export default addItems;