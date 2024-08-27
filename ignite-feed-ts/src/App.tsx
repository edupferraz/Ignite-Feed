import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role: ""}
// publisheadAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/edupferraz.png',
      name: 'Eduardo Ferraz',
      role: 'Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-25 15:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/edupferraz.png',
      name: 'Eduardo Ferraz',
      role: 'Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-25 15:30:00'),
  },
];


function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>

          {

            // forEach no return
            posts.map(post => {
              return (
                <Post
                  key={post.id} 
                  post={post}
                />
              )
            })

          }
        </main>

      </div>
    </div>
  )
}

export default App
