// Sample pelis object with getSortRating method
const pelis = {
  movies: [
    { title: 'Movie A', rating: 4.5 },
    { title: 'Movie B', rating: 3.8 },
    { title: 'Movie C', rating: 4.2 }
  ],
  getSortRating: function() {
    return this.movies.map(movie => movie.rating).sort((a, b) => b - a);
  }
};

// Call the getSortRating method to retrieve sorted ratings
const sortedRatings = pelis.getSortRating();
console.log(sortedRatings); // Output: [4.5, 4.2, 3.8]
