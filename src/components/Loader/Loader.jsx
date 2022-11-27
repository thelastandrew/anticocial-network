import s from './Loader.module.css';
import loader from './loader.gif';

const Loader = () => <img className={s.loader} src={loader} alt='loader'/>;

export default Loader;