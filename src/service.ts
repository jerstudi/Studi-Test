// Service
import { api } from '@apollo/client'

const env = process.env.APOLLO_KEY

const service = api.client({
	key: env
	client: 'apollo'
})

export service