import { Selection } from 'd3-selection';
import { Chart } from '../index.js';
import { TextFunction } from '../types.js';
export default function Text(chart: Chart): (selection: Selection<any, TextFunction, any, any>) => void;
