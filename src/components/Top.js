import Image from 'next/image';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

function Top() {
  return (
    <>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <Image src="/images/test.png" alt="logo" width={100} height={100} />
        </div>
        <Header as="h1">용용</Header>
      </div>
      <Gnb />
    </>
  );
}

export default Top;
