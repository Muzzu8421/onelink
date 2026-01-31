import clientPromise from "../../../../lib/mongodb";

export async function POST(request) {
  function isBase64Image(string) {
    return string && string.startsWith("data:image");
  }
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
  const client = await clientPromise;
  const db = client.db("OneLink");
  const collection = db.collection("Links");
  const data = await request.json();

  if (!data.handle || !data.links) {
    return Response.json(
      { Success: false, error: true, message: "Handle and links are required" },
      { status: 400 },
    );
  } else if (await collection.findOne({ handle: data.handle })) {
    return Response.json(
      { Success: false, error: true, message: "Handle already exists" },
      { status: 400 },
    );
  } else if (data.links.length === 0) {
    return Response.json(
      { Success: false, error: true, message: "At least one link is required" },
      { status: 400 },
    );
  } else if (
    data.profileImage &&
    !isValidUrl(data.profileImage) &&
    !isBase64Image(data.profileImage)
  ) {
    return Response.json(
      {
        Success: false,
        error: true,
        message: "Profile image must be a valid URL or base64 image",
      },
      { status: 400 },
    );
  }
  await collection.insertOne({
    handle: data.handle,
    links: data.links,
    profileImage: data.profileImage,
  });

  return Response.json({
    Success: true,
    error: false,
    message: "Link created successfully",
  });
}
