import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/components/Footer';
import Top from '../src/components/Top';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: '0 auto' }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

/**
 * 페이지 전환 시 레이애웃을 유지할 수 있음.
 * 페이지 전환 시 상태값을 유지할 수 있음.
 * componentDidcatch를 이용해서 커프텀 에러 핸들링을 할 수 있음.
 * 추가적인 데이터를 페이지로 주입 시켜주는 게 가능함.
 * 글로벌 CSS는 이곳에 선언함.
 */
