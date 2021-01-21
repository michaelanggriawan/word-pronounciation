import { Footer as Container } from '../styles/styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container>
      <Link to='/' className="link">
        <a>HOME</a>
      </Link>
      <div className="line-up" />
      <Link to='/my-pokemon' className="link">
        <a>MY POKEMON</a>
      </Link>
    </Container>
  );
}

export default Footer;
