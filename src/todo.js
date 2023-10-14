import React, { Component } from 'react'

export class todo extends Component {

    state={
        favItem:"",
        ListOfFav:[]
    }

    favouriteStore=(e)=>{
        this.setState({favItem:e.target.value});
        // console.log("entered value",e.target.value);
    }
    addItems=()=>{
        var copyofList = [...this.state.ListOfFav];
        copyofList.push(this.state.favItem);
        this.setState({ListOfFav:copyofList});
    }

  render() {
    return (
      <>
        <input type='text' placeholder='enter Your favourite' onChange={(e)=>this.favouriteStore(e)}></input>
        <button onClick={()=>this.addItems()}>Submit</button>
        {
            JSON.stringify(this.state)
        }
        <ol>
        {
            this.state.ListOfFav.map((items,i) =>
            {
                
                return<li key={i}>{items}</li>
            
            }
            
            )
        }
        </ol>
      </>
    )
  }
}

export default todo
