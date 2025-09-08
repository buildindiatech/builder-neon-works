import { useState } from "react";
import ProjectDropdown from "../components/ProjectDropdown";

export default function DholeraSir() {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const investmentFeatures = [
    {
      icon: "🌍",
      title: "Global Connectivity",
      description:
        "Seamless links via expressways, metro, and international airport for growth.",
    },
    {
      icon: "🏗",
      title: "World-class infrastructure",
      description:
        "Modern utilities, smart roads, and sustainable systems built for future.",
    },
    {
      icon: "📈",
      title: "High ROI Potential",
      description:
        "Assured property appreciation delivering long-term, profitable investment returns.",
    },
    {
      icon: "🏙",
      title: "Smart Infrastructure",
      description:
        "ICT-enabled governance with efficient water, power, and transport facilities.",
    },
    {
      icon: "✈️",
      title: "Airport and Expressway",
      description:
        "Rapid connectivity through international airport and six-lane express highway.",
    },
    {
      icon: "🚀",
      title: "Support for Startup and Innovation",
      description:
        "Thriving ecosystem encouraging entrepreneurship, innovation, and emerging businesses.",
    },
    {
      icon: "🏭",
      title: "Industrial and Commercial Growth",
      description:
        "Expanding industrial hubs boosting employment, trade, and economic prosperity.",
    },
    {
      icon: "⚖️",
      title: "Ease of Doing Business",
      description:
        "Business-friendly policies with transparent approvals and reduced compliance hurdles.",
    },
    {
      icon: "🏢",
      title: "Investor-friendly Governance",
      description:
        "Government-backed initiatives ensuring safety, growth, and investor confidence.",
    },
    {
      icon: "🛡",
      title: "Robust Disaster Management and Safety",
      description:
        "Well-planned systems for disaster preparedness and citizen safety.",
    },
    {
      icon: "🎭",
      title: "Social and Cultural Advantages",
      description:
        "Vibrant lifestyle enriched with heritage, community, and modern amenities.",
    },
  ];

  const faqs = [
    {
      question: "Where is Dholera located ?",
      answer:
        "Dholera is about 100 km from Ahmedabad, Gujarat, connected via expressway and upcoming metro.",
    },
    {
      question: "Is Dholera a government-approved project ?",
      answer:
        "Yes, Dholera is a government-approved project under the Delhi-Mumbai Industrial Corridor (DMIC) with full government backing.",
    },
    {
      question: "What is the ROI in Dholera real estate ?",
      answer:
        "Dholera real estate offers high ROI potential with expected annual appreciation of 15-25% due to infrastructure development and government investments.",
    },
    {
      question: "Can NRIs invest in Dholera ?",
      answer:
        "Yes, NRIs can invest in Dholera real estate with proper documentation and compliance with FEMA regulations.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start">
      <ProjectDropdown
        isVisible={showProjectDropdown}
        onClose={() => setShowProjectDropdown(false)}
      />

      {/* Hero Section */}
      <div className="flex h-[951px] flex-col items-start relative w-full">
        <div className="flex w-full flex-col items-center gap-[-82px] flex-1 relative">
          <div className="flex-1 self-stretch relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/612b940fcba7943d4a161c34de494c5efb114140?width=3872"
              alt="Dholera Smart City"
              className="w-full h-[1066px] object-cover absolute left-[-8px] top-[-56px]"
            />
            <div className="absolute left-[660px] top-[480px] w-[601px] h-[70px]">
              <h1 className="text-white text-center font-merriweather text-6xl font-normal leading-[1.1]">
                Dholera Smart City
              </h1>
            </div>
          </div>
        </div>

        {/* Navigation Header */}
        <nav className="flex w-full justify-between items-center absolute left-40 top-2 h-[90px] pr-40">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/820b28a57f7e990b80c929cd81f74ab9e3da176c?width=288"
            alt="Build India Realty Logo"
            className="w-36 h-[90px]"
          />

          <div className="flex items-center gap-2">
            <div className="px-5 py-1">
              <span className="text-white font-poppins text-lg font-medium">
                ABOUT US
              </span>
            </div>

            <div
              className="flex items-center gap-2 px-5 py-1 relative"
              onMouseEnter={() => setShowProjectDropdown(true)}
              onMouseLeave={() => setShowProjectDropdown(false)}
            >
              <span className="text-white font-poppins text-lg font-medium">
                PROJECT
              </span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="white" />
              </svg>
            </div>

            <div className="px-5 py-1 bg-white/10 rounded">
              <span className="text-white font-poppins text-lg font-medium">
                DHOLERA SIR
              </span>
            </div>

            <div className="px-5 py-1">
              <span className="text-white font-poppins text-lg font-medium">
                NEWS
              </span>
            </div>

            <div className="px-5 py-1">
              <span className="text-white font-poppins text-lg font-medium">
                GALLERY
              </span>
            </div>

            <div className="flex items-center gap-2 px-5 py-1">
              <span className="text-white font-poppins text-lg font-medium">
                JOIN US
              </span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="white" />
              </svg>
            </div>
          </div>

          <div className="flex h-[54px] px-10 py-3 justify-center items-center rounded bg-white">
            <span className="text-black font-poppins text-lg font-bold">
              CONTACT US
            </span>
          </div>
        </nav>
      </div>

      {/* Overview Section */}
      <div className="flex w-full px-40 py-40 flex-col items-start gap-44 bg-white">
        <div className="flex flex-col items-center gap-10 self-stretch">
          <h2 className="text-black text-center font-merriweather text-5xl font-normal leading-[1.1]">
            Overview
          </h2>
          <p className="w-[1032px] text-gray-600 text-center font-poppins text-xl font-normal leading-[1.6]">
            Dholera Smart City is India's first Greenfield Smart City, developed
            under the Delhi–Mumbai Industrial Corridor (DMIC). Strategically
            located in Gujarat, Dholera is planned with world-class
            infrastructure, sustainable growth models, and technology-enabled
            governance. Spread over 920 sq. km, the city is designed to
            accommodate millions of residents, industries, and businesses,
            making it a global hub for innovation, manufacturing, and
            investment.
          </p>
        </div>
      </div>

      {/* Why Invest Section */}
      <div className="flex py-40 flex-col items-center gap-20 self-stretch">
        <div className="flex w-[1598px] flex-col items-center gap-25">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-black text-center font-merriweather text-5xl font-normal leading-[1.1]">
              Why Invest in Dholera Smart City ?
            </h2>
            <div className="flex w-[717px] flex-col items-center gap-5">
              <p className="text-gray-600 text-center font-poppins text-xl font-normal leading-[1.6]">
                Dholera Smart City offers government-backed growth, global
                connectivity, sustainable infrastructure, and assured high
                returns.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-12 self-stretch">
            {/* First Row */}
            <div className="flex justify-between items-center self-stretch">
              <div className="w-[502px] h-[603px] rounded bg-white relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/020417d40bf46e7f28d15baca957b83a282f56f5?width=1814"
                  alt="ABCD Building"
                  className="w-[907px] h-[603px] object-cover absolute left-[-330px] top-0"
                />
                <div className="flex w-[449px] flex-col items-start gap-5 absolute left-7 top-[465px] h-28">
                  <h3 className="self-stretch text-white font-poppins text-3xl font-bold leading-[1.35]">
                    ABCD Building
                  </h3>
                  <p className="self-stretch text-white font-poppins text-xl font-normal leading-[1.35]">
                    Administrative and business hub shaping Dholera's smart
                    future.
                  </p>
                </div>
              </div>

              <div className="w-[502px] h-[603px] rounded bg-white relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/efd7a127c6dcce69d82cbb8901080482e7e370cc?width=2142"
                  alt="Six Lane Express Way"
                  className="w-[1071px] h-[603px] object-cover absolute left-[-264px] top-[-1px]"
                />
                <div className="flex w-[449px] flex-col items-start gap-5 absolute left-7 top-[465px] h-28">
                  <h3 className="self-stretch text-white font-poppins text-3xl font-medium leading-[1.35]">
                    Six Lane Express Way
                  </h3>
                  <p className="self-stretch text-white font-poppins text-xl font-normal leading-[1.35]">
                    High-speed connectivity linking Dholera with major cities.
                  </p>
                </div>
              </div>

              <div className="w-[502px] h-[603px] rounded bg-white relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c4c78f8101650765e10c8900d86357c8b1b1fcce?width=1820"
                  alt="Metro Train"
                  className="w-[910px] h-[606px] object-cover absolute left-[-294px] top-[-1px]"
                />
                <div className="flex w-[449px] flex-col items-start gap-5 absolute left-7 top-[465px] h-28">
                  <h3 className="text-white font-poppins text-3xl font-medium leading-[1.35]">
                    Metro Train
                  </h3>
                  <p className="self-stretch text-white font-poppins text-xl font-normal leading-[1.35]">
                    Modern rapid transit ensuring fast and reliable urban
                    travel.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-between items-center self-stretch">
              <div className="w-[502px] h-[603px] rounded bg-white relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4dd90082d839b462e852b88702fbb1a65a1e78ea?width=2126"
                  alt="International Airport"
                  className="w-[1063px] h-[603px] object-cover absolute left-[-360px] top-0"
                />
                <div className="flex w-[449px] flex-col items-start gap-5 absolute left-7 top-[465px] h-28">
                  <h3 className="self-stretch text-white font-poppins text-3xl font-medium leading-[1.35]">
                    International Airport
                  </h3>
                  <p className="self-stretch text-white font-poppins text-xl font-normal leading-[1.35]">
                    Global gateway boosting trade, tourism, and investment
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="w-[502px] h-[603px] rounded bg-white relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4a157447cd5aa8f9a619d3a495f99ce2110670f4?width=1250"
                  alt="Largest Solar Park"
                  className="w-[625px] h-[625px] object-cover absolute left-[-62px] top-[-11px]"
                />
                <div className="flex w-[449px] flex-col items-start gap-5 absolute left-7 top-[465px] h-28">
                  <h3 className="self-stretch text-white font-poppins text-3xl font-medium leading-[1.35]">
                    Largest Solar Park
                  </h3>
                  <p className="self-stretch text-white font-poppins text-xl font-normal leading-[1.35]">
                    Sustainable power source driving India's renewable energy
                    future.
                  </p>
                </div>
              </div>

              <div className="w-[502px] h-[603px] rounded bg-white relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/93c94405b0f5a09fa58c9f5e6e2491332a78fb33?width=2006"
                  alt="Kalpsar Dam"
                  className="w-[1003px] h-[602px] object-cover absolute left-[-251px] top-1"
                />
                <div className="flex w-[449px] flex-col items-start gap-5 absolute left-7 top-[465px] h-28">
                  <h3 className="self-stretch text-white font-poppins text-3xl font-bold leading-[1.35]">
                    Kalpsar Dam
                  </h3>
                  <p className="self-stretch text-white font-poppins text-xl font-normal leading-[1.35]">
                    Massive water project ensuring sustainability and regional
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government Initiatives Section */}
      <div className="flex w-full px-40 py-40 flex-col items-center gap-20 bg-white">
        <div className="flex flex-col items-center gap-5 self-stretch">
          <h2 className="text-black text-center font-merriweather text-5xl font-normal leading-[1.35]">
            Government Initiatives
          </h2>
          <p className="self-stretch text-gray-600 text-center font-poppins text-xl font-normal leading-[1.35]">
            Build India Realty LLP is a proud sister concern of the RAV Group, a
            name synonymous with trust, quality.
          </p>
        </div>

        <div className="flex items-start gap-10 self-stretch">
          <div className="flex w-[460px] h-[233px] px-15 py-6 flex-col items-center gap-6 rounded border border-gray-300 bg-gray-100">
            <div className="self-stretch text-black font-merriweather text-5xl font-normal leading-[1.35]">
              1
            </div>
            <p className="self-stretch text-gray-600 font-poppins text-xl font-medium leading-[1.6]">
              Establishment of Dholera Special Investment Region (DSIR) by
              Gujarat Government.
            </p>
          </div>

          <div className="flex w-[460px] px-15 py-6 flex-col items-center gap-6 self-stretch rounded border border-gray-300 bg-gray-100">
            <div className="self-stretch text-black font-merriweather text-5xl font-normal leading-[1.35]">
              2
            </div>
            <p className="self-stretch text-gray-600 font-poppins text-xl font-medium leading-[1.6]">
              Single-window clearance system for investors.
            </p>
          </div>

          <div className="flex w-[460px] px-15 py-6 flex-col items-center gap-6 self-stretch rounded border border-gray-300 bg-black">
            <div className="self-stretch text-white font-merriweather text-5xl font-normal leading-[1.35]">
              3
            </div>
            <p className="self-stretch text-white font-poppins text-xl font-medium leading-[1.6]">
              Policies supporting tax benefits, subsidies, and industrial
              incentives.
            </p>
          </div>

          <div className="flex w-[460px] px-15 py-6 flex-col items-center gap-6 self-stretch rounded border border-gray-300 bg-gray-100">
            <div className="self-stretch text-black font-merriweather text-5xl font-normal leading-[1.35]">
              4
            </div>
            <p className="self-stretch text-gray-600 font-poppins text-xl font-medium leading-[1.6]">
              Priority infrastructure projects: Expressways, Metro, Smart
              Utilities, ICT backbone.
            </p>
          </div>

          <div className="flex w-[460px] px-15 py-6 flex-col items-center gap-6 self-stretch rounded border border-gray-300 bg-gray-100">
            <div className="self-stretch text-black font-merriweather text-5xl font-normal leading-[1.35]">
              5
            </div>
            <p className="self-stretch text-gray-600 font-poppins text-xl font-medium leading-[1.6]">
              Partnerships with global technology providers for smart city
              systems.
            </p>
          </div>
        </div>
      </div>

      {/* Master Plan & Infrastructure Section */}
      <div className="flex w-full px-40 py-40 flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-5 self-stretch">
          <h2 className="text-black font-merriweather text-5xl font-normal leading-[1.35]">
            Master Plan & Infrastructure
          </h2>
          <p className="self-stretch text-gray-600 text-center font-poppins text-xl font-normal leading-[1.6]">
            Well-designed city layout integrating housing, industry, transport,
            and green spaces.
          </p>
        </div>

        <div className="flex flex-col items-start gap-10 self-stretch">
          <div className="flex flex-col items-center gap-6 self-stretch">
            <div className="flex justify-center items-start gap-6 self-stretch">
              <div className="flex p-6 flex-col items-center gap-6 flex-1 rounded border border-white/70 bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c129cc3585f0e837a1cd0cfcfeaa3b04796ae726?width=108"
                  alt="Land Area"
                  className="w-[54px] h-[54px]"
                />
                <h3 className="self-stretch text-black text-center font-poppins text-2xl font-medium leading-[1.1]">
                  Land Area
                </h3>
                <p className="text-gray-600 text-center font-poppins text-xl font-medium leading-[1.6]">
                  920 sq. km with 22 villages included in development.
                </p>
              </div>

              <div className="flex p-6 flex-col items-center gap-6 flex-1 rounded border border-white/70 bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5f5dbeb207004b47feb09fd3d1e8528ff0bc5a16?width=108"
                  alt="Town Planning"
                  className="w-[54px] h-[54px]"
                />
                <h3 className="self-stretch text-black text-center font-poppins text-2xl font-medium leading-[1.1]">
                  Town Planning
                </h3>
                <p className="text-gray-600 text-center font-poppins text-xl font-medium leading-[1.6]">
                  Divided into residential, industrial, commercial, and green
                  zones.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 self-stretch">
            <div className="flex justify-center items-start gap-6 self-stretch">
              <div className="flex p-6 flex-col items-center gap-6 flex-1 rounded border border-white/70 bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bc4b68bc4d889e213df73ff6b81697ad0cf3a17f?width=108"
                  alt="Transport"
                  className="w-[54px] h-[54px]"
                />
                <h3 className="self-stretch text-black text-center font-poppins text-2xl font-medium leading-[1.1]">
                  Transport
                </h3>
                <p className="text-gray-600 text-center font-poppins text-xl font-medium leading-[1.6]">
                  6-lane expressway, metro rail, and international airport.
                </p>
              </div>

              <div className="flex p-6 flex-col items-center gap-6 flex-1 rounded border border-white/70 bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/821f6f9e4f42b3c3924e48ad52eec8b497314f78?width=108"
                  alt="Utilities"
                  className="w-[54px] h-[54px]"
                />
                <h3 className="self-stretch text-black text-center font-poppins text-2xl font-medium leading-[1.1]">
                  Utilities
                </h3>
                <p className="text-gray-600 text-center font-poppins text-xl font-medium leading-[1.6]">
                  Smart water, power, and waste management systems.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 self-stretch">
            <div className="flex justify-center items-start gap-6 self-stretch">
              <div className="flex p-6 flex-col items-center gap-6 flex-1 rounded border border-white/70 bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/40df484fb67452ddc487b24bb378b3201cc0d3a1?width=108"
                  alt="Green Energy"
                  className="w-[54px] h-[54px]"
                />
                <h3 className="self-stretch text-black text-center font-poppins text-2xl font-medium leading-[1.1]">
                  Green Energy
                </h3>
                <p className="text-gray-600 text-center font-poppins text-xl font-medium leading-[1.6]">
                  Integration with 5,000 MW Solar Park.
                </p>
              </div>

              <div className="flex p-6 flex-col items-center gap-6 flex-1 rounded border border-white/70 bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/73340c33d8b2b36d53fa8638aa3570bc5bc7f171?width=108"
                  alt="Social Infra"
                  className="w-[54px] h-[54px]"
                />
                <h3 className="self-stretch text-black text-center font-poppins text-2xl font-medium leading-[1.1]">
                  Social Infra
                </h3>
                <p className="text-gray-600 text-center font-poppins text-xl font-medium leading-[1.6]">
                  Schools, universities, hospitals, entertainment, and shopping
                  hubs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Opportunities Section */}
      <div className="flex w-full px-40 py-40 flex-col items-center gap-20 bg-white">
        <div className="flex flex-col items-center gap-5 self-stretch">
          <h2 className="self-stretch text-black text-center font-merriweather text-5xl font-normal leading-[1.35]">
            Investment Opportunities
          </h2>
          <p className="self-stretch text-gray-600 text-center font-poppins text-xl font-normal leading-[1.6]">
            Unlock smart real estate investments with strong ROI and sustainable
            value creation.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5">
          {investmentFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-5 self-stretch">
              <div className="flex w-[580px] px-5 py-2 items-center gap-6 rounded-full border border-gray-300 bg-gray-100">
                <div className="flex px-[18px] py-3 justify-center items-center rounded-full bg-white">
                  <span className="text-black text-center font-poppins text-xl font-normal leading-[1.6] w-5 h-8">
                    {feature.icon}
                  </span>
                </div>
                <div className="text-black font-poppins text-xl font-medium leading-[1.35]">
                  {feature.title}
                </div>
              </div>
              <div className="flex px-6 py-2 items-center gap-6 self-stretch rounded-full border border-gray-300 bg-white">
                <p className="text-gray-600 text-center font-poppins text-xl font-normal leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex w-full px-40 py-40 justify-center items-start gap-20 self-stretch">
        <div className="flex flex-col items-start gap-5">
          <h2 className="w-[480px] text-black font-merriweather text-5xl font-normal leading-[1.35]">
            Frequently Asked Questions
          </h2>
          <p className="w-[480px] text-gray-600 font-poppins text-xl font-normal leading-[1.6]">
            Find quick answers to common queries about our projects and
            services.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 flex-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col items-center self-stretch rounded bg-white"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="flex px-6 py-6 justify-between items-center self-stretch"
              >
                <div className="text-black font-poppins text-xl font-medium leading-[1.6]">
                  {faq.question}
                </div>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {expandedFaq === index ? (
                    <path
                      opacity="0.8"
                      d="M2.25781 7.5H14.3578"
                      stroke="black"
                      strokeWidth="1.04881"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      opacity="0.8"
                      d="M8.30859 2.5V13.5M2.80859 8H13.8086"
                      stroke="black"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
              {expandedFaq === index && (
                <div className="flex px-6 pb-6 flex-col items-start self-stretch">
                  <p className="self-stretch text-gray-600 font-poppins text-xl font-normal leading-[1.35]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
