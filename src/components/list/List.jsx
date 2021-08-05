function List({ text }) {
  return(
    <div>
      {
        text.map((todo)=>{
          return(
            <div key = todo.id >{todo.text}<div>
          )
        })
      }
    </div>
  )
  }

export default List;
