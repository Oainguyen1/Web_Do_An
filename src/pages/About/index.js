import classNames from 'classnames/bind';
import styles from './About.module.scss';
import about from '~/assets/About/about.png';
import about2 from '~/assets/About/about.png';
import about3 from '~/assets/About/about.png';

const images = [
    { src: about, url: './' },
    { src: about2, url: './' },
    { src: about3, url: './' },
];

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>Giới thiệu</h1>
                <div className={cx('about-container')}>
                    <div className={cx('image-about')}>
                        {images.map((image, index) => (
                            <div key={index} className={cx('image-about')}>
                                <a href={image.url}>
                                    <img src={image.src} alt={`About ${index + 1}`} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
