import axios from 'axios';
import Head from 'next/head';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home | 용용</title>
        <meta name="description" content="용용" />
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const { data } = await axios.get(apiUrl);

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
