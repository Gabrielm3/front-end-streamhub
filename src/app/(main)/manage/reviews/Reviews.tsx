'use client'

import { FC } from 'react'

import AdminList from '@/components/ui/admin/admin-table/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'

import { useAdminReviews } from './useAdminReviews'

const Reviews: FC = () => {
	const { reviews, isLoading, deleteAsync } = useAdminReviews()

	return (
		<div className='px-6'>
			<Heading>Reviews</Heading>

			<AdminList
				listItems={reviews || []}
				headerItems={['Rating', 'User Name']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</div>
	)
}

export default Reviews
