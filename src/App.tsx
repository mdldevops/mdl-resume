import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen py-10 px-4 font-sans text-gray-800 flex justify-center">
      <div className="w-full max-w-[900px] bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Column */}
        <div className="w-full md:w-[32%] bg-[#f2f2f2] p-8 flex flex-col gap-8">

          {/* Profile Image */}
          <div className="flex justify-center mt-2">
            <img
              src="src/assets/me.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-xs text-gray-600 mt-2">
            <div className="flex items-center gap-3">
              <div className="bg-gray-600 text-white p-1.5 rounded-full">
                <Phone size={14} />
              </div>
              <span>+63 921 371 5869</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-600 text-white p-1.5 rounded-full">
                <Mail size={14} />
              </div>
              <span className="break-all">llard_graciade@yahoo.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-600 text-white p-1.5 rounded-full">
                <MapPin size={14} />
              </div>
              <span>Minglanilla Cebu City</span>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-800">Links</h3>
            <div className="flex flex-col gap-4 text-xs">
              <div>
                <div className="font-semibold text-gray-800 mb-0.5">LinkedIn:</div>
                <a href="#" className="text-gray-500 hover:text-gray-800 break-all">https://www.linkedin.com/in/millard-lapitan-513160243</a>
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Languages */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-800">Languages</h3>
            <div className="flex flex-col gap-4 text-xs">
              <div>
                <div className="mb-1 text-gray-800 font-medium">English</div>
                <div className="w-full bg-gray-300 h-1">
                  <div className="bg-gray-800 h-1" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-gray-800 font-medium">Filipino</div>
                <div className="w-full bg-gray-300 h-1">
                  <div className="bg-gray-800 h-1" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-gray-800 font-medium">Cebuano</div>
                <div className="w-full bg-gray-300 h-1">
                  <div className="bg-gray-800 h-1" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Hobbies */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-800">Hobbies</h3>
            <ul className="text-xs text-gray-600 flex flex-col gap-3 list-disc pl-4">
              <li>Coding</li>
              <li>DIYer</li>
              <li>Mobile Games</li>
              <li>Anime Enthusiast</li>
            </ul>
          </div>

        </div>

        {/* Right Column */}
        <div className="w-full md:w-[68%] flex flex-col">

          {/* Header */}
          <div className="bg-[#f2f2f2] p-10 md:p-12 pb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">Millard Lapitan</h1>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase">Full-Stack Developer</h2>
          </div>

          <div className="p-10 md:p-12 flex flex-col gap-8">
            {/* About Me */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-800 border-b border-gray-300 pb-2">About Me</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full-Stack Developer specializing in operational software (Record Management, Accounting Module, Billing, HR, Inventory, & Blockchain). I bridge the gap between complex business logic and user-friendly interfaces, ensuring transaction safety and system reliability for critical organizational data.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-800 border-b border-gray-300 pb-2">Work Experience</h3>

              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Desktop Developer</h4>
                  <div className="text-xs text-gray-500 mb-2 mt-0.5">
                    Informatika De Quantum / Cebu City / April 2014 - July 2017
                  </div>

                  <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1.5">
                    <li>Developed and enhanced desktop applications based on operational requirements.</li>
                    <li>Converted manual processes and paper-based data into structured automated systems.</li>
                    <li>Gathered and analyzed user workflows to design practical software solutions.</li>
                    <li>Implemented new features and optimized existing functionalities for performance and usability.</li>
                    <li>Provided maintenance, bug fixes, and user support for deployed systems.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-800">Full Stack Developer</h4>
                  <div className="text-xs text-gray-500 mb-2 mt-0.5">Cylix Technologies Inc / Mandaluyong City / Aug 2017 - Present</div>
                  <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1.5">
                    <li>Engineered and maintained operational business systems across web and desktop environments.</li>
                    <li>Developed a mobile water billing application that streamlined field meter reading and billing processes.</li>
                    <li>Built a blockchain-based ledger for secure, auditable transaction and activity logging.</li>
                    <li>Optimized and improved database performance for existing client systems, enhancing speed and reliability.</li>
                    <li>Worked closely with UI/UX to deliver clear, responsive, and user-friendly interfaces.</li>
                    <li>Diagnosed and resolved system issues, ensuring stability, accuracy, and continuous operation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-800 border-b border-gray-300 pb-2">Education</h3>

              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Bachelor of Science in Information Technology</h4>
                  <div className="text-xs text-gray-500 mb-2 mt-0.5">Professional Academy of the Philippines / Cebu / 2014</div>
                  <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1.5">
                    <li>Major in Programming</li>
                    <li>Focused on software development, database design, and system analysis.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-800 border-b border-gray-300 pb-2">Skills</h3>

              <div className="grid grid-cols-2 gap-x-12 gap-y-5">
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">PHP Frameworks (Laravel, CodeIgniter)</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">CSS Frameworks (Bootstrap, Tailwind)</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">UI Libraries (Vue.js, React.js)</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">DevTools (Git, Postman, Docker, Redis)</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">Node.js</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">Flutter</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">.Net (C#,VB)</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">.Net (C#,VB)</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-800 font-medium mb-1.5">WinForms Component (DevExpress, DotNetBar)</div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-gray-800 h-1" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
