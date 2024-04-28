import { Divider, Stack, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';

import WebViewer from '@pdftron/webviewer';

export const WorkspacesPage = () => {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        initialDoc: '/files/scandi.pdf',
        path: '/',
      },
      viewer.current as HTMLDivElement
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core;

      documentViewer.addEventListener('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        });

        annotationManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);

  return (
    <Stack>
      <title>Workspaces</title>
      <Link to="/">Back to home</Link>
      <Text>Workspaces page</Text>

      <Divider my="xl" />

      <div className="webviewer" ref={viewer}></div>
    </Stack>
  );
};
