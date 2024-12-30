import type { Metadata } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { movieService } from '@/services/movie.service'

export const metadata: Metadata = {
	title: 'New Movies'
}

export const revalidate = 60

async function getMovies() {
	const data = await movieService.getAll()
	return data
}

export default async function ExplorerPage() {
	const data = await getMovies()

	return (
		<div className='px-6'>
			<Catalog
				title='New Movies'
				description='New movies and TV series in excellent quality: legal, safe, ad-free.'
				movies={data}
			/>
		</div>
	)
}
