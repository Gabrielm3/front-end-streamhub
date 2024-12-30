import type { Metadata } from 'next'
import Link from 'next/link'

import Heading from '@/components/ui/heading/Heading'

import { PUBLIC_URL } from '@/config/url.config'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from './NotFound.module.scss'

export const metadata: Metadata = {
	title: 'Page does not exist!',
	...NO_INDEX_PAGE
}

export default function NotFoundPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.area}>
				<Heading>404. Page not found</Heading>
				<p>Hmm, looks like this page does not exist.</p>
				<Link href={PUBLIC_URL.home()} className={styles.link}>
					Go to homepage
				</Link>
			</div>
		</div>
	)
}
