import express, { Router } from 'express'
import images from './api/images'
import bodyParser from 'body-parser'
const routes = express.Router()


routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.get('/', (req,res) => {
    res.send('main api route')
})

routes.use("/images", images)

export default routes;