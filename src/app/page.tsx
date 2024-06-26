'use client'

import { Canvas, Navbar } from './components'

// https://docs.dndkit.com/

// interface Note {
//   id: string;
//   text: string;
//   x?: number;
//   y?: number;
// }

// interface NotesListProps {
//   notes: Note[];
//   deleteNote: (id: string) => void;
// }

export default function Home() {
  // const [notes, setNotes] = useState<NotesListProps>({
  //   notes: [
  //     {
  //       id: '1',
  //       text: 'Hello world',
  //       x: 0,
  //       y: 0
  //     },
  //     {
  //       id: '2',
  //       text: 'Next.js is awesome',
  //       x: 60,
  //       y: 120
  //     },
  //     {
  //       id: '3',
  //       text: 'I love sticky notes',
  //       x: 0,
  //       y: 0
  //     }
  //   ],
  //   deleteNote: () => {}
  // })

  // Use generateId() on both server and client

  return (
    <div>
      <Navbar />
      <Canvas />
    </div>
  )
}


