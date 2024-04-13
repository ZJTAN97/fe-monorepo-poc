import React from 'react';

const SearchLandingPage = React.lazy(() =>
  import('./pages/SearchLandlingPage/SearchLandingPage').then((module) => ({
    default: module.SearchLandingPage,
  }))
);

const SearchResultsPage = React.lazy(() =>
  import('./pages/SearchResultsPage/SearchResultsPage').then((module) => ({
    default: module.SearchResultsPage,
  }))
);

export { SearchLandingPage, SearchResultsPage };
