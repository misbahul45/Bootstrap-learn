import { FaTrashAlt } from 'react-icons/fa';
function lineItems({item, checkItem, removeItem}){
    return(
        <li key={item.id} className="flex items-center px-2 py-5 w-80 h-14 bg-cyan-400 my-2 relative">
        <input
          type="checkbox"
          checked={item.isAvailable}
          className="w-8 h-8 cursor-pointer mr-6"
          onChange={() => {
            checkItem(item.id);
          }}
        />
        <label
          className={`text-indigo-950 font-bold text-2xl ${item.isAvailable ? 'line-through text-thin italic' : ''}`}
          onDoubleClick={() => checkItem(item.id)}
        >
          {item.name}
        </label>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          aria-label="Delete"
          className="absolute right-5 w-8 h-8 text-cyan-900 hover:text-red-900 ease-in duration-300"
          onClick={() => {
            removeItem(item.id);
          }}
        />
      </li>
    )
}
export default lineItems;