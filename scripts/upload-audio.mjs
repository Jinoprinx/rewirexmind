/**
 * One-time script: uploads all local mp3 files to Vercel Blob.
 * Run with: node scripts/upload-audio.mjs
 *
 * Requires: BLOB_READ_WRITE_TOKEN in your .env.local (or environment)
 */

import { put } from '@vercel/blob'
import { readFileSync, readdirSync } from 'fs'
import { join, extname, basename } from 'path'
import { config } from 'dotenv'

config({ path: '.env.local' })

const folders = [
  { dir: 'public/meditation-sounds', prefix: 'meditation-sounds' },
  { dir: 'public/music', prefix: 'music' },
]

for (const { dir, prefix } of folders) {
  const files = readdirSync(dir).filter((f) => extname(f) === '.mp3')

  for (const file of files) {
    const filePath = join(dir, file)
    const buffer = readFileSync(filePath)
    const blobPath = `${prefix}/${file}`

    console.log(`Uploading ${blobPath}...`)

    const blob = await put(blobPath, buffer, {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'audio/mpeg',
    })

    console.log(`  ✅ ${blob.url}`)
  }
}

console.log('\nAll files uploaded. Update your page.tsx files with the Blob base URL:')
console.log('https://<your-blob-store>.public.blob.vercel-storage.com/')
