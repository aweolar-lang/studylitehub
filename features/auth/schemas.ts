import { NextResponse } from "next/server";

export async function loginSchema() {
  return NextResponse.json({ ok: true });
}