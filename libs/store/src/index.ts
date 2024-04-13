import React from 'react';

const CreateProfilePage = React.lazy(() =>
  import('./pages/CreateProfilePage/CreateProfilePage').then((module) => ({
    default: module.CreateProfilePage,
  }))
);

const ProfilePage = React.lazy(() =>
  import('./pages/ProfilePage/ProfilePage').then((module) => ({
    default: module.ProfilePage,
  }))
);

export { CreateProfilePage, ProfilePage };
