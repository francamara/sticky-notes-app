import React from 'react'

interface StickyNoteProps {
  id: string;
  text: string;
}

const StickyNote: React.FC<StickyNoteProps> = ({ id, text }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl daisyui-card">
      <div className="card-body items-center text-center daisyui-card-body">
        <h2 className="card-title daisyui-card-title">{id}</h2>
        <p className="daisyui-card-text">{text}</p>
        <div className="card-actions daisyui-card-actions">
          <button className="btn btn-primary daisyui-button">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default StickyNote
