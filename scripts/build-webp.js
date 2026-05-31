import { execFileSync } from 'child_process'
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs'
import { dirname, extname, join, basename } from 'path'

const runSharp = (args) => {
  try {
    const command = `npx sharp-cli ${args.map((arg) => JSON.stringify(arg)).join(' ')}`
    execFileSync(command, { stdio: 'inherit', shell: true })
  } catch (error) {
    console.error('sharp-cli failed for', args)
    process.exit(1)
  }
}

const ensureDir = (path) => {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true })
  }
}

const collectImages = (dir) => {
  const items = readdirSync(dir)
  return items.flatMap((name) => {
    const fullPath = join(dir, name)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) return collectImages(fullPath)
    if (stat.isFile() && ['.jpg', '.jpeg'].includes(extname(name).toLowerCase())) {
      return [fullPath]
    }
    return []
  })
}

const buildAvatar = () => {
  const input = join('public', 'assets', 'Designer1-CJR_89zx.png')
  const outputDir = join('public', 'assets')
  ensureDir(outputDir)

  runSharp(['-i', input, '-o', join(outputDir, 'Designer1-CJR_89zx.webp'), 'resize', '944', '944', '-f', 'webp', '-q', '80'])
  runSharp(['-i', input, '-o', join(outputDir, 'Designer1-CJR_89zx@2x.webp'), 'resize', '1888', '1888', '-f', 'webp', '-q', '80'])
}

const buildProjectImages = () => {
  const sourceImages = collectImages(join('public', 'images'))
  for (const input of sourceImages) {
    const outputDir = dirname(input)
    const name = basename(input, extname(input))
    runSharp(['-i', input, '-o', join(outputDir, `${name}.webp`), 'resize', '400', '-f', 'webp', '-q', '80'])
    runSharp(['-i', input, '-o', join(outputDir, `${name}@2x.webp`), 'resize', '800', '-f', 'webp', '-q', '80'])
  }
}

const run = async () => {
  buildAvatar()
  buildProjectImages()
  console.log('WebP assets generated successfully.')
}

run()
