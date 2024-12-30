import Link from 'next/link'
import { FC } from 'react'

import Button from '@/components/ui/form-elements/button/Button'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './PremiumPlaceholder.module.scss'

const PremiumPlaceHolder: FC = () => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>
					To watch movies, you need to subscribe to premium.
				</div>
				<Link href={PUBLIC_URL.premium()}>
					<Button className={styles.btn} size='sm'>
						Buy Premium
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default PremiumPlaceHolder
