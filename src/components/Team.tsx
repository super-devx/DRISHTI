import { Mail, Linkedin, User } from 'lucide-react'
import { principalInvestigator, currentTeamMembers, alumniMembers, TeamMember } from '../data/team'

function Team() {
  return (
    <section id="team" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds driving innovation and research at DRISHTI Lab
          </p>
        </div>

        {/* Principal Investigator - Featured Card */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">
            Principal Investigator
          </h3>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              {/* PI Photo */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-8">
                {principalInvestigator.photo ? (
                  <img
                    src={principalInvestigator.photo}
                    alt={principalInvestigator.name}
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                ) : (
                  <div className="w-48 h-48 rounded-full bg-blue-200 flex items-center justify-center shadow-lg">
                    <User className="w-24 h-24 text-blue-600" />
                  </div>
                )}
              </div>

              {/* PI Info */}
              <div className="md:w-2/3 p-8">
                <h4 className="text-3xl font-bold text-blue-900 mb-2">
                  {principalInvestigator.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-4">
                  {principalInvestigator.designation}
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Research Areas</h5>
                  <p className="text-gray-600">{principalInvestigator.researchArea}</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">About</h5>
                  <p className="text-gray-600">{principalInvestigator.bio}</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Qualifications</h5>
                  <ul className="text-gray-600 space-y-1">
                    {principalInvestigator.qualifications.map((qual, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Links */}
                <div className="flex gap-4">
                  {principalInvestigator.email && (
                    <a
                      href={`mailto:${principalInvestigator.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  )}
                  {principalInvestigator.linkedin && (
                    <a
                      href={principalInvestigator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Team Members */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">
            Research Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Alumni Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">
            Alumni
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} isAlumni />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Team Member Card Component with Hover Effect
interface TeamMemberCardProps {
  member: TeamMember
  isAlumni?: boolean
}

function TeamMemberCard({ member, isAlumni = false }: TeamMemberCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Photo */}
      <div className={`${isAlumni ? 'h-40' : 'h-48'} bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center`}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-blue-600" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-blue-900 mb-1">
          {member.name}
        </h4>
        <p className="text-blue-600 font-semibold text-sm mb-3">
          {member.designation}
        </p>
        <p className="text-gray-600 text-sm">
          {member.researchArea}
        </p>
      </div>

      {/* Hover Overlay with Contact Links */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4 className="text-xl font-bold text-white mb-2 text-center px-4">
          {member.name}
        </h4>
        <p className="text-blue-200 text-sm mb-6 text-center px-4">
          {member.designation}
        </p>
        <div className="flex gap-4">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Team