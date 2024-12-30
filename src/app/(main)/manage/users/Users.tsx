'use client'

import { FC } from 'react'

import AdminHeader from '@/components/ui/admin/admin-table/admin-header/AdminHeader'
import AdminList from '@/components/ui/admin/admin-table/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'

import { useAdminUsers } from './useAdminUsers'

const Users: FC = () => {
	const { handleSearch, searchTerm, users, isLoading, deleteAsync } =
		useAdminUsers()

	return (
		<div className='px-6'>
			<Heading>Users</Heading>

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminList
				listItems={users || []}
				headerItems={['Name', 'Email', 'Role']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</div>
	)
}

export default Users
