import 'reactflow/dist/style.css';
import ReactFlow, { Controls, MiniMap, NodeOrigin, Panel } from 'reactflow';
import { Stack, Title } from '@mantine/core';
import useStore, { ReactFlowState } from './store';
import { shallow } from 'zustand/shallow';
import { MindMapNode } from './MindMapNode';
import { MindMapEdge } from './MindMapEdge';

export const GraphPage = () => {
  const selector = (state: ReactFlowState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
  });

  const nodeTypes = {
    mindmap: MindMapNode,
  };
  
  const edgeTypes = {
    mindmap: MindMapEdge,
  };

  // this places the node origin in the center of a node
  const nodeOrigin: NodeOrigin = [0.5, 0.5];

  // whenever you use multiple values, you should use shallow to make sure the component only re-renders when one of the values changes
  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
    selector,
    shallow
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
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeOrigin={nodeOrigin}
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
          <Panel position="top-left">React Mindmap</Panel>
        </ReactFlow>
      </div>
    </Stack>
  );
};
