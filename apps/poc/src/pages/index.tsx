import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <SearchLandingPage />,
});

export const SearchLandingPage = () => {
  return (
    <div>
      <Link to="/profiles">Profiles</Link>
    </div>
  );
};
