import { useState } from 'react';

interface ProjectDropdownProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ProjectDropdown({ isVisible, onClose }: ProjectDropdownProps) {
  if (!isVisible) return null;

  const projects = [
    {
      id: 1,
      name: "Rajpath Enclave",
      location: "Dholera",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3c8e8a6b9c1ef066b52d4753db3b75295521778b?width=1212"
    },
    {
      id: 2,
      name: "Rajpath Grand", 
      location: "Dholera",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/00b843e590645b80eff9c3760bcdeb23114dabe0?width=1146"
    },
    {
      id: 3,
      name: "Green City",
      location: "Dholera", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/67383ef89216c9b9b0623f0a3f153f7b59d63b67?width=980"
    },
    {
      id: 4,
      name: "New Project Name",
      location: "Dholera",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3c8e8a6b9c1ef066b52d4753db3b75295521778b?width=1212"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Dropdown Content */}
      <div className="absolute top-0 left-0 right-0 bg-white rounded-b-lg shadow-2xl animate-in slide-in-from-top duration-300">
        <div className="pt-32 pb-20 px-40 bg-gray-100">
          {/* Project Grid */}
          <div className="flex justify-center items-start gap-8 mb-10">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col gap-5">
                {/* Project Card */}
                <div className="bg-gray-100 rounded overflow-hidden w-80">
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-poppins text-lg font-bold text-black mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-5 text-gray-600" fill="currentColor" viewBox="0 0 12 20">
                        <path d="M6 17.8574C5.81667 17.8574 5.65952 17.805 5.52857 17.7002C5.39762 17.5954 5.29941 17.4579 5.23393 17.2877C4.98512 16.5544 4.67083 15.8669 4.29107 15.2252C3.92441 14.5835 3.40714 13.8306 2.73929 12.9663C2.07143 12.102 1.52798 11.277 1.10893 10.4913C0.702976 9.70557 0.5 8.75616 0.5 7.64306C0.5 6.11092 1.03036 4.81449 2.09107 3.75378C3.16488 2.67997 4.46786 2.14307 6 2.14307C7.53214 2.14307 8.82857 2.67997 9.88929 3.75378C10.9631 4.81449 11.5 6.11092 11.5 7.64306C11.5 8.83473 11.2708 9.82997 10.8125 10.6288C10.3673 11.4145 9.85 12.1937 9.26072 12.9663C8.55357 13.9091 8.01667 14.6949 7.65 15.3234C7.29643 15.9389 7.00179 16.5937 6.76607 17.2877C6.7006 17.471 6.59583 17.6151 6.45179 17.7199C6.32083 17.8115 6.17024 17.8574 6 17.8574Z"/>
                      </svg>
                      <span className="font-poppins text-base text-gray-600">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center">
            <button className="font-poppins text-lg text-black py-5 px-10 underline underline-offset-4 hover:opacity-80 transition">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
