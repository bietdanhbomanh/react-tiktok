import { Fragment } from 'react';
import Header from '../componets/Header';

function UpdateLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className="main">{children}</div>
        </Fragment>
    );
}

export default UpdateLayout;
