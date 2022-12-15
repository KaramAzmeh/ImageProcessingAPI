import sharp from 'sharp'
console.log(`path is: ${process.cwd()}`)
const resize: Promise<sharp.OutputInfo> = sharp('./assets/full/fjord.jpg')
.resize(100,100)
.jpeg({ mozjpeg: true })
.toFile('./assets/resized/fjord.jpg')

export default resize