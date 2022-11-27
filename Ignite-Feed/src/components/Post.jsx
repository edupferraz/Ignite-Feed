import styles from './Post.module.css';

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/edupferraz.png" alt="Avatar" />
                    <div className={styles.authorInfo}>
                        <strong>Eduardo Ferraz</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="27 de Novembro às 18:38" dateTime="2022-11-27 18:38:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href='#'>jane.design/doctorcare</a></p>

                <p> <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>

            </div>
        </article>
    )
}