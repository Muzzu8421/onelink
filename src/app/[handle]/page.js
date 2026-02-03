import clientPromise from "../../../lib/mongodb";
import Image from "next/image";
import Link from "next/link";

function randomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

export default async function Handle({ params }) {
  const { handle } = await params;
  const client = await clientPromise;
  const db = client.db("OneLink");
  const collection = db.collection("Links");
  const document = await collection.findOne({ handle: handle });

  const data = JSON.parse(JSON.stringify(document));
  const bgcolor = randomHexColor();

  if (!data) {
    return (
      <div style={{background: bgcolor}} className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
          <p className="text-xl">This OneLink doesn&apos;t exist</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className={`min-h-screen py-12 px-4 sm:px-6`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Profile Image */}
          {data.profileImage && (
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
              <Image
                src={data.profileImage}
                alt={`${handle}'s profile`}
                fill
                className="rounded-full object-cover border-4 border-white shadow-xl"
                priority
              />
            </div>
          )}

          {/* Handle/Username */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
            @{handle}
          </h1>

          {/* Description */}
          {data.desc && (
            <p className="text-white/90 text-sm sm:text-base text-center max-w-md px-4">
              {data.desc}
            </p>
          )}
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {data &&
            data.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white/95 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200 rounded-2xl p-5 shadow-lg hover:shadow-xl cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {link.title}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Fixed Footer for the handle page */}
        <div className="text-center fixed bottom-3 left-0 right-0 mt-12">
          <Link
            href="/"
            className="inline-block mt-2 text-white font-semibold hover:underline"
          >
            <button className="text-white shadow-lg bg-[#12b5a3] px-4 py-2 rounded-full cursor-pointer font-medium hover:bg-[#12b5a3]/90 transition">
              onelink/
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
