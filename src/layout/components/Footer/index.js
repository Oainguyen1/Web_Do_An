import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}> 
      <div className={cx('footer-container')}>
        <div className={cx('footer-left')}>
          <p>
            "Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình"
            là sứ mệnh, là triết lý, chiến lược.. luôn cùng SALE tiến bước
          </p>
          <div className={cx('social-icons')}>
            <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="youtube-icon.png" alt="YouTube" /></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
          </div>
        </div>
        <div className={cx('footer-middle')}>
          <h4>VỀ SALE</h4>
          <ul>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Tuyển dụng</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Hệ thống cửa hàng</a></li>
            <li><a href="#">Hàng mới về</a></li>
            <li><a href="#">Hàng Outlet</a></li>
            <li><a href="#">Tin khuyến mãi</a></li>
            <li><a href="#">Đăng ký đối tác</a></li>
          </ul>
        </div>
        <div className={cx('footer-middle')}>
          <h4>HỖ TRỢ KHÁCH HÀNG</h4>
          <ul>
            <li><a href="#">Hướng dẫn Chọn size</a></li>
            <li><a href="#">Chính sách Khách hàng thân thiết</a></li>
            <li><a href="#">Chính sách Bảo hành, đổi/trả</a></li>
            <li><a href="#">Chính sách Thanh toán, giao nhận</a></li>
            <li><a href="#">Chính sách Đồng phục</a></li>
            <li><a href="#">Chính sách Bảo mật thông tin khách hàng</a></li>
            <li><a href="#">Chính sách Sử dụng Cookies</a></li>
          </ul>
        </div>
        <div className={cx('footer-right')}>
          <h4>CÔNG TY CP THỜI TRANG SALE</h4>
          <p>Mã số thuế: 0801206940</p>
          <p>Địa chỉ: Đường An Định - Phường Việt Hòa - Thành phố Hải Dương - Hải Dương</p>
          <p><a href="#">Tìm cửa hàng gần bạn nhất</a></p>
          <p>Liên hệ đặt hàng: 024 999 86 999</p>
          <p>Thắc mắc đơn hàng: 024 999 86 999</p>
          <p>Góp ý khiếu nại: 1800 2086</p>
          <p>Email: <a href="mailto:chamsockhachhang@sale.vn">chamsockhachhang@sale.vn</a></p>
          {/* <div className="certificates">
            <img src="dathongbao-icon.png" alt="Đã Thông Báo" />
            <img src="dmca-icon.png" alt="DMCA" />
            <img src="protected-icon.png" alt="Protected" />
          </div> */}
        </div>
      </div>
      <div className={cx('footer-bottom')}>
        <p>© SALE - Bản quyền thuộc về Công ty cổ phần thời trang SALE</p>
      </div>
    </footer>
  );
}

export default Footer;
