import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const slug = data.entity.attributes.slug;

    if (slug) {
      revalidatePath(`/${slug}`, "layout");

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
