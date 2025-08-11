import type { Pattern } from '../services';
import { PATTERN_STATUS } from '../constants';

// Import images
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

export const PATTERNS_DATA: Pattern[] = [
  {
    id: '1',
    name: 'Two Pointers',
    image: twoPointersImg,
    progress: 1,
    status: PATTERN_STATUS.DONE,
  },
  {
    id: '2',
    name: 'Island (Matrix Traversal)',
    image: islandImg,
    progress: 1,
    status: PATTERN_STATUS.ACTIVE,
  },
  {
    id: '3',
    name: 'Fast & Slow Pointers',
    image: fastSlowImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '4',
    name: 'Sliding Window',
    image: slidingWindowImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '5',
    name: 'Merge Intervals',
    image: mergeIntervalsImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '6',
    name: 'Cyclic Sort',
    image: cyclicSortImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '7',
    name: 'In-place Reversal of a Linked List',
    image: linkedListReversalImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '8',
    name: 'Tree Breadth First Search',
    image: treeBfsImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '9',
    name: 'Tree Depth First Search',
    image: treeDfsImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '10',
    name: 'Two Heaps',
    image: twoHeapsImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '11',
    name: 'Subsets',
    image: subsetsImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '12',
    name: 'Modified Binary Search',
    image: binarySearchImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '13',
    name: 'Top K Elements',
    image: topKImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '14',
    name: 'Bitwise XOR',
    image: bitwiseXorImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '15',
    name: 'Backtracking',
    image: backtrackingImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '16',
    name: '0/1 Knapsack (Dynamic Programming)',
    image: knapsackImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '17',
    name: 'Topological Sort (Graph)',
    image: topoSortImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '18',
    name: 'K-way Merge',
    image: kWayMergeImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '19',
    name: 'Monotonic Stack',
    image: monotonicStackImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '20',
    name: 'Multi-threaded',
    image: multiThreadedImg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
  {
    id: '21',
    name: 'Union Find',
    image: defaultBg,
    progress: 1,
    status: PATTERN_STATUS.INACTIVE,
  },
];