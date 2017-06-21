import {Container, Inject} from "typedi"
import {HomeService} from "../../services/HomeService"
import {Request, Response} from "express"
import {Performance} from "../../interceptors/index"

class HomeController {

    @Inject()
    private _HomeService: HomeService

    render(req: Request, res: Response) {
        setTimeout(()=> res.send(this._HomeService.say("hello world")), 5000000)
    }
}

export let homeController = Container.get(HomeController)