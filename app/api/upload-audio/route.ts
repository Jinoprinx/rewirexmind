import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

// POST /api/upload-audio
// Body: multipart form with a "file" field
export async function POST(request: Request) {
  const form = await request.formData()
  const file = form.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  const blob = await put(file.name, file, {
    access: 'public',
    // Organise into a folder
    addRandomSuffix: false,
  })

  return NextResponse.json({ url: blob.url })
}
