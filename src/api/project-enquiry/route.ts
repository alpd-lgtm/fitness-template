import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ProjectEnquiryBody = {
  business?: string;
  email?: string;
  phone?: string;
  currentWebsite?: string;
  budget?: string;
  message?: string;
  companyFax?: string;
  carePlan?: boolean;
  websiteType?: string;

  selectedTemplate?: {
    name?: string;
    type?: string;
  };
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ProjectEnquiryBody;

    const business = body.business?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const currentWebsite = body.currentWebsite?.trim() || "";
    const budget = body.budget?.trim() || "";
    const message = body.message?.trim() || "";
    const websiteType = body.websiteType?.trim() || "Ready-Made Website";

    const carePlan = Boolean(body.carePlan);

    const templateName =
      body.selectedTemplate?.name?.trim() || "Fitness Studio";

    const templateType =
      body.selectedTemplate?.type?.trim() ||
      "Fitness & Personal Training Website Design";

    /*
      Honeypot spam protection.

      Real users never see/fill this field.
      Bots commonly fill hidden fields.
    */
    if (body.companyFax?.trim()) {
      return NextResponse.json({
        success: true,
      });
    }

    /* REQUIRED FIELDS */
    if (!business || !email) {
      return NextResponse.json(
        {
          error: "Business name and email are required.",
        },
        {
          status: 400,
        },
      );
    }

    /* EMAIL VALIDATION */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /* BASIC LENGTH PROTECTION */
    if (
      business.length > 120 ||
      email.length > 254 ||
      phone.length > 50 ||
      currentWebsite.length > 300 ||
      budget.length > 100 ||
      message.length > 1000
    ) {
      return NextResponse.json(
        {
          error: "Some information is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const emailText = `
NEW AXIS STUDIO WEBSITE ENQUIRY

Selected Design:
${templateName}

Design Type:
${templateType}

Website Type:
${websiteType}


BUSINESS DETAILS

Business:
${business}

Email:
${email}

Phone:
${phone || "Not provided"}

Current Website:
${currentWebsite || "Not provided"}

Approximate Budget:
${budget || "Not provided"}

Website Care Plan:
${carePlan ? "Interested" : "Not selected"}


PROJECT DETAILS

${message || "No additional project details provided."}


--------------------------------

Source:
Fitness Studio Website Demo

Template:
${templateName}
`.trim();

    const { data, error } = await resend.emails.send({
      /*
        IMPORTANT:
        This sender domain must be verified in Resend.

        If axistudio.studio is already verified,
        you can use this.
      */
      from: "Axis Studio <website@axistudio.studio>",

      /*
        Change this if your Axis Studio enquiry
        email is different.
      */
      to: ["contact@axistudio.studio"],

      /*
        This means when you press Reply,
        it replies directly to the potential client.
      */
      replyTo: email,

      subject: `Fitness Studio website enquiry — ${business}`,

      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "We couldn't send your enquiry. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Project enquiry API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}