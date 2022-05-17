import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button(
    {
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
    },
    ref
) {
    let Type = 'button';
    const props = {
        onClick,
        ...other,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            console.log(key.startsWith('on'));
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
        <Type
            ref={ref}
            className={cx('wrapper', size, className, { primary, border, rouded, text, disable })}
            {...props}
        >
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            {typeof children === 'string' ? <span className={cx('title')}>{children}</span> : children}
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Type>
    );
}

export default forwardRef(Button);
