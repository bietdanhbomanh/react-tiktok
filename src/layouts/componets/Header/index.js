import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEllipsisVertical,
    faGear,
    faLanguage,
    faMoneyBill,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import { DropMenu } from '~/components/Menu';
import { FlyIcon, MessageIcon, UpdateIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { ROUTES } from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        label: 'Ngôn ngữ',
        class: 'test',
        menu: {
            data: [
                { label: 'Tiếng anh', code: 'vi' },
                {
                    label: 'Tiếng việt',
                    code: 'en',
                    menu: {
                        data: [
                            { label: 'Nam', code: 'vi' },
                            { label: 'Bắc', code: 'en' },
                        ],
                    },
                },
                { label: 'Tiếng anh', code: 'vi' },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, label: 'Help and feedback' },
];

const USER_MENU = [
    { icon: <FontAwesomeIcon icon={faUser} />, label: 'Profile' },
    { icon: <FontAwesomeIcon icon={faGear} />, label: 'Setting' },
    { icon: <FontAwesomeIcon icon={faMoneyBill} />, label: 'Get coin' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, label: 'Log out', class: 'logout' },
];

function Header() {
    const Logo = images.logo;

    const user = false;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link className={cx('logo-link')} to={ROUTES.home}>
                    <Logo />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {user ? (
                        <>
                            <Tip content="Update Video" placement="bottom">
                                <div>
                                    <Button iconLeft={<UpdateIcon width={28} height={28} />} />
                                </div>
                            </Tip>
                            <Tip content="Inbox" placement="bottom">
                                <div>
                                    <Button
                                        children={<span className={cx('count')}>99+</span>}
                                        className={cx('message')}
                                        iconLeft={<MessageIcon width={28} height={28} />}
                                    />
                                </div>
                            </Tip>
                            <Tip content="Thông báo" placement="bottom">
                                <div>
                                    <Button iconLeft={<FlyIcon width={28} height={28} />} />
                                </div>
                            </Tip>
                        </>
                    ) : (
                        <>
                            <Button text target="_blank" children={'Upload'} />
                            <Button primary target="_blank" children={'Log in'} />
                        </>
                    )}
                    <DropMenu items={user ? USER_MENU : MENU_ITEMS}>
                        {user ? (
                            <Image
                                className={cx('avatar')}
                                src="https://lh3.googleusercontent.com/-oauOGfRGLBU/YkayObi8ECI/AAAAAAAA6uU/6hJIvhjz_74WHTMNvD7XRFdfiFK60tO1gCNcBGAsYHQ/s0/avatar-anime.jpg"
                                alt="name"
                                errorImg={images.noAvatar}
                            />
                        ) : (
                            <Button iconLeft={<FontAwesomeIcon icon={faEllipsisVertical} />} />
                        )}
                    </DropMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
