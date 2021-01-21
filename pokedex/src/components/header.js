import { useLocation, useHistory } from 'react-router-dom';
import { Header, Back } from '../styles/styles';

import ArrowLeftIcon from '../assets/img/arrowLeft.svg';

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const title = location.pathname.toLowerCase().split('/');
  const headerText = () => {
    if (title[1] === '') return <h2>POKEMON LIST</h2>;
    if (title[1] === 'pokemon-detail') return <h2>POKEMON DETAIL</h2>;
    if (title[1] === 'my-pokemon') return <h2>MY POKEMON LIST</h2>;
  };

  return (
    <Header>
      {title[1] === 'pokemon-detail' && (
        <Back onClick={() => history.goBack()}>
          <img src={ArrowLeftIcon} />
        </Back>
      )}
      {headerText()}
    </Header>
  );
}

export default Navbar;
