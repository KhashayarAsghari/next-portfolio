import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  if (!formLink) {
    return new NextResponse("Google Form link is missing in env variables.", {
      status: 500,
    });
  }

  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    // ساخت URL برای ارسال به فرم گوگل
    const formUrl = new URL(formLink);
    formUrl.searchParams.append(fieldIdName!, name);
    formUrl.searchParams.append(fieldIdEmail!, email);
    formUrl.searchParams.append(fieldIdMessage!, message);
    if (social) formUrl.searchParams.append(fieldIdSocial!, social);

    // ارسال درخواست به فرم گوگل
    const res = await fetch(formUrl.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "no-cors", // چون گوگل اجازه CORS نمی‌دهد
    });

    // اگر موفقیت‌آمیز بود
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting to Google Form:", error);
    return new NextResponse("Failed to submit form.", { status: 500 });
  }
}