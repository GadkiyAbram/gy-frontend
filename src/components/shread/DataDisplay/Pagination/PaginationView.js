import React from 'react';
import ReactPaginate from 'react-paginate';
import './styles.scss';
import PropTypes from "prop-types";

const PaginationView = (props) => {
    const {
        limit,
        total,
        handleChange
    } = props;

    return (
        <ReactPaginate
            pageCount={Math.ceil(total / limit)}
            breakLabel="..."
            pageRangeDisplayed={limit}
            onPageChange={handleChange}
            nextLabel="next >"
            previousLabel="< previous"
            containerClassName='pagination'
            pageLinkClassName='pageNum'
            previousClassName='pageNum'
            nextLinkClassName='pageNum'
            activeLinkClassName='pageNum'
        />
    );
}

PaginationView.propTypes = {
    limit: PropTypes.number,
    total: PropTypes.number,
    handleChange: PropTypes.func
}

export default PaginationView;