import type { Metadata } from 'next'

import Premium from './Premium'

export const metadata: Metadata = {
	title: 'Premium Subscription'
}

export default function PremiumPage() {
	return <Premium />
}
