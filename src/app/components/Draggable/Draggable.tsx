import React from 'react'
import { useDraggable } from '@dnd-kit/core'

interface DraggableProps {
  id: string;
  x: number;
  y: number;
  children: React.ReactNode;
  onChildClick: any;
  onChildEnter: any;
}

const Draggable: React.FC<DraggableProps> = ({ id, x, y, children, onChildClick, onChildEnter }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })

  const style = {
    transform: `translate3d(${x + (transform?.x || 0)}px, ${y + (transform?.y || 0)}px, 0)`,
    position: 'absolute' as const,
  }


  return (
    // eslint-disable-next-line
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} onClick={onChildClick} onKeyDown={onChildEnter}>
      {children}
    </div>
  )
}

export default Draggable
