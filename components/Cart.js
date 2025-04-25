import '../styles/global.css'

export default function Cart({ cartItems, onReset, onSave }) {
  return (
    <div className={"cartBox"}>
      <h3 className={"cartTitle"}>🛒 Cart</h3>

      <div className={"cartItems"}>
        {cartItems.map((item, i) => (
          <div key={i} className={"cartItem"} title={item.name}>
            <img src={item.src} alt={item.name} />
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
