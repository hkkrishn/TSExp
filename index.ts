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
  console.log(todo);
  const {id,title,completed} = todo;
  console.log(`The id is ${id} with ${title} and it is ${completed}`);
})