import functionPlot from '../../src/index.js';
// snippets is a list of tests to run in:
// - the image snapshot tests.
// - to test typescript types.
const snippets = [
    {
        testName: 'should render an x^2 graph',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                data: [{
                        fn: 'x^2',
                        graphType: 'polyline'
                    }]
            });
        }
    },
    {
        testName: 'should render with additional options',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                title: 'quadratic with options',
                width: 580,
                height: 400,
                disableZoom: true,
                x: {
                    label: 'x - axis',
                    domain: [-6, 6]
                },
                y: {
                    label: 'y - axis'
                },
                data: [{
                        fn: 'x^2'
                    }]
            });
        }
    },
    {
        testName: 'should render a grid',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                x: {
                    label: 'real'
                },
                y: {
                    label: 'imaginary'
                },
                grid: true,
                data: [
                    { fn: 'sqrt(1 - x * x)' },
                    { fn: '-sqrt(1 - x * x)' }
                ]
            });
        }
    },
    {
        testName: 'should render with sticky axes',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                title: 'quadratic with different axes position',
                width: 580,
                height: 400,
                x: {
                    position: 'sticky'
                },
                y: {
                    position: 'sticky'
                },
                data: [{
                        fn: 'x^2'
                    }]
            });
        }
    },
    {
        testName: 'should render distinct domains',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                y: { domain: [-1, 1] },
                x: { domain: [8, 24] },
                data: [{
                        fn: 'sin(x)'
                    }]
            });
        }
    },
    {
        testName: 'should evaluate with multiple samples',
        fn: function () {
            functionPlot({
                target: '#playground',
                data: [
                    {
                        fn: 'sin(x)',
                        nSamples: 1000
                    }
                ]
            });
        }
    },
    {
        testName: 'should render annotations',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                y: { domain: [-1, 9] },
                data: [{
                        fn: 'x^2'
                    }],
                annotations: [{
                        x: -1
                    }, {
                        x: 1,
                        label: 'x = 1'
                    }, {
                        y: 2,
                        label: 'y = 2'
                    }]
            });
        }
    },
    {
        testName: 'should render closed paths',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                x: { domain: [-2, 12] },
                data: [{
                        fn: '3 + sin(x)',
                        range: [2, 8],
                        closed: true
                    }]
            });
        }
    },
    {
        testName: 'should render logarithmic scales',
        fn: function () {
            functionPlot({
                target: '#playground',
                x: {
                    type: 'log',
                    domain: [0.01, 1]
                },
                y: {
                    domain: [-100, 100]
                },
                grid: true,
                data: [
                    {
                        fn: '1/x * cos(1/x)',
                        // to make it look like a definite integral
                        closed: true
                    }
                ]
            });
        }
    },
    {
        testName: 'should multiple graphs',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                data: [
                    { fn: 'x', color: 'pink' },
                    { fn: '-x' },
                    { fn: 'x^2' },
                    { fn: 'x^3' },
                    { fn: 'x^4' }
                ]
            });
        }
    },
    {
        testName: 'should render different graph types',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                data: [
                    {
                        fn: '-sqrt(-x)',
                        nSamples: 100,
                        graphType: 'scatter'
                    },
                    {
                        fn: 'sqrt(x)',
                        graphType: 'polyline'
                    },
                    {
                        fn: 'x^2',
                        graphType: 'interval'
                    }
                ]
            });
        }
    },
    {
        testName: 'should render nth root',
        fn: function () {
            functionPlot({
                target: '#playground',
                data: [
                    {
                        fn: 'nthRoot(x, 3)^2'
                    }
                ]
            });
        }
    },
    {
        testName: 'should render secants',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                y: { domain: [-1, 9] },
                x: { domain: [-3, 3] },
                data: [
                    {
                        fn: 'x^2',
                        secants: [
                            { x0: 1, x1: 3 },
                            { x0: 1, x1: 2.5 },
                            { x0: 1, x1: 2 }
                        ]
                    }
                ]
            });
        }
    },
    {
        testName: 'should render derivative',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                y: { domain: [-1, 9] },
                data: [
                    {
                        fn: 'x^2',
                        derivative: { fn: '2 * x', x0: 2 }
                    }
                ]
            });
        }
    },
    {
        testName: 'should render a parametric function',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                y: { domain: [-1.897959183, 1.897959183] },
                x: { domain: [-3, 3] },
                data: [
                    {
                        x: 'cos(t)',
                        y: 'sin(t)',
                        fnType: 'parametric',
                        graphType: 'polyline'
                    }
                ]
            });
        }
    },
    {
        testName: 'should render a polar function',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                y: { domain: [-1.897959183, 1.897959183] },
                x: { domain: [-3, 3] },
                data: [
                    {
                        r: 'r0 * cos(theta - gamma) + sqrt(a^2 - r0^2 * (sin(theta - gamma))^2)',
                        scope: {
                            a: 1,
                            r0: 0,
                            gamma: 0
                        },
                        fnType: 'polar',
                        graphType: 'polyline'
                    }
                ]
            });
        }
    },
    {
        testName: 'should render an implicit function',
        fn: function () {
            // prettier-ignore
            functionPlot({
                target: '#playground',
                y: { domain: [-1.897959183, 1.897959183] },
                x: { domain: [-3, 3] },
                data: [
                    {
                        fn: 'x * x + y * y - 1',
                        fnType: 'implicit'
                    }
                ]
            });
        }
    },
    {
        testName: 'should render points',
        fn: function () {
            functionPlot({
                target: '#playground',
                data: [
                    {
                        points: [
                            [1, 1],
                            [2, 1],
                            [2, 2],
                            [1, 2],
                            [1, 1]
                        ],
                        fnType: 'points',
                        graphType: 'scatter'
                    }
                ]
            });
        }
    },
    {
        testName: 'should render vectors',
        fn: function () {
            functionPlot({
                target: '#playground',
                data: [
                    {
                        vector: [2, 1],
                        offset: [1, 2],
                        graphType: 'polyline',
                        fnType: 'vector'
                    }
                ]
            });
        }
    },
    {
        testName: 'should render text',
        fn: function () {
            functionPlot({
                target: '#playground',
                data: [
                    {
                        graphType: 'text',
                        location: [1, 1],
                        text: 'hello world'
                    },
                    {
                        graphType: 'text',
                        location: [-1, -1],
                        text: 'foo bar',
                        attr: {
                            'text-anchor': 'end'
                        }
                    }
                ]
            });
        }
    },
    {
        testName: 'should destroy the svg node on destroy',
        fn: function () {
            const instance = functionPlot({
                target: '#playground',
                data: [{ fn: 'x^2' }]
            });
            instance.destroy();
        }
    },
    {
        testName: 'should render x^2 [async]',
        fn: function () {
            const nSamples = 1000;
            functionPlot.withWebWorkers(8);
            functionPlot({
                target: '#playground',
                data: [
                    { fn: 'x^2', sampler: 'asyncInterval', nSamples },
                    { fn: 'x^3', sampler: 'asyncInterval', nSamples },
                    { fn: '1/x', sampler: 'asyncInterval', nSamples },
                    { fn: 'sin(x)', sampler: 'asyncInterval', nSamples }
                ]
            });
        }
    }
];
export { snippets };
//# sourceMappingURL=snippets.js.map