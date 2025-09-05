import { useState } from "react";
import ProjectDropdown from "../components/ProjectDropdown";

export default function Contact() {
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
                <path d="M12 15.5L7 10.5H17L12 15.5Z" fill="black"/>
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
                <path d="M12 15.5L7 10.5H17L12 15.5Z" fill="black"/>
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
      <main className="flex w-full px-40 py-14 flex-col items-start gap-44 bg-gray-100">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-5 mb-20">
          <h1 className="text-black text-center font-merriweather text-5xl font-normal leading-tight">
            Get in Touch with Our Team
          </h1>
          <p className="text-gray-600 text-center font-poppins text-xl font-normal leading-relaxed">
            Have an inquiry ? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex items-start gap-20 h-auto">
          {/* Contact Form */}
          <div className="flex-1 bg-white rounded p-10">
            <form className="flex flex-col gap-10">
              {/* Form Header */}
              <h2 className="text-black text-center font-poppins text-2xl font-medium leading-8">
                Let's talk about your project
              </h2>

              <div className="flex flex-col gap-6">
                {/* Name Fields Row */}
                <div className="flex items-start gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-black font-inter text-lg font-medium leading-5">
                      First Name
                    </label>
                    <div className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded bg-gray-100">
                      <input
                        type="text"
                        placeholder="Dhaval"
                        className="bg-transparent text-gray-600 font-inter text-base font-normal w-full outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-black font-inter text-lg font-medium leading-5">
                      Last Name
                    </label>
                    <div className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded bg-gray-100">
                      <input
                        type="text"
                        placeholder="Makani"
                        className="bg-transparent text-gray-600 font-inter text-base font-normal w-full outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="flex items-start gap-6">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-black font-inter text-lg font-medium leading-5">
                      Email
                    </label>
                    <div className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded bg-gray-100">
                      <input
                        type="email"
                        placeholder="makanidhaval9619@gmail.com"
                        className="bg-transparent text-gray-600 font-inter text-base font-normal w-full outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-black font-inter text-lg font-medium leading-5">
                      Phone Number
                    </label>
                    <div className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded bg-gray-100">
                      <input
                        type="tel"
                        placeholder="+91 9825269619"
                        className="bg-transparent text-gray-600 font-inter text-base font-normal w-full outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2 h-48">
                  <label className="text-black font-inter text-lg font-medium leading-5">
                    Message
                  </label>
                  <div className="flex items-start gap-2 px-5 py-3 border border-gray-300 rounded bg-gray-100 flex-1">
                    <textarea
                      placeholder="Write your message here..."
                      className="bg-transparent text-gray-500 font-inter text-base font-normal w-full h-full outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-10 py-5 bg-black rounded"
              >
                <span className="text-white font-poppins text-lg font-bold">
                  SEND MESSAGE
                </span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Contact Details */}
            <div className="flex flex-col gap-6 rounded shadow-lg backdrop-blur-sm">
              <div className="flex flex-col gap-6">
                <h3 className="text-black font-poppins text-2xl font-medium leading-8">
                  Prefer a Direct Approach ?
                </h3>

                <div className="flex flex-col gap-3">
                  {/* Phone */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                      <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="20" fill="white" />
                        <path
                          d="M21.9104 15.0488C22.6586 15.1948 23.3462 15.5607 23.8852 16.0997C24.4242 16.6387 24.7901 17.3263 24.9361 18.0745M21.9104 11.9849C23.4648 12.1575 24.9143 12.8536 26.0209 13.9588C27.1275 15.064 27.8254 16.5126 28 18.0668M27.234 24.1794V26.4773C27.2349 26.6906 27.1912 26.9018 27.1057 27.0973C27.0203 27.2927 26.8949 27.4682 26.7377 27.6124C26.5805 27.7566 26.3949 27.8664 26.1928 27.9348C25.9908 28.0031 25.7766 28.0285 25.5642 28.0093C23.2071 27.7532 20.943 26.9477 18.9537 25.6577C17.103 24.4817 15.5338 22.9125 14.3578 21.0618C13.0633 19.0635 12.2576 16.7884 12.0062 14.4207C11.9871 14.2089 12.0122 13.9954 12.0801 13.7938C12.148 13.5923 12.2571 13.4071 12.4005 13.25C12.5439 13.0929 12.7184 12.9674 12.913 12.8815C13.1075 12.7955 13.3178 12.751 13.5305 12.7508H15.8285C16.2002 12.7472 16.5606 12.8788 16.8425 13.1212C17.1243 13.3636 17.3084 13.7002 17.3605 14.0683C17.4574 14.8037 17.6373 15.5258 17.8966 16.2208C17.9997 16.4949 18.022 16.7929 17.9609 17.0793C17.8998 17.3658 17.7579 17.6287 17.552 17.837L16.5792 18.8098C17.6696 20.7275 19.2574 22.3153 21.1751 23.4057L22.1479 22.4329C22.3561 22.227 22.6191 22.085 22.9055 22.0239C23.192 21.9629 23.4899 21.9852 23.7641 22.0882C24.4591 22.3475 25.1811 22.5274 25.9165 22.6244C26.2886 22.6769 26.6284 22.8643 26.8713 23.151C27.1143 23.4377 27.2433 23.8037 27.234 24.1794Z"
                          stroke="#1E1E1E"
                          strokeWidth="1.53197"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-poppins text-xl font-normal leading-7">
                      +91 98983 39903
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                      <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                        <g clipPath="url(#clip0_348_5550)">
                          <path
                            d="M16.4047 4.5557C16.4047 3.74089 15.738 3.07422 14.9232 3.07422H3.07133C2.25651 3.07422 1.58984 3.74089 1.58984 4.5557M16.4047 4.5557V13.4446C16.4047 14.2594 15.738 14.9261 14.9232 14.9261H3.07133C2.25651 14.9261 1.58984 14.2594 1.58984 13.4446V4.5557M16.4047 4.5557L8.99725 9.74089L1.58984 4.5557"
                            stroke="#1E1E1E"
                            strokeWidth="1.48148"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_348_5550">
                            <rect
                              width="17.7778"
                              height="17.7778"
                              fill="white"
                              transform="translate(0.109375 0.111328)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-gray-600 font-poppins text-xl font-normal leading-7">
                      https://buildindiarealty.com
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                      <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="20" fill="white" />
                        <path
                          d="M20 30C19.7667 30 19.5667 29.9333 19.4 29.8C19.2333 29.6667 19.1083 29.4917 19.025 29.275C18.7083 28.3417 18.3083 27.4667 17.825 26.65C17.3583 25.8333 16.7 24.875 15.85 23.775C15 22.675 14.3083 21.625 13.775 20.625C13.2583 19.625 13 18.4167 13 17C13 15.05 13.675 13.4 15.025 12.05C16.3917 10.6833 18.05 10 20 10C21.95 10 23.6 10.6833 24.95 12.05C26.3167 13.4 27 15.05 27 17C27 18.5167 26.7083 19.7833 26.125 20.8C25.5583 21.8 24.9 22.7917 24.15 23.775C23.25 24.975 22.5667 25.975 22.1 26.775C21.65 27.5583 21.275 28.3917 20.975 29.275C20.8917 29.5083 20.7583 29.6917 20.575 29.825C20.4083 29.9417 20.2167 30 20 30ZM20 26.425C20.2833 25.8583 20.6 25.3 20.95 24.75C21.3167 24.2 21.85 23.4667 22.55 22.55C23.2667 21.6167 23.85 20.7583 24.3 19.975C24.7667 19.175 25 18.1833 25 17C25 15.6167 24.5083 14.4417 23.525 13.475C22.5583 12.4917 21.3833 12 20 12C18.6167 12 17.4333 12.4917 16.45 13.475C15.4833 14.4417 15 15.6167 15 17C15 18.1833 15.225 19.175 15.675 19.975C16.1417 20.7583 16.7333 21.6167 17.45 22.55C18.15 23.4667 18.675 24.2 19.025 24.75C19.3917 25.3 19.7167 25.8583 20 26.425ZM20 19.5C20.7 19.5 21.2917 19.2583 21.775 18.775C22.2583 18.2917 22.5 17.7 22.5 17C22.5 16.3 22.2583 15.7083 21.775 15.225C21.2917 14.7417 20.7 14.5 20 14.5C19.3 14.5 18.7083 14.7417 18.225 15.225C17.7417 15.7083 17.5 16.3 17.5 17C17.5 17.7 17.7417 18.2917 18.225 18.775C18.7083 19.2583 19.3 19.5 20 19.5Z"
                          fill="#1D1B20"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-poppins text-xl font-normal leading-7">
                      Zion Z1, 907-908, Bodakdev, Ahmedabad, Gujarat 380059
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="w-full h-96 rounded overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/27278ca75d4efb2567e15825e9e012e91d359348?width=1522"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
