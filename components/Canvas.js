import { useDrop } from 'react-dnd';

export default function Canvas({ canvasItems, onDrop }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'clothing',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      onDrop(item, offset);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      style={{
        height: '500px',
        width: '400px',
        border: '2px dashed #aaa',
        position: 'relative',
        background: isOver ? '#f0f0f0' : '#fff',
      }}
    >
      {canvasItems.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt={item.name}
          style={{
            position: 'absolute',
            top: item.y - 100,
            left: item.x - 100,
            width: 100,
          }}
        />
      ))}
    </div>
  );
}
