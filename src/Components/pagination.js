import React from 'react';
import {Link} from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} >
            <Link onClick={() => paginate(number)}  >
              {number}
            </Link>
          </li>
        ))}
      </ul>
  );
};

export default Pagination;