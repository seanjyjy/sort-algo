// Explanation adapted from https://www.geeksforgeeks.org/insertion-sort/
const InsertionSort = {
  name: 'Insertion',
  description:
    'Insertion sort is a simple sorting algorithm that builds the final ' +
    'sorted list one item at a time. The list is virtually split ' +
    'into a sorted and an unsorted part. Values from the unsorted part are ' +
    'picked and placed at the correct position in the sorted part.',
  additionalDesc: '',
  worstTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  averageTime: (
    <span>
      N<sup>2</sup>
    </span>
  ),
  bestTime: 'N',
  worstSpace: '1',
  stable: true,
  inPlace: true,
};

export default InsertionSort;
