import { useDrop } from 'react-dnd';
import Image from 'next/image';

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
        <div
          key={i}
          style={{
            position: 'absolute',
            top: item.y - 100,
            left: item.x - 100,
            width: 100,
            height: 100,
          }}
        >
          <Image
            src={item.src}
            alt={item.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
}
