import { useState } from "react";
import ProjectDropdown from "../components/ProjectDropdown";

export default function News() {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState<"news" | "media">("news");

  const newsArticles = [
    {
      date: "August 29, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/526a08a14f7eb09c271ccb4a9f899fb908964b4f?width=840",
      title:
        "Tata–Merck Semiconductor Deal! What It Means for Dholera's Future",
      description:
        "The Dholera SIR is continuously getting global attention. Now, German chemi...",
    },
    {
      date: "August 25, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e71b7e44f44fa215e547025c1f517e8f277938ff?width=840",
      title:
        "Investors Take Note: Dholera-Bhavnagar Rail Line Gets Green Signal",
      description:
        "With road, rail, airport, and industrial projects moving full steam ahead...",
    },
    {
      date: "August 21, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b7e4a15ef44f6d2e673e2feea28c8ff18600b194?width=840",
      title:
        "Dholera Airport Almost Complete, Real Estate Price Set To Skyrocket",
      description:
        "If you have already invested in India's first Greenfield Project & Smart City, Dhole...",
    },
    {
      date: "August 19, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4855774f04dc824631800b5a15876d64de4848d5?width=840",
      title: "ovt Prioritizes Timely Completion of Ongoing Projects in Dholera",
      description:
        "What's happening in Dholera? Why is there so much spotlight on Dholera SI...",
    },
    {
      date: "August 17, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/1fe493009169049a79261a87836246c7dc527ec3?width=840",
      title: "Gujarat: Japan Eyes Semiconductor, EV Investments in Dholera",
      description:
        "Dholera, Gujarat – Japan is focusing on Dholera as a key location for significant...",
    },
    {
      date: "August 15, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/812e771f15b9628d8685b9bb69be2993196b45d8?width=840",
      title:
        "Gujarat Accelerates Housing Development to Support Tata's Rs. 91,000 Crore Semiconductor Plant in Dholera",
      description: "The Gujarat government has initiate...",
    },
  ];

  const mediaCoverageImages = [
    // First row
    "https://api.builder.io/api/v1/image/assets/TEMP/fc7979364d4add1ada850f6ae227ebb1251bb201?width=726",
    "https://api.builder.io/api/v1/image/assets/TEMP/26908624b631ceca66c536621f65ece28bb43ea8?width=726",
    "https://api.builder.io/api/v1/image/assets/TEMP/46ac2a937e4eca728b8c5d618f1dcb7f844dff9d?width=726",
    "https://api.builder.io/api/v1/image/assets/TEMP/45caa376040525f37c86e452cbc11a5cf24b19bd?width=726",
    // Second row
    "https://api.builder.io/api/v1/image/assets/TEMP/691d276af171b75c58858fc432f4db365f94b58f?width=726",
    "https://api.builder.io/api/v1/image/assets/TEMP/0fdfe48f1486cf8ce64cb257321c6a7f461b603e?width=726",
    "https://api.builder.io/api/v1/image/assets/TEMP/e4af741695543ca69122f369ab3e051c16a63e7e?width=726",
    "https://api.builder.io/api/v1/image/assets/TEMP/3e59506e8dc32298f56d360ed598bfb55edcc972?width=726",
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Project Dropdown */}
      <ProjectDropdown
        isVisible={showProjectDropdown}
        onClose={() => setShowProjectDropdown(false)}
      />

      {/* Navigation Header */}
      <header className="w-full h-28 bg-white border-b-2 border-white relative">
        <nav className="flex w-full justify-between items-center absolute left-40 bottom-2 top-2 h-24 pr-40">
          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/65722f0df00f3e67b8de46abc5c6e73e48cf0ed9?width=288"
            alt="Build India Realty Logo"
            className="w-36 h-24"
          />

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center gap-2 px-5 py-1 rounded">
              <span className="text-black text-center font-poppins text-lg font-medium">
                ABOUT US
              </span>
            </div>

            <div
              className="flex items-center justify-center gap-2 px-2 pl-5 py-1 rounded relative"
              onMouseEnter={() => setShowProjectDropdown(true)}
              onMouseLeave={() => setShowProjectDropdown(false)}
            >
              <span className="text-black font-poppins text-lg font-medium">
                PROJECT
              </span>
              <svg
                className="w-6 h-6 relative"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.5L7 10.5H17L12 15.5Z" fill="black" />
              </svg>
            </div>

            <div className="flex items-center justify-center gap-2 px-5 py-1 rounded">
              <span className="text-black font-poppins text-lg font-medium">
                DHOLERA SIR
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 px-5 py-1 rounded bg-gray-100">
              <span className="text-black font-poppins text-lg font-medium">
                NEWS
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 px-5 py-1 rounded">
              <span className="text-black font-poppins text-lg font-medium">
                GALLERY
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 px-5 py-1 rounded">
              <span className="text-black font-poppins text-lg font-medium">
                JOIN US
              </span>
              <svg
                className="w-6 h-6 relative"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.5L7 10.5H17L12 15.5Z" fill="black" />
              </svg>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex h-14 px-10 py-3 justify-center items-center gap-5 rounded bg-black">
            <span className="text-white font-poppins text-lg font-bold">
              CONTACT US
            </span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex w-full px-40 py-14 flex-col items-center gap-20 bg-gray-100">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-10 self-stretch">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-black text-center font-merriweather text-5xl font-normal leading-tight">
              News
            </h1>
            <p className="text-gray-600 text-center font-poppins text-xl font-normal leading-relaxed">
              {activeTab === "news"
                ? "Stay informed with recent property trends, infrastructure growth, and development news shaping future."
                : "Stay updated with the latest real estate developments, market trends, and project updates."}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col items-center gap-12 self-stretch">
          <div className="flex p-1 justify-center items-center gap-8 rounded border border-white bg-white">
            <div className="flex flex-col items-start gap-10">
              <div
                className={`flex w-125 h-14 justify-between items-start rounded ${activeTab === "news" ? "bg-black" : "bg-white"}`}
              >
                <button
                  onClick={() => setActiveTab("news")}
                  className="flex px-5 py-0 justify-between items-center flex-1 rounded"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-poppins text-lg font-medium ${activeTab === "news" ? "text-white" : "text-gray-600"}`}
                    >
                      News
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div
              className={`flex w-125 h-14 justify-between items-start rounded ${activeTab === "media" ? "bg-black" : "bg-white"}`}
            >
              <button
                onClick={() => setActiveTab("media")}
                className="flex px-5 py-0 justify-between items-center flex-1 rounded"
              >
                <div className="flex h-15 py-1 items-center rounded">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-poppins text-lg font-medium ${activeTab === "media" ? "text-white" : "text-gray-600"}`}
                    >
                      Media Coverage
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Content based on active tab */}
          {activeTab === "news" ? (
            // News Articles Grid
            <div className="flex flex-col items-start gap-12 self-stretch">
              <div className="flex flex-col items-start gap-20 self-stretch">
                {/* First Row */}
                <div className="flex justify-between items-center self-stretch">
                  {newsArticles.slice(0, 3).map((article, index) => (
                    <div
                      key={index}
                      className="flex w-125 p-10 flex-col items-center gap-7 rounded border border-gray-300 bg-white"
                    >
                      <span className="self-stretch text-gray-600 font-poppins text-base font-normal leading-tight">
                        {article.date}
                      </span>
                      <div className="flex h-72 pt-px justify-center items-center self-stretch relative">
                        <img
                          className="w-105 h-71 rounded absolute left-0 top-px"
                          src={article.image}
                          alt="News article"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-5 self-stretch">
                        <h3 className="self-stretch text-black font-poppins text-xl font-medium leading-relaxed">
                          {article.title}
                        </h3>
                        <p className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-tight">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Row */}
                <div className="flex justify-between items-center self-stretch">
                  {newsArticles.slice(3, 6).map((article, index) => (
                    <div
                      key={index + 3}
                      className="flex w-125 p-10 flex-col items-center gap-7 rounded border border-gray-300 bg-white"
                    >
                      <span className="self-stretch text-gray-600 font-poppins text-base font-normal leading-tight">
                        {article.date}
                      </span>
                      <div className="flex h-72 pt-px justify-center items-center self-stretch relative">
                        <img
                          className="w-105 h-71 rounded absolute left-0 top-px"
                          src={article.image}
                          alt="News article"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-5 self-stretch">
                        <h3 className="self-stretch text-black font-poppins text-xl font-medium leading-relaxed">
                          {article.title}
                        </h3>
                        <p className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-tight">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Media Coverage Grid
            <div className="flex flex-col items-start gap-12 self-stretch">
              {/* First Row */}
              <div className="flex h-64 items-center gap-12 self-stretch">
                {mediaCoverageImages.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    className="flex-1 self-stretch rounded border border-gray-300"
                    src={image}
                    alt={`Media coverage ${index + 1}`}
                  />
                ))}
              </div>

              {/* Second Row */}
              <div className="flex h-64 items-center gap-12 self-stretch">
                {mediaCoverageImages.slice(4, 8).map((image, index) => (
                  <img
                    key={index + 4}
                    className="flex-1 self-stretch rounded border border-gray-300"
                    src={image}
                    alt={`Media coverage ${index + 5}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
