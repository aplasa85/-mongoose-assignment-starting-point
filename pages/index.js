import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyHeading>Ceci n`est pas une pipe!</MyHeading>

      <div>
        <Link href="/products">Links</Link>
      </div>
    </div>
  );
}


const MyHeading = styled.h1`
  color: green;
`;
