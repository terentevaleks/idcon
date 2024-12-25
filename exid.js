function parseBetween(s) {
    // Initialize variables to store indices of markers
    let startMarker = '<';
    let endMarker = '>';
    
    // Find the index of the start marker
    let startIndex = s.indexOf(startMarker);
    if (startIndex === -1) {
        // If start marker is not found, return an empty string or handle error
        return '';
    }
    
    // Find the index of the end marker, starting from the index after the start marker
    let endIndex = s.indexOf(endMarker, startIndex + startMarker.length);
    if (endIndex === -1) {
        // If end marker is not found, return an empty string or handle error
        return '';
    }
    
    // Extract the substring between the markers
    let result = s.substring(startIndex + startMarker.length, endIndex);
    
    return result;
}

// Example usage:
let exampleString = 'This is <some content> that needs to be parsed.';
let parsedContent = parseBetween(exampleString);
console.log(parsedContent); // Output: 'some content'
