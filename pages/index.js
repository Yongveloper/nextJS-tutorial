import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';
import Loading from '../src/components/Loader';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  async function getData() {
    try {
      const { data } = await axios.get(API_URL);
      console.log(data);
      setList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | 용용</title>
        <meta name="description" content="용용" />
      </Head>
      {isLoading && <Loading />}
      {!isLoading && (
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
      )}
    </div>
  );
}
