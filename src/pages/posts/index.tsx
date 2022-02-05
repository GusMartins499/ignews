import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>
    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>12 de Março de 2021</time>
          <strong>Creating a monorepo with Javacript</strong>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum rem aliquid harum eos et, ratione neque, suscipit, magnam libero facilis non deserunt molestiae quidem laboriosam vitae. Praesentium natus expedita odio?</p>
        </a>
        <a href="#">
          <time>12 de Março de 2021</time>
          <strong>Creating a monorepo with Javacript</strong>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum rem aliquid harum eos et, ratione neque, suscipit, magnam libero facilis non deserunt molestiae quidem laboriosam vitae. Praesentium natus expedita odio?</p>
        </a>
        <a href="#">
          <time>12 de Março de 2021</time>
          <strong>Creating a monorepo with Javacript</strong>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum rem aliquid harum eos et, ratione neque, suscipit, magnam libero facilis non deserunt molestiae quidem laboriosam vitae. Praesentium natus expedita odio?</p>
        </a>
      </div>
    </main>
    </>
  );
}