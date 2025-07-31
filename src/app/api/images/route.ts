import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {
    return NextResponse.json(
      { error: 'Image URL is required' },
      { status: 400 }
    )
  }

  try {
    console.log('Fetching image:', imageUrl)

    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)'
      }
    })

    if (!response.ok) {
      console.error('Image fetch failed:', response.status, response.statusText)
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    const contentType = response.headers.get('content-type') || 'image/webp'
    const buffer = await response.arrayBuffer()

    console.log(
      'Image fetched successfully:',
      contentType,
      buffer.byteLength,
      'bytes'
    )

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'inline',
        'Cache-Control': 'public, max-age=31536000',
        'Access-Control-Allow-Origin': '*'
      }
    })
  } catch (error) {
    console.error('Error fetching image:', error)
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    )
  }
}
