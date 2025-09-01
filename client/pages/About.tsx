import { useState } from 'react';
import ProjectDropdown from '../components/ProjectDropdown';

export default function About() {
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-100">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/e3a120b7d1ee60ea5a2c279ddb191c6f64dcb9af?width=3840')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-20 py-6">
          <div className="flex items-center">
            <a href="/">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/820b28a57f7e990b80c929cd81f74ab9e3da176c?width=288"
                alt="Build India Realty Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/about" className="text-white font-poppins text-lg hover:opacity-80">ABOUT US</a>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-white font-poppins text-lg hover:opacity-80">PROJECT</a>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15L7 10H17L12 15Z"/>
              </svg>
            </div>
            <a href="#" className="text-white font-poppins text-lg hover:opacity-80">DHOLERA SIR</a>
            <a href="#" className="text-white font-poppins text-lg hover:opacity-80">NEWS</a>
            <a href="#" className="text-white font-poppins text-lg hover:opacity-80">GALLERY</a>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-white font-poppins text-lg hover:opacity-80">JOIN US</a>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15L7 10H17L12 15Z"/>
              </svg>
            </div>
          </div>

          <button className="bg-white text-black font-poppins font-bold text-lg px-10 py-3 rounded hover:bg-gray-100 transition">
            CONTACT US
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-3/4 text-center px-4">
          <h1 className="font-merriweather text-6xl lg:text-7xl text-white font-normal leading-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-40">
          <div className="text-center mb-20">
            <h2 className="font-merriweather text-5xl text-black mb-10">Our Story</h2>
            <p className="font-poppins text-xl text-gray-600 leading-relaxed max-w-6xl mx-auto">
              At Build India Realty LLP, we go beyond land development — we create secure, future-ready opportunities for individuals and families who aspire to grow with their investments. Based in Ahmedabad, Gujarat, and established in 2021, we are a RERA-compliant real estate LLP specializing in planned plot development across high-growth corridors.
            </p>
            <br />
            <p className="font-poppins text-xl text-gray-600 leading-relaxed max-w-6xl mx-auto">
              Backed by the vision of our designated partners, Tarun Kumar and Avinash Hemantkumar Singh, and supported by the strong foundation of the RAV Group, we bring transparency, trust, and innovation to every project we deliver. Our mission is simple: to offer legally secure, strategically located, and value-driven properties that stand the test of time.
            </p>
            <br />
            <p className="font-poppins text-xl text-gray-600 leading-relaxed max-w-6xl mx-auto">
              With a focus on customer satisfaction, compliance, and sustainable growth, Build India Realty LLP is committed to redefining land ownership and creating lasting value for all stakeholders.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 justify-center">
            <div className="text-center">
              <h3 className="font-merriweather text-5xl text-black mb-3">20+</h3>
              <p className="font-poppins text-xl text-black">RERA- Compliant Projects</p>
            </div>
            <div className="text-center">
              <h3 className="font-merriweather text-5xl text-black mb-3">150+</h3>
              <p className="font-poppins text-xl text-black">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="font-merriweather text-5xl text-black mb-3">80+</h3>
              <p className="font-poppins text-xl text-black">Client Who Trust US</p>
            </div>
            <div className="text-center">
              <h3 className="font-merriweather text-5xl text-black mb-3">500+</h3>
              <p className="font-poppins text-xl text-black">New visitors every week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Value Section */}
      <section className="py-40 bg-gray-100">
        <div className="container mx-auto px-40">
          <div className="text-center mb-20">
            <h2 className="font-merriweather text-5xl text-black mb-6">Our Mission & Value</h2>
            <p className="font-poppins text-xl text-gray-600">
              Committed to transparency, trust, and innovation, our mission is delivering secure, future-ready investments with lasting value.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Core Values Diagram */}
            <div className="flex-1 relative">
              <div className="relative w-full max-w-4xl mx-auto h-96">
                {/* Central Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-12 border-gray-400 bg-white flex items-center justify-center">
                  <h3 className="font-merriweather text-3xl font-bold text-black text-center">CORE<br />VALUES</h3>
                </div>

                {/* Outer Dashed Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-2 border-dashed border-gray-400"></div>

                {/* Value Points */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-6 border-blue-600 bg-white"></div>
                  <span className="font-poppins text-2xl font-bold text-gray-600 mt-2">Trust</span>
                </div>

                <div className="absolute top-32 right-8 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-6 border-gray-400 bg-white"></div>
                  <span className="font-poppins text-2xl font-bold text-gray-600 mt-2">Transparency</span>
                </div>

                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-6 border-orange-500 bg-white"></div>
                  <span className="font-poppins text-2xl font-bold text-gray-600 mt-2 ml-16">Customer-Connectivity</span>
                </div>

                <div className="absolute bottom-32 right-8 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-6 border-green-700 bg-white"></div>
                  <span className="font-poppins text-2xl font-bold text-gray-600 mt-2">Sustainability</span>
                </div>

                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-6 border-purple-600 bg-white"></div>
                  <span className="font-poppins text-2xl font-bold text-gray-600 mt-2">Compliance</span>
                </div>

                <div className="absolute bottom-32 left-8 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-6 border-gray-800 bg-white"></div>
                  <span className="font-poppins text-2xl font-bold text-gray-600 mt-2">Security</span>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="w-px h-96 bg-gray-400 mx-8"></div>

            {/* Mission & Value Text */}
            <div className="flex-1 space-y-20">
              <div className="bg-white p-10 rounded">
                <h3 className="font-poppins text-2xl text-black mb-10">Our Value</h3>
                <p className="font-poppins text-xl text-gray-600 leading-relaxed">
                  Transparency, trust, and innovation define Build India Realty. We value customer satisfaction, compliance, and sustainable growth, creating secure, future-ready opportunities that deliver long-term benefits for families, investors, and communities.
                </p>
              </div>

              <div className="w-full h-px bg-gray-400"></div>

              <div className="bg-white p-10 rounded">
                <h3 className="font-poppins text-2xl text-black mb-10">Our Mission</h3>
                <p className="font-poppins text-xl text-gray-600 leading-relaxed">
                  Our mission is to redefine land ownership by delivering RERA-approved, strategically located projects. We aim to provide legally secure, value-driven investments that ensure growth, reliability, and lasting prosperity for stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are Section */}
      <section className="py-40 relative">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(271deg, rgba(255, 255, 255, 0.00) 38.9%, rgba(255, 255, 255, 0.69) 47.95%, rgba(255, 255, 255, 0.99) 53.89%), url('https://api.builder.io/api/v1/image/assets/TEMP/0e633eca1ed0009815a2f3080467267fe3fa09bd?width=4150')`
          }}
        />
        <div className="relative container mx-auto px-40">
          <div className="max-w-4xl">
            <h2 className="font-merriweather text-6xl text-black mb-10">Who we are</h2>
            <p className="font-poppins text-2xl text-gray-600 leading-relaxed mb-8">
              Founded in 2021, Build India Realty LLP is a registered Limited Liability Partnership (LLPIN: AAY-9079) operating in the real estate sector. Headquartered in Ahmedabad, Gujarat, the firm is actively engaged in plot development and allied real estate solutions, with a strong emphasis on RERA compliance, transparency, and long-term value creation.
            </p>
            <p className="font-poppins text-2xl text-gray-600 leading-relaxed">
              Founded in 2021, Build India Realty LLP is a registered Limited Liability Partnership (LLPIN: AAY-9079) operating in the real estate sector.
            </p>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-40 bg-gray-100">
        <div className="container mx-auto px-40">
          <div className="flex flex-col lg:flex-row gap-30">
            {/* Left Content */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <h2 className="font-merriweather text-5xl text-black mb-6">What we do</h2>
              <p className="font-poppins text-xl text-gray-600 mb-16">
                We create secure, RERA-approved real estate opportunities focused on growth, trust, and sustainability.
              </p>
              
              <button className="bg-black text-white font-poppins font-bold text-lg px-10 py-4 rounded flex items-center space-x-5 hover:bg-gray-800 transition w-fit">
                <span>CONTACT US</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 22 22">
                  <path d="M15.1715 12.0105L10.0382 17.1438L11.3444 18.4272L18.6777 11.0938L11.3444 3.7605L10.0382 5.04383L15.1715 10.1772H4.01107V12.0105H15.1715Z"/>
                </svg>
              </button>
            </div>

            {/* Service Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-6 rounded flex flex-col items-center text-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ab4e61964ddd6d2ead609bd215b8765f98b2d2f1?width=320" 
                  alt="RERA Compliant" 
                  className="w-40 h-40 mb-6"
                />
                <p className="font-poppins text-xl text-gray-600">
                  RERA-Compliant Plot Development in high-potential growth corridors
                </p>
              </div>

              <div className="bg-white p-6 rounded flex flex-col items-center text-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a26d6eefd95b6af44eea77f738eedb92ec5b0ab0?width=320" 
                  alt="Transparent Transactions" 
                  className="w-40 h-40 mb-6"
                />
                <p className="font-poppins text-xl text-gray-600">
                  Transparent and Legally Secure Transactions ensuring customer confidence
                </p>
              </div>

              <div className="bg-white p-6 rounded flex flex-col items-center text-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/339052bbfe34f2154c407240e32711490e7a8eaa?width=320" 
                  alt="Sustainable Planning" 
                  className="w-40 h-40 mb-6"
                />
                <p className="font-poppins text-xl text-gray-600">
                  Sustainable Planning with a focus on community growth and infrastructure readiness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-40">
          <div className="text-center mb-20">
            <h2 className="font-merriweather text-5xl text-black mb-6">Our Leadership</h2>
            <p className="font-poppins text-xl text-gray-600">
              Guided by visionary leaders dedicated to trust, transparency, and sustainable real estate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Leader 1 */}
            <div className="relative">
              <div className="w-full h-96 bg-gray-100 rounded overflow-hidden mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da6e062637c272d4a9b211764629cf25682758a6?width=1442" 
                  alt="Mr. Tarun Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-10 rounded shadow-lg">
                <h3 className="font-poppins text-2xl text-black mb-6">Mr. Tarun Kumar</h3>
                <p className="font-poppins text-xl text-gray-600">
                  The masterminds nurturing our legacy.
                </p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="relative">
              <div className="w-full h-96 bg-gray-100 rounded overflow-hidden mb-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5e6dc1e854a8b3b580533423cd56cd659e3d6f09?width=1678" 
                  alt="Mr. Avinash Hemantkumar Singh" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="bg-white p-10 rounded shadow-lg">
                <h3 className="font-poppins text-2xl text-black mb-6">Mr. Avinash Hemantkumar Singh</h3>
                <p className="font-poppins text-xl text-gray-600">
                  The masterminds nurturing our legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
