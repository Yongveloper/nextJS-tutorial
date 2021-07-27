import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Item from '../../src/components/Item';
import Loader from '../../src/components/Loader';

function About({ item, name }) {
  const router = useRouter();
  if (router.isFallback) return <Loader />;
  // if (!item) return null;

  return (
    item && (
      <>
        <Head>
          <title>{item.name}</title>
          <meta name="description" content={item.description} />
        </Head>
        {name} 환경 입니다.
        <Item item={item} />
      </>
    )
  );
}

export default About;

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const { data } = await axios.get(apiUrl);
  return {
    // paths: [
    //   { params: { id: '740' } },
    //   { params: { id: '730' } },
    //   { params: { id: '728' } },
    // ],
    paths: data.slice(0, 9).map((item) => {
      return {
        params: {
          id: item.id.toString(),
        },
      };
    }),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const { data } = await axios.get(apiUrl);

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
