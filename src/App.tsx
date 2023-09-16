// import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1 className="text-3xl font-bold underline">
      Track Lineage
      </h1>
      <ReactFlow 
        nodes={initialNodes} edges={initialEdges}
      >
        <Background variant='dots' gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}