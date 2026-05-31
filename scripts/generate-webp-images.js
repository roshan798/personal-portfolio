import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const publicImagesRoot = path.resolve('public', 'images')
const projectFolders = [
    'airbnb',
    'BST-visualizer',
    'i-notebook',
    'sudoku',
    'trip-easy',
    'voicehub',
]
const avatarSource = path.resolve('src', 'assets', 'images', 'Designer1.png')

const writeImage = async (inputPath, outputPath, options) => {
    if (!fs.existsSync(inputPath)) {
        console.warn(`Skipping missing source image: ${inputPath}`)
        return
    }
    await sharp(inputPath)
        .resize(options.width)
        .webp({ quality: options.quality })
        .toFile(outputPath)
    console.log(`Generated ${path.relative(process.cwd(), outputPath)}`)
}

const generateAvatarImages = async () => {
    const avatarOutputs = [
        {
            width: 944,
            output: path.resolve('src', 'assets', 'images', 'Designer1.webp'),
        },
        {
            width: 1888,
            output: path.resolve(
                'src',
                'assets',
                'images',
                'Designer1@2x.webp'
            ),
        },
    ]

    for (const output of avatarOutputs) {
        await writeImage(avatarSource, output.output, {
            width: output.width,
            quality: 80,
        })
    }
}

const generateProjectImages = async () => {
    for (const folder of projectFolders) {
        const inputPath = path.resolve(publicImagesRoot, folder, '1.jpg')
        const outputBase = path.resolve(publicImagesRoot, folder, '1')

        await writeImage(inputPath, `${outputBase}.webp`, {
            width: 400,
            quality: 80,
        })
        await writeImage(inputPath, `${outputBase}@2x.webp`, {
            width: 800,
            quality: 80,
        })
    }
}

const run = async () => {
    try {
        await generateAvatarImages()
        await generateProjectImages()
        console.log('All WebP images generated successfully.')
    } catch (error) {
        console.error('Error generating WebP images:', error)
        process.exit(1)
    }
}

run()
