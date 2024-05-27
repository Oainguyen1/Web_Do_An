import classNames from 'classnames/bind';
import styles from './Boy.module.scss';

const cx = classNames.bind(styles);

function Boy() {
    return (
        <div className={cx('wrapper')}>
            <h1>Boy</h1>
        </div>
    );
}

export default Boy;
