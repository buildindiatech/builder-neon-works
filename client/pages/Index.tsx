export default function Index() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-100">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/26969b9222d2fd662624d9c15c716f4892b14306?width=3840')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-20 py-6">
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/820b28a57f7e990b80c929cd81f74ab9e3da176c?width=288" 
              alt="Build India Realty Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white font-poppins text-lg hover:opacity-80">ABOUT US</a>
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
        <div className="relative z-10 flex flex-col items-center justify-center h-3/4 text-center px-4">
          <h1 className="font-merriweather text-6xl lg:text-7xl text-white font-normal leading-tight max-w-4xl mb-8">
            Invest in Vision. Live the Future.
          </h1>
          <p className="font-poppins text-xl text-white mb-12 max-w-3xl">
            Join Thousands Already Investing In Gujarat's Fastest - Growing Smart Zones
          </p>
          <button className="bg-white text-black font-poppins font-bold text-lg px-10 py-4 rounded flex items-center space-x-5 hover:bg-gray-100 transition">
            <span>CONTACT US</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 22 22">
              <path d="M15.1715 11.917L10.0382 17.0503L11.3444 18.3337L18.6777 11.0003L11.3444 3.66699L10.0382 4.95033L15.1715 10.0837H4.01107V11.917H15.1715Z"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-20 flex flex-col">
          <div className="w-52 h-1 bg-black mx-auto mb-10"></div>
          <div className="text-center mb-20">
            <h2 className="font-merriweather text-5xl text-black mb-6">Why Choose Us</h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering secure investments with transparency, trust, and long-term growth opportunities.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Features List */}
            <div className="flex-1 space-y-6">
              {[
                {
                  icon: "https://api.builder.io/api/v1/image/assets/TEMP/13095ed3ab872a33036e3c4e1266ccb7f2ed69d4?width=78",
                  title: "NA, NOC, TITLE CLEAR PROJECT"
                },
                {
                  icon: "location",
                  title: "PRIME & STRATEGIC LOCATION"
                },
                {
                  icon: "book",
                  title: "IMMEDIATE SALEDEED REGISTRATION"
                },
                {
                  icon: "https://api.builder.io/api/v1/image/assets/TEMP/70abe24f7eeebb64f8660859a1c042d0264bc8c1?width=74",
                  title: "LOCAL DEVELOPER"
                },
                {
                  icon: "https://api.builder.io/api/v1/image/assets/TEMP/fef6b46456d239eb0a92425ae6ca6730890d705d?width=90",
                  title: "WORKING IN MORE THAN ONE SECTOR"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-6 bg-white p-6 rounded-lg border border-gray-200">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon === "location" ? (
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 36 41">
                        <path d="M18 40.3545C17.5406 40.3545 17.1469 40.2232 16.8188 39.9607C16.4906 39.6982 16.2445 39.3537 16.0805 38.9271C15.457 37.0896 14.6695 35.367 13.718 33.7592C12.7992 32.1514 11.5031 30.2646 9.82969 28.099C8.15625 25.9334 6.79453 23.8662 5.74453 21.8975C4.72734 19.9287 4.21875 17.5498 4.21875 14.7607C4.21875 10.9217 5.54766 7.67324 8.20547 5.01543C10.8961 2.3248 14.1609 0.979492 18 0.979492C21.8391 0.979492 25.0875 2.3248 27.7453 5.01543C30.4359 7.67324 31.7812 10.9217 31.7812 14.7607C31.7812 17.7467 31.207 20.2404 30.0586 22.242C28.943 24.2107 27.6469 26.1631 26.1703 28.099C24.3984 30.4615 23.0531 32.4303 22.1344 34.0053C21.2484 35.5475 20.5102 37.1881 19.9195 38.9271C19.7555 39.3865 19.493 39.7475 19.132 40.01C18.8039 40.2397 18.4266 40.3545 18 40.3545Z"/>
                      </svg>
                    ) : feature.icon === "book" ? (
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 36 36">
                        <path d="M6 29.25C6 28.2554 6.39509 27.3016 7.09835 26.5983C7.80161 25.8951 8.75544 25.5 9.75 25.5H30M6 29.25C6 30.2446 6.39509 31.1984 7.09835 31.9016C7.80161 32.6049 8.75544 33 9.75 33H30V3H9.75C8.75544 3 7.80161 3.39509 7.09835 4.09835C6.39509 4.80161 6 5.75544 6 6.75V29.25Z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <img src={feature.icon} alt="" className="w-10 h-10" />
                    )}
                  </div>
                  <h3 className="font-poppins text-xl font-medium text-black">{feature.title}</h3>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2ebf58b0a23682e6faa252be6d5a8e04ea258a16?width=1336" 
                alt="Business handshake" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-20">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Content */}
            <div className="lg:w-1/2">
              <div className="w-52 h-1 bg-black mb-10"></div>
              <h2 className="font-merriweather text-5xl text-black mb-10">About Us</h2>
              <div className="space-y-6 mb-16">
                <p className="font-poppins text-xl text-gray-600 leading-relaxed">
                  Build India Realty LLP, established in 2021 and based in Ahmedabad, Gujarat, is a RERA-compliant real estate firm specializing in planned plot development across high-growth corridors. Backed by the vision of our partners Tarun Kumar and Avinash Hemantkumar Singh and supported by the RAV Group, we bring transparency, trust, and innovation to every project.
                </p>
                <p className="font-poppins text-xl text-gray-600 leading-relaxed">
                  Our mission is to deliver secure, legally compliant, and strategically located properties that ensure long-term value, while focusing on customer satisfaction, compliance, and sustainable growth.
                </p>
              </div>
              <button className="bg-black text-white font-poppins font-bold text-lg px-10 py-4 rounded hover:bg-gray-800 transition">
                MORE ABOUT
              </button>
            </div>

            {/* Statistics */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-12">
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
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-24 bg-gray-100">
        <div className="w-52 h-1 bg-black mx-auto mt-20"></div>
        <div className="container mx-auto px-20">
          <div className="text-center mb-20 flex flex-col">
            <h2 className="font-merriweather text-5xl text-black mx-auto mb-6">Our Projects</h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing thoughtfully planned projects designed for security, growth, and sustainable living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/2e2ac34f35bad624de699530f1755998cd93374e?width=1212",
                title: "Rajpath Enclave",
                location: "Dholera",
                description: "Rajpath Enclave will provide skillfully designed Residential Plot with all necessities.",
                buttonText: "BOOKING OPEN"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/b6734294995250b41307cd556efd9340063b493e?width=1564",
                title: "Rajpath Grand",
                location: "Dholera",
                description: "A perfect harmony of location, value and vision.",
                buttonText: "BOOKING OPEN"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/be64988a6b338e652a10d08023286aec46941e54?width=1212",
                title: "Green City",
                location: "Dholera",
                description: "Your dream home in Dholera Smart City is within reach.",
                buttonText: "BOOKING OPEN"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-poppins text-2xl font-bold text-black mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <svg className="w-4 h-6 text-gray-600" fill="currentColor" viewBox="0 0 15 24">
                      <path d="M7.5 22C7.26667 22 7.06667 21.9333 6.9 21.8C6.73333 21.6667 6.60833 21.4917 6.525 21.275C6.20833 20.3417 5.80833 19.4667 5.325 18.65C4.85833 17.8333 4.2 16.875 3.35 15.775C2.5 14.675 1.80833 13.625 1.275 12.625C0.758333 11.625 0.5 10.4167 0.5 9C0.5 7.05 1.175 5.4 2.525 4.05C3.89167 2.68333 5.55 2 7.5 2C9.45 2 11.1 2.68333 12.45 4.05C13.8167 5.4 14.5 7.05 14.5 9C14.5 10.5167 14.2083 11.7833 13.625 12.8C13.0583 13.8 12.4 14.7917 11.65 15.775C10.75 16.975 10.0667 17.975 9.6 18.775C9.15 19.5583 8.775 20.3917 8.475 21.275C8.39167 21.5083 8.25833 21.6917 8.075 21.825C7.90833 21.9417 7.71667 22 7.5 22Z"/>
                    </svg>
                    <span className="font-poppins text-xl text-gray-600">{project.location}</span>
                  </div>
                  <p className="font-poppins text-xl text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="bg-black text-white font-poppins font-bold text-lg px-10 py-4 rounded hover:bg-gray-800 transition">
                    {project.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Banner */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/90d10b32731d014e5ae7da19afc5178e64d86f7d?width=4050')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 flex items-end justify-center h-full pb-32">
          <button className="bg-white bg-opacity-70 text-black font-poppins font-bold text-lg px-10 py-4 rounded hover:bg-opacity-80 transition">
            TAKE A VIRTUAL TOUR
          </button>
        </div>
      </section>

      {/* Prime Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-20">
          <div className="flex flex-col lg:flex-row gap-20 mb-20">
            <div className="lg:w-1/2">
              <div className="w-52 h-1 bg-black mt-20"></div>
              <h2 className="font-merriweather text-5xl text-black mb-6 leading-tight">Prime Location</h2>
              <p className="font-poppins text-xl text-gray-600 leading-relaxed">
                Prime project locations offering excellent connectivity, convenience, and strong future growth potential.
              </p>
            </div>
          </div>
          
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4f5ebba78d7e6d69d93a2faf558556557936548a?width=3200"
            alt="Location Map"
            className="w-full h-auto rounded border-4 border-white"
          />
        </div>
      </section>

      {/* Dholera Smart City Project Section */}
      <section className="py-24 bg-white">
        <div className="w-52 h-1 bg-black mx-auto mt-20"></div>
        <div className="container mx-auto px-20">
          <div className="text-center mb-20">
            <h2 className="font-merriweather text-5xl text-black mb-6">Dholera Smart City Project</h2>
            <p className="font-poppins text-xl text-gray-600 max-w-4xl mx-auto">
              India's first Greenfield Smart City with world-class infrastructure, global connectivity, and sustainable growth opportunities.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 mb-20">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f206d63fb56f6053cdadbc2d4fb45acd13553f76?width=1518" 
              alt="Dholera Map 1" 
              className="lg:w-1/2 h-auto"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e6b6515e27424e540d68bbe9cac0cb891f6c39ae?width=1652" 
              alt="Dholera City Map" 
              className="lg:w-1/2 h-auto"
            />
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="font-poppins text-xl text-gray-600 leading-relaxed mb-8">
              Dholera is India's first smart city in Gujarat, India, which is part of Delhi-Mumbai Industrial Corridor (DMIC) and direct access to globally market. It is approximately 100 kilometers southwest of the Ahmedabad, Gujarat.
            </p>
            <p className="font-poppins text-xl text-gray-600 leading-relaxed mb-8">
              Strategic location, planned infrastructure development, sustainability, and government support are major advantages of Dholera SIR. The Dholera Smart City is being planned to become a global manufacturing and commerce hub.
            </p>
            <p className="font-poppins text-xl text-gray-600 leading-relaxed">
              It will serve as a model for India's smart cities, accommodating 2 million people and creating 800,000 jobs while promoting regional growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest in Dholera Smart City Section */}
      <section className="py-24 bg-gray-100">
        <div className="w-52 h-1 bg-black mx-auto mt-20"></div>
        <div className="container mx-auto px-20">
          <div className="text-center mb-20">
            <h2 className="font-merriweather text-5xl text-black mb-6">Why Invest in Dholera Smart City ?</h2>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Government-backed smart city offering prime connectivity, sustainable infrastructure, and high-return investment potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/0d60dd888caaa7ea6464c8fb87873268b281a406?width=1814",
                title: "ABCD Building",
                description: "Administrative and business hub shaping Dholera's smart future."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/115264fc71c96764dd0f4ad42853b702bc8a1fef?width=2142",
                title: "Six Lane Express Way",
                description: "High-speed connectivity linking Dholera with major cities."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/07a5e4abf1359ab65d66657f2b88fe72222306bf?width=1820",
                title: "Metro Train",
                description: "Modern rapid transit ensuring fast and reliable urban travel."
              }
            ].map((item, index) => (
              <div key={index} className="relative bg-white rounded-lg overflow-hidden h-96">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
                  <h3 className="font-poppins text-2xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="font-poppins text-xl text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/02d46d0fa9130df350f7eadf9fdf02b490f9dcb6?width=2126",
                title: "International Airport",
                description: "Global gateway boosting trade, tourism, and investment opportunities."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/443004f8941b3f94c6f4c425b446e66e30783f7a?width=1250",
                title: "Largest Solar Park",
                description: "Sustainable power source driving India's renewable energy future."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/dfc466eb87fc11fdfcf152042eb431c91ad8ff0d?width=2006",
                title: "Kalpsar Dam",
                description: "Massive water project ensuring sustainability and regional development."
              }
            ].map((item, index) => (
              <div key={index} className="relative bg-white rounded-lg overflow-hidden h-96">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
                  <h3 className="font-poppins text-2xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="font-poppins text-xl text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-52 h-1 bg-black mx-auto mt-20"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-20">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Content */}
            <div className="lg:w-1/3">
              <div className="w-52 h-1 bg-black mb-10"></div>
              <h2 className="font-merriweather text-5xl text-black mb-6 leading-tight">What they say after visit.</h2>
              <p className="font-poppins text-xl text-gray-600 leading-relaxed mb-8">
                Hear from our clients who trusted us to turn investments into lasting value.
              </p>
              
              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:bg-gray-100 transition">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 25">
                    <path d="M10.707 17.995C11.0975 18.3856 11.0975 19.0187 10.707 19.4093C10.3164 19.7998 9.68327 19.7998 9.29274 19.4093L3.49985 13.6164C2.7188 12.8353 2.7188 11.569 3.49985 10.7879L9.29274 4.99504C9.68327 4.60452 10.3164 4.60452 10.707 4.99504C11.0975 5.38557 11.0975 6.01873 10.707 6.40926L5.91406 11.2021H19.9998C20.5521 11.2021 20.9998 11.6499 20.9998 12.2021C20.9998 12.7544 20.5521 13.2021 19.9998 13.2021H5.91406L10.707 17.995Z"/>
                  </svg>
                </button>
                <button className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center hover:bg-gray-800 transition">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 25">
                    <path d="M13.2929 17.995C12.9024 18.3856 12.9024 19.0187 13.2929 19.4093C13.6834 19.7998 14.3166 19.7998 14.7071 19.4093L20.5 13.6164C21.281 12.8353 21.281 11.569 20.5 10.7879L14.7071 4.99504C14.3166 4.60452 13.6834 4.60452 13.2929 4.99504C12.9024 5.38557 12.9024 6.01873 13.2929 6.40926L18.0858 11.2021H4C3.44772 11.2021 3 11.6499 3 12.2021C3 12.7544 3.44772 13.2021 4 13.2021H18.0858L13.2929 17.995Z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="lg:w-2/3 flex gap-6 overflow-hidden">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 flex-shrink-0 w-96">
                  {/* Star Rating */}
                  <div className="flex space-x-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="font-poppins text-xl text-gray-600 leading-relaxed mb-6">
                    RAV Group made my first property purchase simple, transparent, and rewarding - truly a trustworthy partner.
                  </p>
                  
                  <div className="h-px bg-gray-200 mb-6"></div>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c52061aec298fd7a6ea5005b7b24b4b7a12bdc15?width=144" 
                      alt="Anuj Singh" 
                      className="w-18 h-18 rounded-full"
                    />
                    <div>
                      <h4 className="font-poppins text-xl font-bold text-gray-600">Anuj Singh</h4>
                      <p className="font-poppins text-lg text-gray-600">Motivational Speaker</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Main Footer Content */}
        <div className="py-20 px-20">
          <h2 className="font-merriweather text-5xl text-white mb-20">Follow us for the latest update !</h2>
          
          {/* Social Media Links */}
          <div className="flex flex-wrap gap-32 mb-20">
            {[
              { name: "FACEBOOK", icon: "facebook", handle: "BUILD INDIA REALITY" },
              { name: "YOUTUBE", icon: "youtube", handle: "BUILD INDIA REALITY" },
              { name: "INSTAGRAM", icon: "instagram", handle: "BUILD INDIA REALITY" },
              { name: "LINKEDIN", icon: "linkedin", handle: "BUILD INDIA REALITY" }
            ].map((social, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="w-18 h-18 bg-transparent border-2 border-white rounded-full flex items-center justify-center">
                  {/* Social Media Icons - simplified for brevity */}
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <div>
                  <h3 className="font-poppins text-3xl font-medium">{social.name}</h3>
                  <p className="font-poppins text-lg text-gray-300">{social.handle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3b7469db5ef8cf86f2cbce416c8baf05824e5bd8?width=288" 
                alt="Build India Realty Logo" 
                className="h-16 w-auto mb-6"
              />
              <p className="font-poppins text-base text-white mb-6">
                Build India Reality LLP is a RERA-registered real estate company based in Ahmedabad, Gujarat. Backed by the RAV Group
              </p>
              <div className="flex space-x-6">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-12 h-12 border border-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins text-base font-bold text-white mb-5">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Project", "Dholera SIR", "News", "Gallery", "Join Us"].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="font-poppins text-base text-gray-400 hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="font-poppins text-base font-bold text-white mb-5">Projects</h3>
              <ul className="space-y-2">
                {["Rajpath Enclave", "Rajpath Grand", "Green City"].map((project, i) => (
                  <li key={i}>
                    <a href="#" className="font-poppins text-base text-gray-400 hover:text-white transition">{project}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-poppins text-base font-bold text-white mb-5">Address</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="font-poppins text-base text-gray-400">+91 98983 39903</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="font-poppins text-base text-gray-400">https://buildindiarealty.com</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-1"></div>
                  <span className="font-poppins text-base text-gray-400">Zion Z1, 907-908, Bodakdev, Ahmedabad, Gujarat 380059</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-poppins text-base text-white mb-4 md:mb-0">@2025 BUILD INDIA REALITY</p>
              <div className="flex space-x-12">
                <a href="#" className="font-poppins text-base text-white hover:opacity-80 transition">Privacy Policy</a>
                <a href="#" className="font-poppins text-base text-white hover:opacity-80 transition">Terms of Service</a>
                <a href="#" className="font-poppins text-base text-white hover:opacity-80 transition">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
