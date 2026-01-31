const initialDemoData = [
  {
    id: 'task-1',
    title: 'Design engine API',
    description: 'Define reorder logic and edge cases',
    priority: 'high',
  },
  {
    id: 'task-2',
    title: 'Create custom hook',
    description: 'Bridge engine with React state',
    priority: 'medium',
  },
  {
    id: 'task-3',
    title: 'Build interaction layer',
    description: 'Native drag and drop handling',
    priority: 'medium',
  },
  {
    id: 'task-4',
    title: 'Polish UI',
    description: 'Responsive layout and accessibility',
    priority: 'low',
  },
];

export function getInitialData(){
    // copy of data to retaint the source of truth same every time data is fetched.
    return [...initialDemoData];
}
