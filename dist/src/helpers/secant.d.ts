import { Selection } from 'd3-selection';
import { Chart } from '../index.js';
import { LinearFunction } from '../types.js';
export default function secant(chart: Chart): (selection: Selection<any, LinearFunction, any, any>) => void;
