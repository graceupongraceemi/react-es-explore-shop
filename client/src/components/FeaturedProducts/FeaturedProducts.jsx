import React from 'react';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1007019/pexels-photo-1007019.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Skirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Hat',
      isNew: true,
      oldPrice: 19,
      price: 12
    }
  ];

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
      </div>
      <div className='bottom'></div>
    </div>
  );
};

export default FeaturedProducts;
