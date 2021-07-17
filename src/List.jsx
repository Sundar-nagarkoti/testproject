import React from 'react';

class List extends React.Component{
    state={
        AnimalList:[],
        table:false,
    }

    componentDidMount(){
        fetch("/list").then((res)=>{
           return res.json()
        }).then((el)=>{
          this.setState({AnimalList:el});
        })
      }


    render(){
        let List=this.state.AnimalList;
        let AnimalType=[];
        let breed=[];
        return(
<div className="row">
    <div className="col-3 m-3">
       <div class="input-group mb-3">
       <input type="text" class="form-control"/>
       <button class="btn btn-outline-secondary" type="button" id="button-addon2">City</button>
       </div>
     </div>
     <div className="col-3 m-3">
     <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        {
    List.map((e)=>{
        return (
            <option>{e.animal}</option>
        );
    })
}
     </select>
     </div>
     <div className="col-3 m-3">
     <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        {
    List.map((e)=>{
        return (
            <option>{AnimalType=e.breed}</option>
        );
    })
   
}
     </select>
     </div>
     <div className="col-1 m-3">
     <button type="button" class="btn btn-primary" onClick={()=>{
        this.state.table=true;
     }}>Submit</button>
     </div>
     <div className="row">
         <div className="col-1"></div>
         
  <div className="col-10 p-4">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">City</th>
      <th scope="col">PetName</th>
      <th scope="col">AnimalType</th>
      <th scope="col">Bread</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
  </table>
         </div>
     </div>    
</div>
        );
    }
}

export default List;

