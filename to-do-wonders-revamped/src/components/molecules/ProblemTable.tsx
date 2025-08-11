

interface ProblemData {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'solved' | 'attempted' | 'unsolved';
  acceptance?: number;
}

interface ProblemTableProps {
  problems: ProblemData[];
  onProblemClick?: (problem: ProblemData) => void;
  className?: string;
}

export default function ProblemTable({ 
  problems, 
  onProblemClick, 
  className = '' 
}: ProblemTableProps) {
  const difficultyColors = {
    easy: 'text-green-400',
    medium: 'text-yellow-400',
    hard: 'text-red-400'
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Difficulty
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Acceptance
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-600">
          {problems.map((problem) => (
            <tr 
              key={problem.id}
              className="hover:bg-gray-700 cursor-pointer transition-colors duration-200"
              onClick={() => onProblemClick?.(problem)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className={`w-3 h-3 rounded-full ${
                  problem.status === 'solved' ? 'bg-green-400' :
                  problem.status === 'attempted' ? 'bg-yellow-400' :
                  'bg-gray-400'
                }`} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-white font-medium">{problem.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`capitalize ${difficultyColors[problem.difficulty]}`}>
                  {problem.difficulty}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                {problem.acceptance ? `${problem.acceptance}%` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}