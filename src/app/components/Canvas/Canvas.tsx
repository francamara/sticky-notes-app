import React from 'react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import Draggable from '../Draggable/Draggable'
import styles from './Canvas.module.css'

interface StickyNote {
  id: string;
  x: number;
  y: number;
}

class Canvas extends React.Component {
  state: {items: StickyNote[]} = {
    items: [
      { id: 'Hello! Welcome to Sticky Notes App!', x: 50, y: 50 },
      { id: 'This app is currently in WIP, but thank you for visiting!', x: 150, y: 150 },
    ]
  }

  handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event
    const { items } = this.state
    const updatedItems = items.map((item) =>
      item.id === active.id
        ? { ...item, x: item.x + delta.x, y: item.y + delta.y }
        : item
    )
    this.setState({ items: updatedItems })
  }

  handleNoteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const { id } = event.currentTarget.dataset
    console.log(`Note with id ${id} was clicked!`)
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.key === 'Enter' || event.key === ' ') {
      this.handleNoteClick(event as unknown as React.MouseEvent<HTMLDivElement>)
    }
  }

  addNote = () => {
    const { items } = this.state
    this.setState({ items: [...items, { id: 'New Note', x: 50, y: 50 }] })
  }

  render() {
    const { items } = this.state
    return (
      <DndContext onDragEnd={this.handleDragEnd}>
        <div className={styles.canvas}>
          {items.map((item) => (
            <Draggable key={item.id} id={item.id} x={item.x} y={item.y}
              onChildClick={this.handleNoteClick}
              onChildEnter={this.handleKeyDown}
            >
              <div className={styles.draggableItem}>{item.id}</div>
            </Draggable>
          ))}
        </div>
        <div  className={styles.addButton}>
          <button className={`btn btn-circle btn-outline bg-secondary ${styles.rotatedButton}`} title="add" onClick={this.addNote}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#cc99ff" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </DndContext>
    )
  }
}

export default Canvas
