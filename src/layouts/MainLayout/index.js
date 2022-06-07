import { Fragment } from 'react';
import Header from '../componets/Header';
import Sidebar from './Sidebar';

import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div className={cx('main')}>{children}</div>
            </div>
        </Fragment>
    );
}

export default MainLayout;
