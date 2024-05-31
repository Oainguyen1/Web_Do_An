import classNames from 'classnames/bind';
import styles from './SaleUp.module.scss';
import saleIcon from '~/assets/Logo/sale_icon.png';
import banner from '~/assets/Banner/flash_sale_banner.png';
import Produce from '~/assets/SaleProduce/produce.png';
import Produce2 from '~/assets/SaleProduce/produce2.png';
import Produce3 from '~/assets/SaleProduce/produce3.png';
import Produce4 from '~/assets/SaleProduce/produce4.png';
import Produce5 from '~/assets/SaleProduce/produce5.png';

const cx = classNames.bind(styles);

const produceData = [
    {
        src: Produce,
        title: 'Áo chống nắng đa năng Anti UV - Versatile',
        url: '/ao',
        price: '100,000 VND',
        previousPrices: '140,000VND',
    },
    { src: Produce2, title: 'Áo 2', url: '/ao2', price: '200,000 VND', previousPrices: '140,000VND' },
    { src: Produce3, title: 'Áo 3', url: '/ao3', price: '300,000 VND', previousPrices: '140,000VND' },
    { src: Produce4, title: 'Áo 4', url: '/ao4', price: '400,000 VND', previousPrices: '140,000VND' },
    { src: Produce5, title: 'Áo 2', url: '/ao2', price: '200,000 VND', previousPrices: '140,000VND' },
];

function SaleUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <img src={saleIcon} alt="" />
                    <h1>Sale Up 30%</h1>
                </div>
                <div className={cx('banner')}>
                    <img src={banner} alt="" />
                </div>
                <div className={cx('title-block')}>
                    <h1>Đề Xuất Dành Cho Bạn</h1>
                </div>
                <div className={cx('image-container')}>
                    <div className={cx('images-produce')}>
                        {produceData.map((item, index) => (
                            <div key={index} className={cx('produce-item')}>
                                <img src={item.src} alt={`Produce ${index + 1}`} />
                                <a href={item.url}>
                                    <h3>{item.title}</h3>
                                </a>
                                <div className={cx('price-container')}>
                                    <span className={cx('discounted-price')}>{item.price}</span>
                                    <span className={cx('original-price')}>{item.previousPrices}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleUp;
