import sharp from 'sharp'
import fs from 'fs'

console.log(`path is: ${process.cwd()}`)
function resize(filename?: string, w?: number, h?: number): Promise<sharp.OutputInfo> | null  { 
    if (!isInfoValid(filename,w,h)) return null
    if (!fs.existsSync(`./assets/full/${filename}.jpg`)) { 
        console.log(`path: ./assets/full/${filename}.jpg is not valid`) 
        return null
    }
    return sharp(`./assets/full/${filename}.jpg`)
    .resize(w,h)
    .jpeg({ mozjpeg: true })
    .toFile(`./assets/resized/${filename}-${w!.toString()}x ${h!.toString()}.jpg`)
}


function isInfoValid(filename : unknown, w: unknown, h: unknown) : boolean {
    return (
        (filename !== null && w !== null && h !== null) 
        &&
        (filename !== undefined && w !== undefined && h !== undefined)  
        &&
        (!isNaN(+w) && !isNaN(+h) )
        )
}


export default resize