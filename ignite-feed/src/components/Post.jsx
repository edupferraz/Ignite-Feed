import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/edupferraz.png" />
                <div className={styles.authorInfo}>
                <strong>Eduardo Ferraz</strong>
                <span>Web Developer</span>
                </div>
            </div>
    
            <time title="28 de Julho às 17:00" dateTime="2024-07-28 17:00:00">Publicado há 1h</time>
            </header>
  
            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 {} <a href="">{} jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a> {}
                <a href="">#rocketseat</a> 
            </p>
            </div>
        </article>

    )
}