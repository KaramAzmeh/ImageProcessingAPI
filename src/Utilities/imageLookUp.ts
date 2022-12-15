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
        width: Number(query.width),
        height: Number(query.height),
    }

    console.log(`Queried filename is: ${queryResponse.filename}, width: ${queryResponse.width}, height: ${queryResponse.height}`)
    // res.sendFile(filepath)
    resize(queryResponse.filename, queryResponse.width, queryResponse.height)?.then().catch(e => { console.log(`Error in resize: ${e}`)})
    next()
    
}

export default imageLookUp