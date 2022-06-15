import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { ROUTES } from '~/config';
import { HomeIcon, LiveIcon, MultiUserIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('wrapper')}>
            <Button
                navlink
                navActiveClass={cx('active')}
                to={ROUTES.home}
                className={cx('menu-item')}
                classForIcon={cx('icon')}
                iconLeft={<HomeIcon width={32} height={32} />}
            >
                Dành cho bạn
            </Button>
            <Button
                navlink
                navActiveClass={cx('active')}
                to={ROUTES.following}
                className={cx('menu-item')}
                classForIcon={cx('icon')}
                iconLeft={<MultiUserIcon width={32} height={32} />}
            >
                Đang Follow
            </Button>
            <Button
                navlink
                navActiveClass={cx('active')}
                to={ROUTES.live}
                className={cx('menu-item')}
                classForIcon={cx('icon')}
                iconLeft={<LiveIcon width={32} height={32} />}
            >
                LIVE
            </Button>
        </div>
    );
}

export default Menu;
