import {Container, Inject} from "typedi"
import {HomeService} from "../../services/HomeService"
import {Request, Response} from "express"
import {Auth} from "../../interceptors/index"

class HomeController {

    @Inject()
    private _HomeService: HomeService

    @Auth()
    render(req: Request, res: Response) {
        res.send(this._HomeService.say("hello world"))
    }
}

export let homeController = Container.get(HomeController)