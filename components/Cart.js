import Image from 'next/image';

export default function Cart({ cartItems, onReset, onSave }) {
  return (
    <div className={"cartBox"}>
      <h3 className={"cartTitle"}>🛒 Cart</h3>

      <div className={"cartItems"}>
        {cartItems.map((item, i) => (
          <div key={i} className={"cartItem"} title={item.name}>
            <Image
              src={item.src}
              alt={item.name}
              width={80}
              height={80}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      <div className={"cartButtons"}>
        <button onClick={onSave}>💾 Save Outfit</button>
        <button onClick={onReset}>♻️ Reset</button>
      </div>
    </div>
  );
}
