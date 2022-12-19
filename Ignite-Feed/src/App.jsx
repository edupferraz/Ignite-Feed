import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css'

import './global.css'

// Author { avatar_url; name; role}
// publishedAt: dat
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/edupferraz.png',
      name: 'Eduardo Ferraz',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-29 06:21:00')
  },
];

export function App() {

  return (
    <div>

      <Header/>

    <div className={styles.wrapper}>

        <Sidebar/>
        
        <main>

          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
    </div>

    </div>

  )
}

