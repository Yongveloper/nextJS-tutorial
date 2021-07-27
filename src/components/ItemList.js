import Image from 'next/image';
import Link from 'next/link';
import { Grid } from 'semantic-ui-react';
import style from '../../styles/ItemList.module.css';

function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/detail/${item.id}`}>
                <a>
                  <div className={style.wrap}>
                    <div className={style.img_item}>
                      <Image
                        src={item.image_link}
                        alt={item.name}
                        width={150}
                        height={150}
                      />
                    </div>
                    <strong className={style.tit_item}>{item.name}</strong>
                    <span className={style.txt_item}>
                      {item.category} {item.product_type}
                    </span>
                    <br />
                    <strong className={style.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ItemList;
