import { GetStaticProps } from "next";
import Head from "next/head";
<<<<<<< HEAD
import Link from "next/link";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
=======
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

>>>>>>> 3be18b8a1250e36d4516632a56ec9bf65e633db8
import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface IProps {
  posts: Post[]
}

export default function Posts({ posts }: IProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
<<<<<<< HEAD
            <Link href={`/posts/${post.slug}`}>
              <a key={post.slug}>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
=======
            <a key={post.slug} href="#">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
>>>>>>> 3be18b8a1250e36d4516632a56ec9bf65e633db8
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query<any>([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find((content) => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })
  return {
    props: {
      posts
    }
  }
}