const xScale = d3.scaleLinear()
    .domain([0, 100]) // 'start' being 0 here
    .range([0, 500]);

// Example usage:
console.log(xScale(50)); // Output: 250 (assuming linear interpolation)
