import classNames from 'classnames/bind';
import styles from './Product_detail.module.scss';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function Product_detail() {
    const [soLuong, setSoLuong] = useState(1);

    const thayDoiSoLuong = (thayDoi) => {
        setSoLuong((soLuongTruoc) => Math.max(1, soLuongTruoc + thayDoi));
    };

    return (
        <div className={cx('product-page')}>
            <div className={cx('image-gallery')}>
                <img src={`${process.env.PUBLIC_URL}/assets/a1.jpg`} alt="Main Product" className={cx('main-image')} />
                <div className={cx('thumbnail-list')}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/a2.jpg`}
                        alt="Thumbnail 1"
                        className={cx('thumbnail')}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/a3.jpg`}
                        alt="Thumbnail 2"
                        className={cx('thumbnail')}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/a4.jpg`}
                        alt="Thumbnail 3"
                        className={cx('thumbnail')}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/a5.jpg`}
                        alt="Thumbnail 4"
                        className={cx('thumbnail')}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/a6.jpg`}
                        alt="Thumbnail 5"
                        className={cx('thumbnail')}
                    />
                </div>
            </div>
            <div className={cx('product-details')}>
                <h3>Áo Polo nam</h3>
                <p>SKU: 123456789</p>
                <p>Áo Polo nam, kiểu dáng đơn giản, thoải mái, phù hợp mặc ở nhà, đi chơi, dạo phố.</p>
                <h4>Giá bán:</h4>
                <h2>399.000 ₫</h2>
                <div className={cx('color-options')}>
                    <p>Màu sắc: Navy</p>
                    <div className={cx('color-thumbnails')}>
                        <img src="path/to/navy.jpg" alt="Navy" />
                        <img src="path/to/orange.jpg" alt="Cam" />
                        <img src="path/to/green.jpg" alt="Xanh lá" />
                        <img src="path/to/black.jpg" alt="Đen" />
                        <img src="path/to/white.jpg" alt="Trắng" />
                    </div>
                </div>
                <div className={cx('size-options')}>
                    <p>Kích thước:</p>
                    <div className={cx('size-buttons')}>
                        <button className={cx('size-button')}>M</button>
                        <button className={cx('size-button')}>L</button>
                        <button className={cx('size-button')}>XL</button>
                        <button className={cx('size-button')}>2XL</button>
                        <button className={cx('size-button')}>3XL</button>
                    </div>
                </div>
                <div className={cx('quantity-selector')}>
                    <button onClick={() => thayDoiSoLuong(-1)}>-</button>
                    <span>{soLuong}</span>
                    <button onClick={() => thayDoiSoLuong(1)}>+</button>
                </div>
                <button className={cx('them-vao-gio')}>Thêm vào giỏ</button>
                <button className={cx('mua-ngay')}>Mua ngay</button>
            </div>
        </div>
    );
}

export default Product_detail;
