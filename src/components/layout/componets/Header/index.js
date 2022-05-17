import classNames from 'classnames/bind';

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

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        label: 'Ngôn ngữ',
        menu: {
            label: 'Ngôn ngữ',
            data: [
                { label: 'Tiếng anh', code: 'vi' },
                {
                    label: 'Tiếng việt',
                    code: 'en',
                    menu: {
                        label: 'Địa Phương',
                        data: [
                            { label: 'Nam', code: 'vi' },
                            { label: 'Bắc', code: 'en' },
                        ],
                    },
                },
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

    const user = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Logo />

                <Search />

                <div className={cx('actions')}>
                    {user ? (
                        <>
                            <Tip content="Update Video" placement="bottom">
                                <Button iconLeft={<UpdateIcon width={28} height={28} />} />
                            </Tip>
                            <Tip content="Inbox" placement="bottom">
                                <Button
                                    children={<span className={cx('count')}>99+</span>}
                                    className={cx('message')}
                                    iconLeft={<MessageIcon width={28} height={28} />}
                                />
                            </Tip>
                            <Tip content="Thông báo" placement="bottom">
                                <Button iconLeft={<FlyIcon width={28} height={28} />} />
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
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100100/tos-alisg-avt-0068/16dc885acf7fe0e3ba158fdd73e5fadd.jpeg?x-expires=1652670000&x-signature=ETiSVw7aLjkfUiM4pJ8dLj0M%2BM0%3D"
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
