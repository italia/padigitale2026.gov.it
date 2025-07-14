import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export function POST() {
  revalidatePath("/", "layout");

  return NextResponse.json({
    revalidate: true,
    timestamp: Date.now(),
  });
}
