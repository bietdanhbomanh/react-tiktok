import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    iconLeft,
    iconRight,
    size,
    rouded,
    border,
    className,
    disable,
    text,
    primary,
    children,
    ...other
}) {
    let Type = 'button';
    const props = {
        onClick,
        ...other,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (
                key.startsWith('on') ||
                key.startsWith('to') ||
                (key.startsWith('href') && typeof props[key] === 'function')
            ) {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Type = Link;
    } else if (href) {
        props.href = href;
        Type = 'a';
    }

    return (
        <Type className={cx('wrapper', size, className, { primary, border, rouded, text, disable })} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            {typeof children === 'string' ? <span className={cx('title')}>{children}</span> : children}
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Type>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    size: PropTypes.string,
    rouded: PropTypes.bool,
    border: PropTypes.bool,
    className: PropTypes.string,
    disable: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    children: PropTypes.node,
};

export default Button;
