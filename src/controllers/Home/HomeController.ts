import { Inject } from "typedi"
import { HomeService } from "../../services/HomeService"
import { Request, Response } from "express"
import { Http } from "../../interceptors"

class HomeController {

    @Inject()
    private _homeService: HomeService
    
    @Http.Get("/")
    render(req: Request, res: Response) {
        const self = this;
        res.send(this._homeService.say("Hello!"))
    }

    @Http.Get("/test")
    index(req: Request, res: Response) {
        res.send("test")
    }
}