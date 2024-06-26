import React, { useState } from 'react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import Draggable from '../Draggable/Draggable'
import styles from './Canvas.module.css'

interface StickyNote {
  id: string;
  x: number;
  y: number;
}

const Canvas: React.FC = () => {
  const [items, setItems] = useState<StickyNote[]>([
    { id: 'Note 1', x: 50, y: 50 },
    { id: 'Note 2', x: 150, y: 150 },
  ])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event
    setItems((items) =>
      items.map((item) =>
        item.id === active.id
          ? { ...item, x: item.x + delta.x, y: item.y + delta.y }
          : item
      )
    )
  }

  // const handleClick = () => {
  //   console.log('Stickt Note was clicked!')
  // }

  // const handleKeyDown = () => {
  //   console.log('Stickt Note was clicked!')
  // }

  const handleNoteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget.dataset
    console.log(`Note with id ${id} was clicked!`)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault() // Prevent default to avoid scrolling on Space key
      handleNoteClick(event as unknown as React.MouseEvent<HTMLDivElement>)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.canvas}>
        {items.map((item) => (
          <Draggable key={item.id} id={item.id} x={item.x} y={item.y}
            onChildClick={handleNoteClick}
            onChildEnter={handleKeyDown}
          >
            <div className={styles.draggableItem}>Item {item.id}</div>
          </Draggable>
        ))}
      </div>
      <button className="btn btn-circle btn-outline" title="add">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#cc99ff" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </DndContext>
  )
}

export default Canvas
