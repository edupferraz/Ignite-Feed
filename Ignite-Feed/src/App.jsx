import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>

      <Header/>

    <div className={styles.wrapper}>

        <Sidebar/>
        
        <main>

          <Post 
            author="Eduardo Ferraz" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
          />

          <Post 
            author="Diego Fernandes"
            content="This is a React program"
          />
        </main>
    </div>

    </div>

  )
}

