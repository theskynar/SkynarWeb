import app from './express'
import {homeController} from '../controllers/Home/HomeController'

app.get('/', homeController.render)

export default app