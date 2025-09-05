import { useState } from "react";
import ProjectDropdown from "../components/ProjectDropdown";

export default function Gallery() {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

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

            <div className="flex items-center justify-center gap-2 px-5 py-1 rounded">
              <span className="text-black font-poppins text-lg font-medium">
                NEWS
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 px-5 py-1 rounded bg-gray-100">
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
              Gallery
            </h1>
            <p className="text-gray-600 text-center font-poppins text-xl font-normal leading-relaxed">
              Explore our gallery showcasing projects, developments, and
              milestones shaping Dholera's future.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-col items-start gap-8 self-stretch">
          {/* First Row */}
          <div className="flex h-64 items-center gap-8 self-stretch">
            <img
              className="flex-1 self-stretch rounded border-radius-3"
              src="https://api.builder.io/api/v1/image/assets/TEMP/9477b6a90d8832b54d58cc5e77d84b29fe385aa7?width=756"
              alt="Gallery Image 1"
            />
            <img
              className="flex-1 self-stretch rounded border-radius-3"
              src="https://api.builder.io/api/v1/image/assets/TEMP/ae22e6e12628220c976f61921944bb3da7307c3b?width=756"
              alt="Gallery Image 2"
            />
            <img
              className="flex-1 self-stretch rounded border-radius-3"
              src="https://api.builder.io/api/v1/image/assets/TEMP/176dc5a30373a29ebf60bd45b51f3a2da034cb46?width=756"
              alt="Gallery Image 3"
            />
            <img
              className="flex-1 self-stretch rounded"
              src="https://api.builder.io/api/v1/image/assets/TEMP/e4b3ccd9d8c30aac2037478155e6dfaa2835363f?width=756"
              alt="Gallery Image 4"
            />
          </div>

          {/* Second Row */}
          <div className="flex h-64 items-center gap-8 self-stretch">
            <img
              className="flex-1 self-stretch rounded"
              src="https://api.builder.io/api/v1/image/assets/TEMP/f7c6f7eea7fcf413329ddb96b4857af43c42f509?width=756"
              alt="Gallery Image 5"
            />
            <img
              className="flex-1 self-stretch rounded"
              src="https://api.builder.io/api/v1/image/assets/TEMP/3ad19330f78c0ca5a913ccd2e4d0f909b3d4d8f3?width=756"
              alt="Gallery Image 6"
            />
            <img
              className="flex-1 self-stretch rounded"
              src="https://api.builder.io/api/v1/image/assets/TEMP/96f28f2530c645e7b661ea35ad22cf45f58d092d?width=756"
              alt="Gallery Image 7"
            />
            <img
              className="flex-1 self-stretch rounded"
              src="https://api.builder.io/api/v1/image/assets/TEMP/37c43ecfbd09c98403e9f8b5a17caa8e35f4fd7c?width=756"
              alt="Gallery Image 8"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
