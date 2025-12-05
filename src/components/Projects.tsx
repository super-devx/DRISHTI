import { useState } from 'react'
import {
  Briefcase,
  Calendar,
  DollarSign,
  Users,
  Award,
  CheckCircle2,
  Clock,
  Building2,
  ExternalLink,
  Cpu,
  FlaskConical,
  Handshake
} from 'lucide-react'
import {
  currentProjects,
  completedProjects,
  labFacilities,
  collaborations,
  Project,
  LabFacility,
  Collaboration
} from '../data/projects'

function Projects() {
  const [activeTab, setActiveTab] = useState<'current' | 'completed'>('current')

  const displayedProjects = activeTab === 'current' ? currentProjects : completedProjects

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Projects & Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our research projects, state-of-the-art facilities, and collaborative partnerships
          </p>
        </div>

        {/* Research Projects Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-blue-900">Research Projects</h3>
          </div>

          {/* Project Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('current')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'current'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Clock className="w-5 h-5" />
              Current Projects
              <span className={`px-2 py-0.5 rounded-full text-sm ${
                activeTab === 'current' ? 'bg-blue-500' : 'bg-gray-200'
              }`}>
                {currentProjects.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'completed'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              Completed Projects
              <span className={`px-2 py-0.5 rounded-full text-sm ${
                activeTab === 'completed' ? 'bg-blue-500' : 'bg-gray-200'
              }`}>
                {completedProjects.length}
              </span>
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Lab Facilities Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FlaskConical className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-blue-900">Lab Facilities & Equipment</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>

        {/* Collaborations Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-blue-900">Collaborations & Partners</h3>
          </div>
          <p className="text-gray-600 mb-8 text-center">
            We collaborate with leading academic institutions, industry partners, and government organizations
          </p>

          {/* Collaboration Types */}
          <div className="space-y-8">
            {/* Academia */}
            <CollaborationSection
              title="Academic Institutions"
              collaborations={collaborations.filter(c => c.type === 'academia')}
              icon={<Award className="w-6 h-6" />}
              color="blue"
            />

            {/* Industry */}
            <CollaborationSection
              title="Industry Partners"
              collaborations={collaborations.filter(c => c.type === 'industry')}
              icon={<Building2 className="w-6 h-6" />}
              color="purple"
            />

            {/* Government */}
            <CollaborationSection
              title="Government Organizations"
              collaborations={collaborations.filter(c => c.type === 'government')}
              icon={<Briefcase className="w-6 h-6" />}
              color="green"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Project Card Component
interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const isOngoing = project.status === 'ongoing'
  const startDate = new Date(project.duration.start + '-01')
  const endDate = project.duration.end === 'Present' ? null : new Date(project.duration.end + '-01')

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const calculateProgress = () => {
    if (!endDate) return 50 // Default for ongoing projects without end date
    const start = startDate.getTime()
    const end = endDate.getTime()
    const now = new Date().getTime()
    const progress = ((now - start) / (end - start)) * 100
    return Math.min(Math.max(progress, 0), 100)
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-blue-600">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-blue-900 mb-2">{project.title}</h4>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              <strong>Sponsor:</strong> {project.sponsor}
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${
          isOngoing
            ? 'bg-green-100 text-green-700'
            : 'bg-blue-100 text-blue-700'
        }`}>
          {isOngoing ? (
            <>
              <Clock className="w-4 h-4 animate-pulse" />
              Ongoing
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Completed
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{project.description}</p>

      {/* Project Details Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-start gap-2">
          <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-700">Duration</p>
            <p className="text-gray-600">
              {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-700">Principal Investigator</p>
            <p className="text-gray-600">{project.pi}</p>
          </div>
        </div>

        {project.fundingAmount && (
          <div className="flex items-start gap-2">
            <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-700">Funding</p>
              <p className="text-gray-600 font-semibold">{project.fundingAmount}</p>
            </div>
          </div>
        )}

        {project.teamMembers && (
          <div className="flex items-start gap-2">
            <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-700">Team Members</p>
              <p className="text-gray-600">{project.teamMembers.join(', ')}</p>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar (for ongoing projects) */}
      {isOngoing && endDate && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(calculateProgress())}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
        </div>
      )}

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            Key Outcomes
          </p>
          <ul className="space-y-1">
            {project.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// Lab Facility Card Component
interface FacilityCardProps {
  facility: LabFacility
}

function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
        {facility.imageUrl ? (
          <img
            src={facility.imageUrl}
            alt={facility.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <Cpu className="w-20 h-20 text-blue-300" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-blue-900 mb-2">{facility.name}</h4>
        <p className="text-gray-600 text-sm mb-4">{facility.description}</p>

        {/* Specifications */}
        {facility.specifications && facility.specifications.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-700 mb-2">Key Specifications:</p>
            <ul className="space-y-1">
              {facility.specifications.map((spec, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 text-xs">
                  <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

// Collaboration Section Component
interface CollaborationSectionProps {
  title: string
  collaborations: Collaboration[]
  icon: React.ReactNode
  color: 'blue' | 'purple' | 'green'
}

function CollaborationSection({ title, collaborations, icon, color }: CollaborationSectionProps) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700 border-blue-300',
    purple: 'bg-purple-100 text-purple-700 border-purple-300',
    green: 'bg-green-100 text-green-700 border-green-300'
  }

  return (
    <div>
      <h4 className={`text-xl font-bold mb-4 flex items-center gap-2 ${color === 'blue' ? 'text-blue-900' : color === 'purple' ? 'text-purple-900' : 'text-green-900'}`}>
        {icon}
        {title}
      </h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {collaborations.map((collab) => (
          <CollaborationCard key={collab.id} collaboration={collab} colorClass={colorClasses[color]} />
        ))}
      </div>
    </div>
  )
}

// Collaboration Card Component
interface CollaborationCardProps {
  collaboration: Collaboration
  colorClass: string
}

function CollaborationCard({ collaboration, colorClass }: CollaborationCardProps) {
  return (
    <div className={`bg-white rounded-lg border-2 ${colorClass} p-4 hover:shadow-lg transition-all duration-300 group`}>
      {/* Logo Placeholder */}
      <div className="h-24 bg-gray-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
        {collaboration.logoUrl ? (
          <img
            src={collaboration.logoUrl}
            alt={collaboration.name}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <Building2 className="w-12 h-12 text-gray-300" />
        )}
      </div>

      {/* Name */}
      <h5 className="font-bold text-gray-900 mb-2 text-sm">{collaboration.name}</h5>

      {/* Description */}
      <p className="text-gray-600 text-xs mb-3 line-clamp-2">{collaboration.description}</p>

      {/* Website Link */}
      {collaboration.website && (
        <a
          href={collaboration.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium group-hover:underline"
        >
          Visit Website
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  )
}

export default Projects
