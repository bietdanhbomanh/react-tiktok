import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Drop({ children, items }) {
    const [current, setCurrent] = useState([{ menu: { data: items } }]);

    function renderMenu() {
        return current[current.length - 1].menu.data.map((item, index) => (
            <Button
                onClick={() => {
                    if (item.menu) {
                        setCurrent((prev) => [...prev, item]);
                    }
                }}
                className={cx('drop-item', item.class)}
                to={item.to}
                iconLeft={item.icon}
                key={index}
                children={item.label}
            ></Button>
        ));
    }

    function backMenu() {
        setCurrent((prev) => prev.slice(0, prev.length - 1));
    }

    function resetMenu() {
        setCurrent([current[0]]);
    }

    return (
        <Tippy
            onHidden={resetMenu}
            hideOnClick={false}
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 12]}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('drop-menu')}>
                        {current[current.length - 1].label && (
                            <div onClick={backMenu} className={cx('drop-title')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                                </span>
                                <span>{current[current.length - 1].label}</span>
                            </div>
                        )}
                        <div className={cx('wrap-list')}>{renderMenu()}</div>
                    </div>
                </PopperWrapper>
            )}
        >
            <div className={cx('wrap-avatar')}>{children}</div>
        </Tippy>
    );
}

Drop.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
};

export default Drop;
