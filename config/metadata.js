const DEV_ENV = 'development'
const PROD_ENV = 'production'

const {
	NODE_ENV = 'development',
	PORT = '4200',
	HOST = 'https://localhost',
} = process.env

module.exports = {
	PORT,
	HOST,
	ENV: NODE_ENV === PROD_ENV ? DEV_ENV : PROD_ENV,
	DEV: NODE_ENV === DEV_ENV,
}
