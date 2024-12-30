'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import Button from '@/components/ui/form-elements/button/Button'

import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import styles from './Subscribe.module.scss'

const Subscribe: FC = () => {
	const { user } = useProfile()
	const pathname = usePathname()

	const isAdminPage = pathname?.includes(ADMIN_URL.root())

	return (
		!isAdminPage && (
			<div className={styles.subscribe}>
				<h2>
					{user?.isHasPremium
						? 'You already have Premium'
						: 'Premium Subscription'}
				</h2>
				<p>
					{user?.isHasPremium
						? 'You already have unlimited access to all movies.'
						: 'With a Premium subscription, you have unlimited access to all movies.'}
				</p>
				<Link
					href={
						user?.isHasPremium
							? PUBLIC_URL.explorer()
							: PUBLIC_URL.premium()
					}
				>
					<Button size='sm' className={styles.button}>
						{user?.isHasPremium ? 'Watch Movies' : 'Subscribe'}
					</Button>
				</Link>
			</div>
		)
	)
}

export default Subscribe
