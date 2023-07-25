const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_AUTH_KEY,
  },
};
export async function getTvSeries(page) {
  try {
    console.log(page);
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&sort_by=vote_count.desc&page=" +
        page,
      options
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
