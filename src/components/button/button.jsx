import cls from 'classnames';
import styles from './button.module.css';

const Button = ({ text, propStyle, href, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={cls(styles.btn, styles.btn_bricks, propStyle)}
    >
      {text}
    </button>
  );
};

export default Button;
