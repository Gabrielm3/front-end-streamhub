import type { Metadata } from 'next'
import Link from 'next/link'

import Button from '@/components/ui/form-elements/button/Button'
import Heading from '@/components/ui/heading/Heading'

import { DASHBOARD_URL } from '@/config/url.config'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from './Thanks.module.scss'

export const metadata: Metadata = {
	title: 'Successful Purchase',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.area}>
				<Heading>Successful Purchase</Heading>
				<p>Thank you for your purchase on our website.</p>
				<Link href={DASHBOARD_URL.root()}>
					<Button>Go to Dashboard</Button>
				</Link>
			</div>
		</div>
	)
}
