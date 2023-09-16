function footer({length}) {
    return (
      <footer className=" text-center absolute bottom-0 left-0 w-full bg-blue-500 py-5">
        <p className=" font-bold text-red-200 text-sm ">{length === 1 ?"item":"items"}</p>
      </footer>
    );
  }
export default footer;