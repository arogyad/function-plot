/// <reference types="node" resolution-mode="require"/>
import { Axis } from 'd3-axis';
import EventEmitter from 'events';
import { FunctionPlotOptions, FunctionPlotScale } from './types.js';
export interface ChartMetaMargin {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export interface ChartMeta {
    /**
     * graph's left, right, top, bottom margins
     */
    margin?: ChartMetaMargin;
    /**
     * width of the canvas (minus the margins)
     */
    width?: number;
    /**
     * height of the canvas (minus the margins)
     */
    height?: number;
    zoomBehavior?: any;
    xScale?: FunctionPlotScale;
    yScale?: FunctionPlotScale;
    xAxis?: Axis<any>;
    yAxis?: Axis<any>;
    xDomain?: [number, number];
    yDomain?: [number, number];
}
/**
 * An instance can subscribe to any of the following events by doing `instance.on([eventName], callback)`,
 * events can be triggered by doing `instance.emit([eventName][, params])`
 *
 * - `mouseover` fired whenever the mouse is over the canvas
 * - `mousemove` fired whenever the mouse is moved inside the canvas, callback params: a single object `{x: number, y: number}` (in canvas space
 coordinates)
 * - `mouseout` fired whenever the mouse is moved outside the canvas
 * - `before:draw` fired before drawing all the graphs
 * - `after:draw` fired after drawing all the graphs
 * - `zoom` fired whenever there's scaling/translation on the graph
 (x-scale and y-scale of another graph whose scales were updated)
 * - `tip:update` fired whenever the tip position is updated, callback params `{x, y, index}` (in canvas
 space coordinates, `index` is the index of the graph where the tip is on top of)
 * - `eval` fired whenever the sampler evaluates a function, callback params `data` (an array of segment/points),
 `index` (the index of datum in the `data` array), `isHelper` (true if the data is created for a helper e.g.
 for the derivative/secant)
 *
 * The following events are dispatched to all the linked graphs
 *
 * - `all:mouseover` same as `mouseover` but it's dispatched in each linked graph
 * - `all:mousemove` same as `mousemove` but it's dispatched in each linked graph
 * - `all:mouseout` same as `mouseout` but it's dispatched in each linked graph
 * - `all:zoom` fired whenever there's scaling/translation on the graph, dispatched on all the linked graphs
 */
export declare class Chart extends EventEmitter.EventEmitter {
    static cache: Record<string, Chart>;
    private readonly id;
    meta: ChartMeta;
    /**
     * options are the input options sent to function plot.
     */
    options: FunctionPlotOptions;
    /**
     * Array of function-plot instances linked to the events of this instance,
     i.e. when the zoom event is dispatched on this instance it's also dispatched on all the instances of
     this array
     */
    private linkedGraphs;
    private line;
    /**
     * The number of times a function was rendered.
     */
    private generation;
    /**
     * `svg` element that holds the graph (canvas + title + axes)
     */
    root: any;
    /**
     * Element that holds the tip
     */
    tip: any;
    /**
     * `g.canvas` element that holds the area where the graphs are plotted (clipped with a mask)
     */
    canvas: any;
    /**
     * Element that holds the canvas where the functions are drawn
     */
    content: any;
    /**
     * Draggable element that receives zoom and pan events
     */
    draggable: any;
    constructor(options: FunctionPlotOptions);
    /**
     * Rebuilds the entire graph from scratch recomputing
     *
     * - the inner width/height
     * - scales/axes
     *
     * After this is done it does a complete redraw of all the datums,
     * if only the datums need to be redrawn call `instance.renderContent()` instead
     *
     * @returns Chart
     */
    plot(): this;
    private getDraggableNode;
    /**
     * The draggable container won't change across different instances of Chart,
     * therefore multiple instances will share the draggable container, to avoid dispatching
     * the event from the old instance grab it in runtime with this function
     */
    private getEmitInstance;
    private setDefaultOptions;
    /**
     * Validate options provides best effort runtime validation of the options.
     */
    private validateOptions;
    private buildInternalVars;
    private initializeAxes;
    private render;
    private buildTitle;
    private buildLegend;
    private buildCanvas;
    private buildClip;
    private buildAxis;
    private buildAxisLabel;
    /**
     * Draws each of the datums stored in data.options only
     * To do a full redraw call `instance.plot()`
     */
    private buildContent;
    private buildZoomHelper;
    private renderAxes;
    private syncOptions;
    private renderContent;
    private setUpEventListeners;
    addLink(...args: Chart[]): void;
    /**
     * Removes a linked graph.
     */
    removeLink(instance: Chart): void;
    /**
     * Destroys this instance of functionPlot,
     * if you added this to other instances through `addLink` make
     * sure you remove the links from the other instances to this
     * instance using `removeLink`.
     */
    destroy(): void;
}
