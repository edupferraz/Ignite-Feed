import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';

import styles from './App.module.css'

import './global.css'
import id from 'date-fns/esm/locale/id/index.js';

// Author { avatar_url; name; role}
// publishedAt: dat
// content: string

interface Post extends PostProps {
  id: number;
}

const posts:Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/edupferraz.png',
      name: 'Eduardo Ferraz',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Falaaa Devs 👋'},
      { type: 'paragraph', content: 'Acabei de subir um projeto que fiz na jornada Ignite da Rocketseat. O projeto é o Ignite Feed 🚀'},
      { type: 'paragraph', content: 'É uma novo projeto da jornada atualizada, revisamos diversos pilares do React e tivemos um gostinho de como é bom utilizar o TypeScript. Gostaram? 😉 '},
      { type: 'link', content: 'https://github.com/edupferraz/Ignite-Feed'},
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

