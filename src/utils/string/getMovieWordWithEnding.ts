export const getMovieWordWithEnding = (movieCount: number) => {
	switch (movieCount) {
		case 1 || 21:
			return `${movieCount} movie`
		case 2 || 3 || 4 || 22 || 23 || 24:
			return `${movieCount} movies`
		default:
			return `${movieCount} movies`
	}
}
