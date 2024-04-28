import { TextInput } from '@mantine/core';
import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export type NodeData = {
  label: string;
};

export const MindMapNode = ({ id, data }: NodeProps<NodeData>) => {
  return (
    <>
      <TextInput defaultValue={data.label} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
