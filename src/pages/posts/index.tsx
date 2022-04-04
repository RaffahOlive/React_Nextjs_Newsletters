import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts()
{
    return (
        <>
            <Head>
                <title>Post | Ignews</title>
            </Head>

            <main className={ styles.container }>
                <div className={ styles.posts }>
                    <a href="#">
                        <time>04 de abril de 2022</time>
                        <strong>Titulo</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                    </a>
                    <a href="#">
                        <time>04 de abril de 2022</time>
                        <strong>Titulo</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                    </a>
                    <a href="#">
                        <time>04 de abril de 2022</time>
                        <strong>Titulo</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                    </a>
                </div>
            </main>
        </>
    );
}