import cloudinary from "@/lib/Cloudnary";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return Response.json({ error: "No file" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const result: any = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "uploads" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  return Response.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
}
