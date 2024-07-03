import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id:number,
  title:string,
  completed: boolean
}

//interfaces in typescript are used to define the structure of our objects

axios.get(url).then((res)=>{
  const todo = res.data as Todo;
  const {id,title,completed} = todo;
  logTodo(id,title,completed);
})

//function to log
//added type annotations in order make order of params
const logTodo = (id:number,title:string,completed:boolean) =>{
  console.log(`The id is ${id} with ${title} and it is ${completed}`);console.log(`The id is ${id} with ${title} and it is ${completed}`);
}