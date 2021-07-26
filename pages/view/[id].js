import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Item from '../../src/components/Item';

function About() {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  async function getData() {
    try {
      const { data } = await axios.get(API_URL);
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
}

export default About;
