// dev instance nsec nsec10qkd5ne5xggp7pekp63s5y9j9qyhu2mra83sspk9zzrghqlltafqphjmjv

export const devInstance = {
	pk: 'b4348212f73cd9b13a10073f1231d14057960f1b37f732c6cd6757386b978e0c',
	sk: '782cda4f3432101f07360ea30a10b228097e2b63e9e30806c510868b83ff5f52',
}

// devUser1 can receive zaps at totaldaybed859@minibits.cash
// devUser1 is an admin

export const devUser1 = {
	pk: '86a82cab18b293f53cbaaae8cdcbee3f7ec427fdf9f9c933db77800bb5ef38a0',
	sk: '5c81bffa8303bbd7726d6a5a1170f3ee46de2addabefd6a735845166af01f5c0',
}

export const devUser2 = {
	pk: 'd943e96d62695b318a9c0658a3bd3fafaaf441a069d8bfd04dc9ff39c69cc782',
	sk: '08a475839723c79f2993ad000289670eb737d34bc9d72d43128f898713fc3fb3',
}

export const devUser3 = {
	pk: '2edec1b799cd2f41f70a5ff0edc10d2260a57d62f39072aab4eb8174b7ca912a',
	sk: 'e61ae5a4f505026e3d2b5aeba82c748b6b799346a1e98e266d7252cddb8f502b',
}

export const devUser4 = {
	pk: 'f47121cd783802e6d4879e63233b54aff54e6788ea9ef568cec0259cc60fe286',
	sk: 'beb8f6777d4379ac60b01d91fa84456bb23a2ef6b083f557b9ede311ae1ede53',
}

export const devUser5 = {
	pk: '96c727f4d1ea18a80d03621520ebfe3c9be1387033009a4f5b65959d09222eec',
	sk: 'ee40a2dc441238f241d1728af9507147e9b5ed18c1c61d84876d4f2502c044b3',
}

export const CURRENCIES_WITH_FICTIONAL_CONVERSION_RATES: Record<string, number> = {
	SATS: 100000000,
	BTC: 1,
	USD: 64701.08,
	EUR: 58001.35,
	JPY: 9394032.35,
	GBP: 48482.98,
	CHF: 54965.64,
	CNY: 453651.61,
	AUD: 94137.42,
	CAD: 87273.02,
	HKD: 502422.12,
	SGD: 83122.06,
	INR: 5412484.32,
	MXN: 1262512.27,
	RUB: 6005646.59,
	BRL: 352570.6,
	TRY: 2207997.98,
	KRW: 85642932.41,
	ZAR: 1137621.65,
	ARS: 78815509.47,
	CLP: 58362553.27,
	COP: 263271302.81,
	PEN: 243392.97,
	UYU: 2735001.72,
	PHP: 3629393.97,
	THB: 2105333.94,
	IDR: 977592722.31,
	MYR: 266377.9,
} as const

export const FORBIDDEN_WORDS = new Set([
	'test',
	'testing',
	'TestStore',
	'example',
	'dummy',
	'fake',
	'demo',
	'sample',
	'trial',
	'sandbox',
	'mock',
	'placeholder',
	'lorem',
	'admin',
])
