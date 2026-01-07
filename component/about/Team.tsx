'use client';

import { useState, useEffect } from 'react';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  order: number;
}

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch('/api/about');
      const result = await response.json();
      if (result.success) {
        setTeamMembers(result.data);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to advancing solar energy and delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600">Loading team members...</p>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No team members found.</p>
            </div>
          ) : (
            teamMembers.map((member) => (
            <div
              key={member._id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition-colors"
                    >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.56 17.47h-2.9V13c0-1.25-.5-2.1-1.54-2.1-.83 0-1.33.56-1.55 1.1-.08.2-.1.48-.1.75v4.72h-2.9s.04-7.66 0-8.46h2.9v1.2c.37-.58 1.04-1.4 2.53-1.4 1.84 0 3.23 1.2 3.23 3.77v4.89zM4.46 5.37c-.99 0-1.64-.66-1.64-1.48 0-.85.67-1.48 1.68-1.48.99 0 1.63.65 1.65 1.48 0 .82-.65 1.48-1.69 1.48zm1.4 12.1H2.99V8.01h2.87v9.46zM18.66 0H1.34C.6 0 0 .6 0 1.34v17.32C0 19.4.6 20 1.34 20h17.32c.74 0 1.34-.6 1.34-1.34V1.34C20 .6 19.4 0 18.66 0z" />
                    </svg>
                  </a>
                  )}
                  {member.twitter && member.twitter !== '#' && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.94 4.23c-.82.36-1.7.6-2.6.71 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.93-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.14 1.1C7.28 8.41 3.92 6.68 1.58 3.98c-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.41 3.3 4.54 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.7-7.35 13.7-13.7 0-.21 0-.42-.01-.63.94-.68 1.76-1.53 2.41-2.5z" />
                    </svg>
                  </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          )))
          }
        </div>
      </div>
    </section>
  );
}
