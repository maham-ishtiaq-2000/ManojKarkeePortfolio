import { CSSTransition } from 'react-transition-group';
import './Animation.css'
import Row from './Row';

function Animation() {
  return (
    <CSSTransition in={true} classNames="row" timeout={500}>
      <Row />
    </CSSTransition>
  );
}

export default Animation;