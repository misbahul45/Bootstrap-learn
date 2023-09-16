
 function header({title}) {
    return (
      <header className="text-center bg-amber-400 fixed top-0 left-0 w-full py-3">
        <h1 className=" text-blue-800 text-xl font-bold uppercase">{title}</h1>
      </header>
    );
  }
  header.defaultProps={
    title:"Default"
  }
  export default header;