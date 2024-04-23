import React from "react";
import getPageArray from '../../../utils/arrayForPages';

export default function Pagination({ totalPages, page, changePage }) {
    const pageArray = getPageArray(totalPages);
    return (
        <div className='page__wrapper'>
            {pageArray.map(p =>
                <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page__current' : 'page'}>{p}</span>
            )}
        </div>
    )
};
