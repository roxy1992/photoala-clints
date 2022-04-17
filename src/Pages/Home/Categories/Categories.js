import React from 'react';

import categories1 from '../../../images/categories/categories-1.jpg';
import categories2 from '../../../images/categories/categories-2.jpg';
import categories3 from '../../../images/categories/categories-3.jpg';

import Category from '../Category/Category';

const categories = [
    { id: 1, name: 'Will Smith', img: categories1 },
    { id: 2, name: 'Birthday Party Shoot', img: categories2 },
    { id: 3, name: 'Birthday Party Shoot', img: categories3 },

]

const Categories = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'> Categories</h2>
            <div className="row">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;