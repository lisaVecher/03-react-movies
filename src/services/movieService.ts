export function fetchMovies() {
  const url =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmNhZWIxOTM5NTA1ZDU3ODU3ZjNhN2Q1NTE0YjljYyIsIm5iZiI6MTc3MzMxMzQ0OC41MDQ5OTk5LCJzdWIiOiI2OWIyOWRhOGM1YjViMjQyNTI5ZDVmMzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KhCQ_ogC52JoI0Yx2ZzFJPSPaj3r1TBEOs9p9y74D50",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}
