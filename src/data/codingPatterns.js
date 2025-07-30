// Coding Patterns Data
// Import images for specific patterns
import defaultBg from '../assets/background.png';
import twoPointersImg from '../assets/two_pointers.png';
import islandImg from '../assets/island.png';
import fastSlowImg from '../assets/patterns/fast_slow_pointers.png';
import slidingWindowImg from '../assets/patterns/sliding_window.png';
import mergeIntervalsImg from '../assets/patterns/merge_intervals.png';
import cyclicSortImg from '../assets/patterns/cyclic_sort.png';
import linkedListReversalImg from '../assets/patterns/linked_list_reversal.png';
import treeBfsImg from '../assets/patterns/tree_bfs.png';
import treeDfsImg from '../assets/patterns/tree_dfs.png';
import twoHeapsImg from '../assets/patterns/two_heaps.png';
import subsetsImg from '../assets/patterns/subsets.png';
import binarySearchImg from '../assets/patterns/modified_binary_search.png';
import topKImg from '../assets/patterns/top_k_elements.png';
import bitwiseXorImg from '../assets/patterns/bitwise_xor.png';
import backtrackingImg from '../assets/patterns/backtracking.png';
import knapsackImg from '../assets/patterns/knapsack.png';
import topoSortImg from '../assets/patterns/topological_sort.png';
import kWayMergeImg from '../assets/patterns/k_way_merge.png';
import monotonicStackImg from '../assets/patterns/monotonic_stack.png';
import multiThreadedImg from '../assets/patterns/multi_threaded.png';

// The list of coding patterns comes from Grokking the Coding Interview.  Each
// entry can specify a custom description, progress (0 to 1) and status
// ('inactive', 'active' or 'done'), as well as an image.  For brevity we only
// provide unique artwork for the first three patterns.  Other patterns use
// the default dark background.  Additional images can be added later by
// importing the asset and setting the `image` property accordingly.
export const codingPatterns = [
  {
    name: 'Two Pointers',
    image: twoPointersImg,
    progress: 1,
    status: 'done',
  },
  {
    name: 'Island (Matrix Traversal)',
    image: islandImg,
    progress: 1,
    status: 'active',
  },
  {
    name: 'Fast & Slow Pointers',
    image: fastSlowImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Sliding Window',
    image: slidingWindowImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Merge Intervals',
    image: mergeIntervalsImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Cyclic Sort',
    image: cyclicSortImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'In-place Reversal of a Linked List',
    image: linkedListReversalImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Tree Breadth First Search',
    image: treeBfsImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Tree Depth First Search',
    image: treeDfsImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Two Heaps',
    image: twoHeapsImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Subsets',
    image: subsetsImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Modified Binary Search',
    image: binarySearchImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Top K Elements',
    image: topKImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Bitwise XOR',
    image: bitwiseXorImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Backtracking',
    image: backtrackingImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: '0/1 Knapsack (Dynamic Programming)',
    image: knapsackImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Topological Sort (Graph)',
    image: topoSortImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'K-way Merge',
    image: kWayMergeImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Monotonic Stack',
    image: monotonicStackImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Multi-threaded',
    image: multiThreadedImg,
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Union Find',
    image: defaultBg,
    progress: 1,
    status: 'inactive',
  },
];

// Default expanded card data for patterns
export const getExpandedCardData = (pattern) => ({
  ...pattern,
  companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple'],
  rating: 4,
  difficulty: pattern.name.includes('Tree') ? 'hard' : 'medium',
  achieved: pattern.status === 'done',
  nextTrack: {
    name: 'Advanced Problem Solving'
  }
});