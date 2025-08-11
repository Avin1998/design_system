
import { useParams, useNavigate } from 'react-router-dom';
import { Button, ProgressBar, Badge } from '../components/atoms';
import { ProblemTable } from '../components/molecules';

const trackNames: Record<string, string> = {
  'two-pointers': 'Two Pointers Pattern',
  'island': 'Island (Matrix Traversal) Pattern',
  'fast-slow': 'Fast & Slow Pointers Pattern',
  'sliding-window': 'Sliding Window Pattern',
  'merge-intervals': 'Merge Intervals Pattern',
  'cyclic-sort': 'Cyclic Sort Pattern',
};

// Sample problems data
const trackProblems: Record<string, any[]> = {
  'two-pointers': [
    { id: 'two-sum', title: 'Two Sum', difficulty: 'easy', status: 'solved', acceptance: 89 },
    { id: 'three-sum', title: 'Three Sum', difficulty: 'medium', status: 'attempted', acceptance: 56 },
    { id: 'container-water', title: 'Container With Most Water', difficulty: 'medium', status: 'unsolved', acceptance: 67 },
  ],
  'sliding-window': [
    { id: 'max-subarray', title: 'Maximum Subarray', difficulty: 'easy', status: 'solved', acceptance: 78 },
    { id: 'longest-substring', title: 'Longest Substring Without Repeating Characters', difficulty: 'medium', status: 'attempted', acceptance: 43 },
  ],
  'default': [
    { id: 'sample-1', title: 'Sample Problem 1', difficulty: 'easy', status: 'unsolved', acceptance: 70 },
    { id: 'sample-2', title: 'Sample Problem 2', difficulty: 'medium', status: 'unsolved', acceptance: 50 },
  ]
};

export default function TrackDetailPage() {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();
  
  const trackName = trackNames[trackId || ''] || 'Unknown Pattern';
  const problems = trackProblems[trackId || ''] || trackProblems.default;
  
  // Calculate progress
  const solvedProblems = problems.filter(p => p.status === 'solved').length;
  const progress = (solvedProblems / problems.length) * 100;

  const handleBack = () => {
    navigate('/');
  };

  const handleAttemptProblem = (problem: any) => {
    navigate(`/problem/${problem.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={handleBack}>
            ← Back
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{trackName}</h1>
            <p className="text-gray-400">
              Master this pattern by solving {problems.length} problems
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Progress Overview</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Completion</span>
                  <span>{solvedProblems}/{problems.length} problems solved</span>
                </div>
                <ProgressBar progress={progress} />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">{solvedProblems}</div>
                  <div className="text-sm text-gray-400">Solved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {problems.filter(p => p.status === 'attempted').length}
                  </div>
                  <div className="text-sm text-gray-400">Attempted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-400">
                    {problems.filter(p => p.status === 'unsolved').length}
                  </div>
                  <div className="text-sm text-gray-400">Remaining</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Pattern Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Difficulty</span>
                <Badge variant="warning">Medium</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time to Complete</span>
                <span className="text-white">2-3 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Prerequisites</span>
                <span className="text-white">Arrays, Loops</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problems Table */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Problems</h2>
          <ProblemTable 
            problems={problems}
            onProblemClick={handleAttemptProblem}
          />
        </div>
      </div>
    </div>
  );
}