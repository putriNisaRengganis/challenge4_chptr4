import express from 'express'
import userRouter from './api/v1/users/routing.js'
import profileRouter from './api/v1/profiles/routing.js'
import bankAccountRouter from './api/v1/bank_accounts/routing.js'
import transactionRouter from './api/v1/transaction/routes.js'

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(profileRouter)
app.use(bankAccountRouter)
app.use(transactionRouter)


app.listen(3000, () => {
    console.log('Server is running on port 3000')
    }
)