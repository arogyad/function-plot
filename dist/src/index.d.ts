import './polyfills.js';
import { FunctionPlotOptions } from './types.js';
import { Chart, ChartMeta, ChartMetaMargin } from './chart.js';
import { registerGraphType } from './globals.mjs';
import { polyline, interval, scatter } from './graph-types/index.js';
import { registerEvaluator } from './samplers/eval.mjs';
declare function withWebWorkers(nWorkers?: number, WorkerConstructor?: {
    new (scriptURL: string | URL, options?: WorkerOptions): Worker;
    prototype: Worker;
}, publicPath?: string): void;
/**
 * functionPlot is a function plotter of 2d functions.
 *
 * functionPlot creates an instance of {@link Chart} with the param options
 * and immediately calls {@link Chart#build} on it.
 *
 * `options` is augmented with additional internal computed data,
 * therefore, if you want to rerender graphs it's important to reuse
 * the same object to preserve state across builds.
 *
 * @param options The options sent to Chart
 */
declare function functionPlot(options: FunctionPlotOptions): Chart;
declare namespace functionPlot {
    var version: string;
    var globals: {
        COLORS: import("d3-color").HSLColor[];
        DEFAULT_WIDTH: number;
        DEFAULT_HEIGHT: number;
        DEFAULT_ITERATIONS: any;
        TIP_X_EPS: number;
        MAX_ITERATIONS: number;
        graphTypes: {};
        _workerPool: any;
        hasWorkerPool(): boolean;
        workerPool: any;
    };
    var $eval: {
        builtIn: (meta: any, property: any, variables: any) => any;
        interval: (meta: any, property: any, variables: any) => any;
    };
    var graphTypes: {
        interval: typeof interval;
        polyline: typeof polyline;
        scatter: typeof scatter;
    };
    var withWebWorkers: typeof import("./index.js").withWebWorkers;
}
export default functionPlot;
export * from './types.js';
export { Chart, ChartMeta, ChartMetaMargin };
export { registerGraphType, withWebWorkers };
export { registerEvaluator };
export { builtIn as EvalBuiltIn, interval as EvalInterval } from './samplers/eval.mjs';
export { interval as GraphTypeInterval, polyline as GraphTypePolyline, scatter as GraphTypeScatter } from './graph-types/index.js';
export { GraphTypePlotter, GraphTypeBuilder } from './graph-types/types.js';
export * from './helpers/index.js';
