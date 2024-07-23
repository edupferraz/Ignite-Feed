import { Header } from './components/Header'
import { Post } from './Post'

import './global.css';

function App() {

  return (
    <div>
      <Header/>

      <Post
        author="Diego Fernandes"
        content="Lorem"
      />
    </div>
  )
}

export default App
