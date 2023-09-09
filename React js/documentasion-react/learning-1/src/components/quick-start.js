import React from 'react'
 class Day1 extends React.Component{

    header(){
        return(
            <h1 className="text-center text-sky-700">Grocries List</h1>
        )
    }
   content(){
        const handleName=()=>{
            const name=["Misbahul","Muttaqin","Knixxen"]
            const int=Math.floor(Math.random()*3);
            return name[int]
        }
        return(
            <> 
                <div className="text-center">
                    <p className="text-purple-700">
                        Hallo My Name is {handleName()}
                    </p>
                </div>
            </>
            )
    }
    render(){
        return(
        <div>
            {this.header()}
            {this.content()}
         </div>
        )
    }

}

export default Day1;

