// Service
import { api } from '@apollo/client'

const service = api.client({
	key: process.env.APOLLO_KEY
	client: 'apollo'
})

export service