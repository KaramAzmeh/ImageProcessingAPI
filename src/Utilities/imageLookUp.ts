import express from 'express'
import resize from '../Utilities/resize'

interface QueryResponse {
    filename: string
    width: number
    height: number
}

const imageLookUp = (req: express.Request, res: express.Response, next: Function): void => {
    const query = req.query
    const queryResponse: QueryResponse = {
        filename: query.filename as string,
        width: query.width as unknown as number,
        height: query.height as unknown as number,
    }

    console.log(`Queried filename is: ${queryResponse.filename} width: ${queryResponse.width}, height: ${queryResponse.height}`)
    // res.sendFile(filepath)
    resize

    next()
}

export default imageLookUp