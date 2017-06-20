import {Service} from "typedi"

@Service()
export class HomeService {

    say(message: String) {
        return message
    }
}