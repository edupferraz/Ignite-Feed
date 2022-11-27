import { Header } from './components/Header';
import { Post } from './Post';

export function App() {

  return (
    <div>

      <Header/>

      <Post 
        author="Eduardo Ferraz" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
      />
      <Post 
        author="Diego Fernandes"
        content="This is a React program"
      />
      <Post />
      <Post />
    </div>

  )
}

