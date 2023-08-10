import React, { useState, useEffect } from 'react';

const items = [
  'https://e0.pxfuel.com/wallpapers/696/883/desktop-wallpaper-large-size-and-large-nature.jpg',
  'https://media.istockphoto.com/id/612223406/photo/thanksgiving-feast.jpg?s=612x612&w=0&k=20&c=N52x1xyDQpPWm-oH9YsJHeNEzth16LPQ8IKLO7ZFvWU=',
  'https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg',
  'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600'
]

const ArrayItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {

    if (!isHovering) {
       setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 1000);
    }

  }, [currentIndex, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <img style={{width:'100%',height:'50vh'}} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      src={items[currentIndex]}/>
    </div>
  );
};

export default ArrayItems;
