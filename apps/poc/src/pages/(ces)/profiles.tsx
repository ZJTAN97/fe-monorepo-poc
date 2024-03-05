import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(ces)/profiles')({
  component: () => <div>Hello /(ces)/profiles!</div>
})