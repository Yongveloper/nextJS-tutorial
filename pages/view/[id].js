import axios from 'axios';
import Head from 'next/head';
import Item from '../../src/components/Item';
import Loading from '../../src/components/Loader';

function About({ item, name }) {
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

export async function getServerSideProps(context) {
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
