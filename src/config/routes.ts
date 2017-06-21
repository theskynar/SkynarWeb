import app from './express'
import {homeController} from '../controllers/Home/HomeController'

app.get('/', homeController.render.bind(homeController))

export default app