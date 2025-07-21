import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const revalidateToken = request.headers.get('x-revalidate-token');
    const expectedToken = process.env.X_REVALIDATE_TOKEN;

    if (!expectedToken || !revalidateToken || revalidateToken !== expectedToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    const slug = data.entity.attributes.slug;

    if (slug) {
      revalidatePath(`/${slug}`);

      return NextResponse.json({
        revalidate: true,
        slug: `/${slug}`,
        timestamp: Date.now(),
      });
    }

    return NextResponse.json({
      revalidate: false,
      slug: null,
      timestamp: Date.now(),
    });
  } catch {
    return NextResponse.json({
      revalidate: false,
      slug: null,
      timestamp: Date.now(),
    });
  }
}
