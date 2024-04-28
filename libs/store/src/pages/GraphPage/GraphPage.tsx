import React, { useCallback } from 'react';
import 'reactflow/dist/style.css';
import ReactFlow, {
  Connection,
  Controls,
  Edge,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import { Stack, Title } from '@mantine/core';

export const GraphPage = () => {
  const initialNodes = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Store' },
      style: { borderColor: 'var(--mantine-color-blue-5)' },
    },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'Workspace' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <Stack gap="lg" justify="center" align="center">
      <Title order={2} c="gray.8">
        React Flow Demo
      </Title>
      <div style={{ width: '80%', height: '70vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          style={{
            border: 'solid 1px var(--mantine-color-gray-2)',
            borderRadius: '10px',
            backgroundColor: 'var(--mantine-color-gray-0)',
          }}
          proOptions={{
            hideAttribution: true,
          }}
        >
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </Stack>
  );
};
