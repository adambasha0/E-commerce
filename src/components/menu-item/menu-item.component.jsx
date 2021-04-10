import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

// functional component Menuitem which includes main components inside each menu
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>

    </div>
);

//ppowering up MenuItem function to give it access to  location, match, history props
export default withRouter(MenuItem);