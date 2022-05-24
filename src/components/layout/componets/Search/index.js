import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import * as searchApi from '~/ApiServices/Search';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/Hook';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [input, setInput] = useState('');
    const [showList, setshowList] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(input, 500);

    const inputRef = useRef();
    useEffect(() => {
        if (debounce.trim()) {
            setLoading(true);
            searchApi.searchLess(
                debounce,
                (data) => {
                    setSearchResult(data);
                    setLoading(false);
                },
                (error) => {
                    setLoading(false);
                }
            );
        } else {
            setSearchResult([]);
        }
    }, [debounce]);

    function handleBlur() {
        setshowList(false);
    }

    return (
        <div>
            <Tippy
                onClickOutside={handleBlur}
                interactive
                visible={input && showList && searchResult.length > 0}
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('search-result')}>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((item, index) => (
                                <AccountItem key={index} data={item} />
                            ))}
                        </div>
                    </PopperWrapper>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={input}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onInput={(e) => setInput(e.target.value)}
                        onFocus={() => setshowList(true)}
                    />
                    {input && !loading && (
                        <FontAwesomeIcon
                            onClick={() => {
                                setInput('');
                                inputRef.current.focus();
                            }}
                            className={cx('clear')}
                            icon={faCircleXmark}
                        />
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>{<SearchIcon />}</button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
