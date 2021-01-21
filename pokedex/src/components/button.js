import { Button as Container } from '../styles/styles';

function Button(props) {
  return (
    <Container onClick={props.onClick}>
      <span>{props.children}</span>
    </Container>
  );
}

export default Button;
