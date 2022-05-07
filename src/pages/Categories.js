import React from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusCategories } from '../redux/Categories/Categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategories = () => {
    dispatch(checkStatusCategories('Under construction'));
  };

  return (
    <>
      <div>
        <div>
          <h2>Categories</h2>
          <ul>
            {categories.map((item) => (
              <li key={uuid()}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="Categories-content">
          <button type="button" onClick={() => handleCategories()}>
            Check Status
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;
