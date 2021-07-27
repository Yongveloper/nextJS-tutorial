import { useRouter } from 'next/dist/client/router';
import { Menu } from 'semantic-ui-react';

function Gnb() {
  const router = useRouter();
  let activeItem = '';
  switch (router.pathname) {
    case '/':
      activeItem = 'home';
      break;
    case '/about':
      activeItem = 'about';
      break;
  }

  function goLink(event, data) {
    switch (data.name) {
      case 'home':
        router.push('/');
        break;
      case 'about':
        router.push('/about');
        break;
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={goLink}
      />
    </Menu>
  );
}

export default Gnb;
