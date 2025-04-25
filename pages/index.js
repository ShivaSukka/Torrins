import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from '../components/DraggableItem';
import Cart from '../components/Cart';
import { useState } from 'react';
import '../styles/global.css'

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const items = [
    { name: 'Shirt', src: '/clothes/shirt.png' },
    { name: 'Pants', src: '/clothes/pants.png' },
    { name: 'shoe', src: '/clothes/shoe.jpg' },
    
    { name: 'top', src: '/clothes/top.jpg' },
    // Add more items
  ];

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleResetCart = () => {
    setCartItems([]);
  };

  const handleSaveOutfit = () => {
    alert('🎉 Outfit saved!');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className={"title"}>🧥 Outfit Builder</h1>

<div className={"container"}>
  <div className={"section"}>
    <h3>Clothing Items</h3>
    <div className={"section"}>
      {items.map((item, i) => (
        <DraggableItem key={i} item={item} onClick={handleAddToCart} />
      ))}
    </div>
  </div>

  <Cart
    cartItems={cartItems}
    onReset={handleResetCart}
    onSave={handleSaveOutfit}
  />
</div>

        
      
    </DndProvider>
  );
}
