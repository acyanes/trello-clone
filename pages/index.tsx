import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import Boards from './boards';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>
      <Head>
        <title>TRELLO CLONE</title>
      </Head>
      <main>
        <h1>Aarons Board</h1>
        <Container>
          <Sidebar />
          <Boards />
        </Container>
      </main>
    </>
  );
}
