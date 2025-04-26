import { useDrag } from 'react-dnd';
import Image from 'next/image';

export default function DraggableItem({ item, onClick }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'clothing',
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      onClick={() => onClick(item)}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab' }}
    >
      <Image
        src={item.src}
        alt={item.name}
        width={100}
        height={100}
        className="clothingItem"
      />
    </div>
  );
}
