import React from 'react';
import { BaseEdge, EdgeProps, getStraightPath } from 'reactflow';

export const MindMapEdge = (props: EdgeProps) => {
  const { sourceX, sourceY, targetX, targetY } = props;
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  return <BaseEdge path={edgePath} {...props} />;
};
