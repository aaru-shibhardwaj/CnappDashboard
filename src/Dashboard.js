import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddCategory from './AddCategory';
import Navbar from './Navbar';

const Dashboard = () => {
  const categories = useSelector(state => state.widgets.categories);

  return (
    <div className="relative">
      <div className='flex z-10 pt-5 bg-gradient-to-r from-blue-400 w-full'>
      <Navbar />
      </div>
      
      <div className="px-4 py-5 mt-16"> {/* Adjust the top margin to fit the Navbar height */}
        <AddCategory />
        {Object.keys(categories).map(category => (
          <Category key={category} name={category} widgets={categories[category]} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
