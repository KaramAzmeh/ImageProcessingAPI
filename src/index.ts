import express from 'express'
import sharp from 'sharp'

const app = express()
const port = 3000

interface QueryResponse {
    filename: string
    width: number
    height: number
}

// define a route handler for the default home page
app.get('/api/images', (req, res) => {
    const query = req.query
    const queryResponse: QueryResponse = {
        filename: query.filename as string,
        width: query.width as unknown as number,
        height: query.height as unknown as number,
    }

    res.send(`server working <br> Queried filename is: ${queryResponse.filename} width: ${queryResponse.width}, height: ${queryResponse.height}`)
    // res.sendFile(filepath)
})



//start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})