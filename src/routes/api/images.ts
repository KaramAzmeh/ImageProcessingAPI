import express from 'express'
const images = express.Router()
import imageLookUp from '../../Utilities/imageLookUp'

interface QueryResponse {
    filename: string
    width: number
    height: number
}

images.use(imageLookUp)
images.get("/", (req,res) => {
    const query = req.query
    const queryResponse: QueryResponse = {
        filename: query.filename as string,
        width: query.width as unknown as number,
        height: query.height as unknown as number,
    }

    res.send(`server working <br> File will be downloaded soon`)
    // res.sendFile(filepath)
})

export default images