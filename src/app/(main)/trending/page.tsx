import type { Metadata } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { movieService } from '@/services/movie.service'

export const metadata: Metadata = {
	title: 'Popular Movies'
}

export const revalidate = 60

async function getMovies() {
	const data = await movieService.getMostPopularMovies()
	return data
}

export default async function ExplorerPage() {
	const data = await getMovies()

	return (
		<div className='px-6'>
			<Catalog
				title='Popular Movies'
				description='Current movies in excellent quality: legal, safe, without ads.'
				movies={data}
			/>
		</div>
	)
}
