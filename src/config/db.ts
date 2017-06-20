import * as mongoose from "mongoose"

mongoose.connect(process.env.MONGOOSE_URL, null, err => {
    console.log(err)
})

export default mongoose