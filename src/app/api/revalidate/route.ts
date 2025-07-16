import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  return NextResponse.json({
    revalidate: false,
    slug: null,
    timestamp: Date.now(),
  });

  try {
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
