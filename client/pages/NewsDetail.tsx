import { useState } from "react";
import ProjectDropdown from "../components/ProjectDropdown";

export default function NewsDetail() {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

  const relatedArticles = [
    {
      date: "August 17, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e1ab95c890b94050678836ff9bb87fe65f981497?width=840",
      title: "Investors Take Note : Dholera-Bhavnagar Rail Line Gets",
      description:
        "A perfect harmony of location, value and vision. A perfect harmony of location so...",
    },
    {
      date: "August 17, 2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e1ab95c890b94050678836ff9bb87fe65f981497?width=840",
      title: "Investors Take Note : Dholera-Bhavnagar Rail Line Gets",
      description:
        "A perfect harmony of location, value and vision. A perfect harmony of location so...",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-gray-100">
      <ProjectDropdown
        isVisible={showProjectDropdown}
        onClose={() => setShowProjectDropdown(false)}
      />

      {/* Navigation Header */}
      <header className="w-full h-28 bg-white border-b-2 border-white relative">
        <nav className="flex w-full justify-between items-center absolute left-40 bottom-2 top-2 h-24 pr-40">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/65722f0df00f3e67b8de46abc5c6e73e48cf0ed9?width=288"
            alt="Build India Realty Logo"
            className="w-36 h-24"
          />

          <div className="flex items-center gap-2">
            <div className="px-5 py-1">
              <span className="text-black font-poppins text-lg font-medium">
                ABOUT US
              </span>
            </div>

            <div
              className="flex items-center gap-2 px-5 py-1 relative"
              onMouseEnter={() => setShowProjectDropdown(true)}
              onMouseLeave={() => setShowProjectDropdown(false)}
            >
              <span className="text-black font-poppins text-lg font-medium">
                PROJECT
              </span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.5L7 10.5H17L12 15.5Z" fill="black" />
              </svg>
            </div>

            <div className="px-5 py-1">
              <span className="text-black font-poppins text-lg font-medium">
                DHOLERA SIR
              </span>
            </div>

            <div className="px-5 py-1 bg-gray-100 rounded">
              <span className="text-black font-poppins text-lg font-medium">
                NEWS
              </span>
            </div>

            <div className="px-5 py-1">
              <span className="text-black font-poppins text-lg font-medium">
                GALLERY
              </span>
            </div>

            <div className="flex items-center gap-2 px-5 py-1">
              <span className="text-black font-poppins text-lg font-medium">
                JOIN US
              </span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.5L7 10.5H17L12 15.5Z" fill="black" />
              </svg>
            </div>
          </div>

          <div className="flex h-14 px-10 py-3 justify-center items-center rounded bg-black">
            <span className="text-white font-poppins text-lg font-bold">
              CONTACT US
            </span>
          </div>
        </nav>
      </header>

      {/* Article Hero Section */}
      <div className="flex w-full px-[400px] pt-28 pb-20 justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-start gap-2 flex-1">
          <div className="text-gray-600 font-poppins text-xl font-normal leading-[1.35]">
            August 17, 2025
          </div>
          <div className="self-stretch text-black font-merriweather text-5xl font-normal leading-[1.35]">
            Government Approves New Infrastructure Projects in Dholera
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex justify-end items-center relative w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c288564968455d4e080ff7a9758541b908fd517d?width=3906"
          alt="Government Approves New Infrastructure Projects in Dholera"
          className="w-full h-[1252px] object-cover rounded aspect-[39/25]"
        />
      </div>

      {/* Article Content */}
      <div className="flex w-full px-[400px] pt-20 pb-40 flex-col items-center gap-20 bg-gradient-to-b from-white to-white">
        <div className="flex flex-col items-start gap-15 self-stretch">
          {/* Introduction */}
          <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.8] mb-15">
            The Gujarat government has announced a significant boost to the
            development of Dholera Special Investment Region (DSIR), approving a
            new wave of infrastructure projects aimed at transforming the region
            into a globally competitive smart city. The approvals highlight
            industrial expansion, smart utilities, and green energy initiatives,
            all designed to accelerate growth in India's first Greenfield Smart
            City.
          </div>

          {/* Let's talk about your project */}
          <div className="flex flex-col items-start gap-5 self-stretch mb-15">
            <div className="text-black text-center font-poppins text-2xl font-medium leading-8">
              Let's talk about your project
            </div>
            <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.8]">
              A key part of the approval package focuses on expanding industrial
              corridors within DSIR. New land parcels have been earmarked for
              manufacturing units, logistics hubs, and export-oriented
              industries, particularly in high-demand sectors such as
              electronics, automotive, and renewable energy equipment. The
              government expects these zones to attract both domestic and
              foreign direct investment, positioning Dholera as a manufacturing
              powerhouse along the Delhi–Mumbai Industrial Corridor (DMIC).
              <br />
              <br />
              Officials estimate that the industrial expansion will generate
              thousands of new jobs over the next five years, fueling migration
              and settlement in the area. This move not only strengthens the
              state's industrial base but also ensures sustainable demand for
              residential and commercial properties within Dholera.
            </div>
          </div>

          {/* Smart City Infrastructure */}
          <div className="flex flex-col items-start gap-5 self-stretch mb-15">
            <div className="text-black text-center font-poppins text-2xl font-medium leading-8">
              Smart City Infrastructure
            </div>
            <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.8]">
              Alongside industrial expansion, the government has cleared new
              urban infrastructure projects designed to align with global smart
              city standards. These include :
              <br />
              <br />
              Road and Highway Upgrades: Seamless connectivity between the
              Ahmedabad–Dholera Expressway and internal township roads.
              <br />
              ICT-Enabled Utilities: Smart power grids, water management
              systems, and underground cabling.
              <br />
              Drainage and Sewage Systems: Sustainable urban drainage ensuring
              climate resilience.
              <br />
              Public Amenities: Planned healthcare, education, and recreational
              facilities integrated into the city's blueprint.
              <br />
              <br />
              By combining technology, sustainability, and urban planning,
              Dholera is expected to provide a world-class quality of life,
              attracting investors, residents, and corporate tenants.
            </div>
          </div>

          {/* Residential and Commercial Development */}
          <div className="flex flex-col items-start gap-5 self-stretch mb-15">
            <div className="text-black text-center font-poppins text-2xl font-medium leading-8">
              Residential and Commercial Development
            </div>
            <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.8]">
              With industrial activity projected to surge, the government has
              also emphasized balanced residential and commercial growth. New
              approvals cover integrated townships, affordable housing clusters,
              shopping complexes, and business parks. This ensures that as the
              workforce grows, there will be adequate housing, retail, and
              lifestyle amenities to support them.
              <br />
              <br />
              Real estate experts predict that this wave of development will
              drive up land and property values in Dholera, making it one of the
              most promising real estate investment hotspots in India.
            </div>
          </div>

          {/* Green Energy Integration */}
          <div className="flex flex-col items-start gap-5 self-stretch mb-15">
            <div className="text-black text-center font-poppins text-2xl font-medium leading-8">
              Green Energy Integration
            </div>
            <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.8]">
              In line with India's commitment to sustainability, the newly
              approved projects also integrate renewable energy solutions. These
              include grid connections for the 5,000 MW Dholera Solar Park,
              energy-efficient street lighting, and eco-friendly building codes.
              The focus is to make Dholera not only an economic hub but also a
              model of sustainable urban development.
            </div>
          </div>

          {/* Economic and Real Estate Impact */}
          <div className="flex flex-col items-start gap-5 self-stretch mb-15">
            <div className="text-black text-center font-poppins text-2xl font-medium leading-8">
              Economic and Real Estate Impact
            </div>
            <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.8]">
              Industry observers believe that these approvals will serve as a
              catalyst for investor confidence. With rapid infrastructure
              rollout, Dholera is set to become a preferred destination for NRI
              investors, industrialists, and first-time buyers seeking high
              returns. Analysts forecast a 10–15% annual appreciation in
              property values over the next few years, with demand for plots and
              commercial spaces already on the rise.
            </div>
          </div>

          {/* Conclusion */}
          <div className="flex flex-col items-start gap-5 self-stretch">
            <div className="text-black text-center font-poppins text-2xl font-medium leading-8">
              Conclusion
            </div>
            <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.8]">
              The Gujarat government's approval of these new infrastructure
              projects marks a turning point in Dholera's growth story. By
              strengthening industrial capacity, urban infrastructure, housing,
              and sustainability, the state is laying the foundation for a smart
              city that is both economically vibrant and environmentally
              responsible.
              <br />
              <br />
              For investors, the message is clear: Dholera is not just the
              future of Gujarat, but a symbol of India's urban transformation.
            </div>
          </div>
        </div>
      </div>

      {/* More like this section */}
      <div className="flex w-full px-[400px] pt-40 pb-40 flex-col items-start gap-20">
        <div className="flex flex-col items-start gap-10 self-stretch">
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-5">
              <div className="w-[445px] text-black font-merriweather text-5xl font-normal leading-[1.25]">
                More like this
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 self-stretch">
          {relatedArticles.map((article, idx) => (
            <div
              key={idx}
              className="flex w-[500px] p-10 flex-col items-center gap-[26px] rounded border border-white/70 bg-white"
            >
              <div className="self-stretch text-gray-600 font-poppins text-base font-normal leading-[1.35]">
                {article.date}
              </div>
              <div className="flex h-[283px] pt-px justify-center items-center self-stretch relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-[420px] h-[282px] rounded absolute left-0 top-px object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-5 self-stretch">
                <div className="self-stretch text-black font-poppins text-xl font-medium leading-[1.6]">
                  {article.title}
                </div>
                <div className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.35]">
                  {article.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex w-full flex-col items-start bg-black">
        <div className="flex px-40 pb-6 flex-col items-start gap-2 self-stretch">
          <div className="flex w-full pt-8 pb-1 justify-center items-center">
            <div className="flex w-full flex-col items-end gap-9 absolute left-0 top-8 h-[358px]">
              <div className="flex justify-between items-start self-stretch">
                {/* Company Info */}
                <div className="flex w-[432px] flex-col items-start gap-6">
                  <div className="flex flex-col items-start gap-3 self-stretch">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/820b28a57f7e990b80c929cd81f74ab9e3da176c?width=288"
                      alt="Build India Realty Logo"
                      className="w-36 h-[90px]"
                    />
                    <div className="flex flex-col items-start gap-3 self-stretch">
                      <div className="self-stretch text-white font-poppins text-base font-normal">
                        Build India Reality LLP is a RERA-registered real estate
                        company based in Ahmedabad, Gujarat. Backed by the RAV
                        Group
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-[26px]">
                    {/* LinkedIn */}
                    <div className="w-12 h-12 relative">
                      <svg
                        className="w-12 h-12 stroke-gray-600"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z"
                          stroke="#474747"
                        />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] absolute left-4 top-[14px]"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_764_301)">
                          <path
                            d="M12.5977 6.22784C13.7911 6.22784 14.9357 6.70195 15.7796 7.54586C16.6235 8.38978 17.0977 9.53437 17.0977 10.7278V15.9778H14.0977V10.7278C14.0977 10.33 13.9396 9.94849 13.6583 9.66718C13.377 9.38588 12.9955 9.22784 12.5977 9.22784C12.1998 9.22784 11.8183 9.38588 11.537 9.66718C11.2557 9.94849 11.0977 10.33 11.0977 10.7278V15.9778H8.09766V10.7278C8.09766 9.53437 8.57176 8.38978 9.41568 7.54586C10.2596 6.70195 11.4042 6.22784 12.5977 6.22784Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.09766 6.97784H2.09766V15.9778H5.09766V6.97784Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.59766 4.72784C4.42608 4.72784 5.09766 4.05627 5.09766 3.22784C5.09766 2.39942 4.42608 1.72784 3.59766 1.72784C2.76923 1.72784 2.09766 2.39942 2.09766 3.22784C2.09766 4.05627 2.76923 4.72784 3.59766 4.72784Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>

                    {/* Facebook */}
                    <div className="w-12 h-12 relative">
                      <svg
                        className="w-12 h-12 stroke-gray-600"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z"
                          stroke="#474747"
                        />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] absolute left-[15px] top-[14px]"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M14.4805 1.90154H12.2305C11.2359 1.90154 10.2821 2.29662 9.57882 2.99988C8.87556 3.70315 8.48047 4.65697 8.48047 5.65153V7.90153H6.23047V10.9015H8.48047V16.9015H11.4805V10.9015H13.7305L14.4805 7.90153H11.4805V5.65153C11.4805 5.45262 11.5595 5.26186 11.7001 5.1212C11.8408 4.98055 12.0316 4.90153 12.2305 4.90153H14.4805V1.90154Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Instagram */}
                    <div className="w-12 h-12 relative">
                      <svg
                        className="w-12 h-12 stroke-gray-600"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z"
                          stroke="#474747"
                        />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] absolute left-[15px] top-4"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_764_309)">
                          <path
                            d="M13.6367 5.82419H13.6442M5.76172 2.44919H13.2617C15.3328 2.44919 17.0117 4.12812 17.0117 6.19919V13.6992C17.0117 15.7703 15.3328 17.4492 13.2617 17.4492H5.76172C3.69065 17.4492 2.01172 15.7703 2.01172 13.6992V6.19919C2.01172 4.12812 3.69065 2.44919 5.76172 2.44919ZM12.5117 9.47669C12.6043 10.1009 12.4977 10.7383 12.207 11.2984C11.9164 11.8585 11.4566 12.3127 10.8929 12.5964C10.3293 12.8801 9.69055 12.9789 9.06756 12.8786C8.44456 12.7784 7.86904 12.4842 7.42285 12.0381C6.97666 11.5919 6.68252 11.0163 6.58227 10.3933C6.48202 9.77035 6.58077 9.13161 6.86446 8.56797C7.14816 8.00433 7.60236 7.54449 8.16246 7.25387C8.72256 6.96324 9.36003 6.85663 9.98422 6.94919C10.6209 7.0436 11.2104 7.34029 11.6655 7.79542C12.1206 8.25055 12.4173 8.84 12.5117 9.47669Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>

                    {/* YouTube */}
                    <div className="w-12 h-12 relative">
                      <svg
                        className="w-12 h-12 stroke-gray-600"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z"
                          stroke="#474747"
                        />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] absolute left-[15px] top-4"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_764_313)">
                          <path
                            d="M17.4171 5.76115C17.3281 5.40521 17.1466 5.07908 16.8911 4.81571C16.6357 4.55233 16.3152 4.36104 15.9621 4.26115C14.6721 3.94615 9.51215 3.94615 9.51215 3.94615C9.51215 3.94615 4.35215 3.94615 3.06215 4.29115C2.70908 4.39104 2.38863 4.58233 2.13316 4.84571C1.87768 5.10908 1.69624 5.43521 1.60715 5.79115C1.37106 7.10032 1.25557 8.42838 1.26215 9.75865C1.25373 11.0989 1.36922 12.4371 1.60715 13.7562C1.70537 14.101 1.89088 14.4148 2.14576 14.667C2.40063 14.9193 2.71626 15.1015 3.06215 15.1962C4.35215 15.5412 9.51215 15.5412 9.51215 15.5412C9.51215 15.5412 14.6721 15.5412 15.9621 15.1962C16.3152 15.0963 16.6357 14.905 16.8911 14.6416C17.1466 14.3782 17.3281 14.0521 17.4171 13.6962C17.6514 12.3968 17.7669 11.0789 17.7621 9.75865C17.7706 8.41837 17.6551 7.08018 17.4171 5.76115Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.82465 12.2112L12.1371 9.75865L7.82465 7.30615V12.2112Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="w-[206px] h-[259px]">
                  <div className="flex w-[206px] flex-col items-start gap-5 h-[259px]">
                    <div className="self-stretch text-white font-poppins text-base font-bold">
                      Quick Links
                    </div>
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Home
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        About Us
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Project
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Dholera SIR
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        News
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Gallery
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Join Us
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="w-[205px] h-[131px]">
                  <div className="flex w-[205px] flex-col items-start gap-5 h-[131px]">
                    <div className="self-stretch text-white font-poppins text-base font-bold">
                      Projects
                    </div>
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Rajpath Enclave
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Rajpath Grand
                      </div>
                      <div className="self-stretch text-gray-400 font-poppins text-base font-normal">
                        Green City
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="w-[262px] h-[155px]">
                  <div className="inline-flex flex-col items-start gap-4 w-[262px] h-[155px]">
                    <div className="h-7 self-stretch text-white font-poppins text-base font-bold">
                      Address
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-[18px] self-stretch">
                        <svg
                          className="w-3 h-3 stroke-white"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M8.43281 3.29283C8.99393 3.40231 9.50962 3.67674 9.91388 4.08099C10.3181 4.48525 10.5926 5.00094 10.702 5.56206M8.43281 0.994873C9.59861 1.12438 10.6857 1.64644 11.5157 2.47534C12.3456 3.30423 12.869 4.39069 13 5.55632M12.4255 10.1407V11.8642C12.4262 12.0242 12.3934 12.1826 12.3293 12.3292C12.2652 12.4758 12.1712 12.6074 12.0533 12.7155C11.9354 12.8237 11.7962 12.906 11.6446 12.9573C11.4931 13.0086 11.3325 13.0276 11.1731 13.0132C9.40532 12.8211 7.70723 12.217 6.21528 11.2495C4.82722 10.3675 3.65038 9.19064 2.76835 7.80257C1.79745 6.30385 1.19324 4.59749 1.00466 2.82175C0.990307 2.66288 1.00919 2.50277 1.0601 2.3516C1.11102 2.20043 1.19285 2.06152 1.30039 1.94371C1.40793 1.8259 1.53883 1.73178 1.68474 1.66733C1.83065 1.60288 1.98838 1.56951 2.1479 1.56936H3.87136C4.15017 1.56662 4.42046 1.66535 4.63185 1.84715C4.84325 2.02895 4.98132 2.28141 5.02034 2.55748C5.09309 3.10903 5.22799 3.65058 5.42249 4.1718C5.49978 4.37742 5.51651 4.60089 5.47069 4.81573C5.42487 5.03057 5.31842 5.22777 5.16397 5.38397L4.43436 6.11357C5.25218 7.55183 6.44304 8.74269 7.8813 9.56051L8.6109 8.83091C8.7671 8.67645 8.9643 8.57 9.17914 8.52418C9.39398 8.47837 9.61745 8.49509 9.82307 8.57239C10.3443 8.76688 10.8858 8.90179 11.4374 8.97453C11.7165 9.0139 11.9713 9.15446 12.1535 9.36949C12.3357 9.58451 12.4325 9.859 12.4255 10.1407Z"
                            stroke="white"
                            strokeWidth="1.149"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-gray-400 font-poppins text-base font-normal">
                          +91 98983 39903
                        </div>
                      </div>
                      <div className="flex items-center gap-[18px] self-stretch">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M11 3.00327C11 2.45327 10.55 2.00327 10 2.00327H2C1.45 2.00327 1 2.45327 1 3.00327M11 3.00327V9.00327C11 9.55327 10.55 10.0033 10 10.0033H2C1.45 10.0033 1 9.55327 1 9.00327V3.00327M11 3.00327L6 6.50327L1 3.00327"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-gray-400 font-poppins text-base font-normal">
                          https://buildindiarealty.com
                        </div>
                      </div>
                      <div className="flex items-start gap-[18px] self-stretch">
                        <div className="flex w-3 pt-1 flex-col justify-center items-center">
                          <svg
                            className="w-2 h-4"
                            viewBox="0 0 10 16"
                            fill="none"
                          >
                            <path
                              d="M5.0026 14.6756C4.84705 14.6756 4.71372 14.6312 4.60261 14.5423C4.49149 14.4534 4.40816 14.3368 4.35261 14.1923C4.14149 13.5701 3.87483 12.9868 3.55261 12.4423C3.24149 11.8979 2.8026 11.259 2.23594 10.5256C1.66927 9.79231 1.20816 9.09232 0.852604 8.42565C0.50816 7.75898 0.335938 6.95343 0.335938 6.00898C0.335938 4.70898 0.785938 3.60898 1.68594 2.70898C2.59705 1.79787 3.70261 1.34232 5.0026 1.34232C6.30261 1.34232 7.40261 1.79787 8.30261 2.70898C9.21372 3.60898 9.66927 4.70898 9.66927 6.00898C9.66927 7.02009 9.47483 7.86454 9.08594 8.54231C8.70816 9.20898 8.26927 9.87009 7.76927 10.5256C7.16927 11.3256 6.71372 11.9923 6.40261 12.5256C6.10261 13.0479 5.85261 13.6034 5.65261 14.1923C5.59705 14.3479 5.50816 14.4701 5.38594 14.559C5.27483 14.6368 5.14705 14.6756 5.0026 14.6756ZM5.0026 12.2923C5.19149 11.9145 5.40261 11.5423 5.63594 11.1756C5.88038 10.809 6.23594 10.3201 6.70261 9.70898C7.18038 9.08676 7.56927 8.51454 7.86927 7.99231C8.18038 7.45898 8.33594 6.79787 8.33594 6.00898C8.33594 5.08676 8.00816 4.30343 7.35261 3.65898C6.70816 3.00343 5.92483 2.67565 5.0026 2.67565C4.08038 2.67565 3.29149 3.00343 2.63594 3.65898C1.99149 4.30343 1.66927 5.08676 1.66927 6.00898C1.66927 6.79787 1.81927 7.45898 2.11927 7.99231C2.43038 8.51454 2.82483 9.08676 3.30261 9.70898C3.76927 10.3201 4.11927 10.809 4.35261 11.1756C4.59705 11.5423 4.81372 11.9145 5.0026 12.2923ZM5.0026 7.67565C5.46927 7.67565 5.86372 7.51454 6.18594 7.19232C6.50816 6.87009 6.66927 6.47565 6.66927 6.00898C6.66927 5.54231 6.50816 5.14787 6.18594 4.82565C5.86372 4.50343 5.46927 4.34232 5.0026 4.34232C4.53594 4.34232 4.14149 4.50343 3.81927 4.82565C3.49705 5.14787 3.33594 5.54231 3.33594 6.00898C3.33594 6.47565 3.49705 6.87009 3.81927 7.19232C4.14149 7.51454 4.53594 7.67565 5.0026 7.67565Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="text-gray-400 font-poppins text-base font-normal">
                          Zion Z1, 907-908, Bodakdev,
                          <br />
                          Ahmedabad, Gujarat 380059
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px self-stretch bg-gray-600"></div>

          <div className="flex w-[969px] justify-between items-center">
            <div className="w-[210px] h-[26px] text-white font-poppins text-base font-normal leading-[1.6]">
              @2025 BUILD INDIA REALITY
            </div>
            <div className="flex items-center gap-15 self-stretch">
              <div className="text-white font-poppins text-base font-normal">
                Privacy Policy
              </div>
              <div className="text-white font-poppins text-base font-normal">
                Terms of Service
              </div>
              <div className="text-white font-poppins text-base font-normal">
                Refund Policy
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
