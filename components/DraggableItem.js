import { useDrag } from 'react-dnd';
import '../styles/global.css'

export default function DraggableItem({ item, onClick }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'clothing',
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={dragRef}
      src={item.src}
      alt={item.name}
      onClick={() => onClick(item)}
      className={"clothingItem"}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    />
  );
}
