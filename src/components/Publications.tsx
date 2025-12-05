import { useState, useMemo } from 'react'
import { FileText, ExternalLink, Search, BookOpen, Award, ScrollText, Lightbulb } from 'lucide-react'
import { publications, isRecentPublication, Publication, PublicationType } from '../data/publications'

type FilterType = 'all' | PublicationType

function Publications() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  // Filter and search publications
  const filteredPublications = useMemo(() => {
    let filtered = publications

    // Apply type filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(pub => pub.type === activeFilter)
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(pub =>
        pub.title.toLowerCase().includes(query) ||
        pub.authors.some(author => author.toLowerCase().includes(query)) ||
        pub.venue.toLowerCase().includes(query) ||
        pub.year.toString().includes(query)
      )
    }

    // Sort by year (newest first)
    return filtered.sort((a, b) => b.year - a.year)
  }, [activeFilter, searchQuery])

  const visiblePublications = filteredPublications.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPublications.length

  const filters: { id: FilterType; label: string; icon: typeof BookOpen }[] = [
    { id: 'all', label: 'All Publications', icon: FileText },
    { id: 'journal', label: 'Journals', icon: BookOpen },
    { id: 'conference', label: 'Conferences', icon: Award },
    { id: 'book-chapter', label: 'Book Chapters', icon: ScrollText },
    { id: 'patent', label: 'Patents', icon: Lightbulb }
  ]

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  return (
    <section id="publications" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Publications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our research contributions in leading journals, conferences, and patents
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title, author, venue, or year..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setVisibleCount(6) // Reset visible count on search
              }}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id
            const count = filter.id === 'all'
              ? publications.length
              : publications.filter(pub => pub.type === filter.id).length

            return (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id)
                  setVisibleCount(6) // Reset visible count on filter change
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.label}
                <span className={`text-sm px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6 text-gray-600">
          {searchQuery && (
            <p>
              Found <span className="font-semibold text-blue-900">{filteredPublications.length}</span> publication
              {filteredPublications.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </p>
          )}
          {!searchQuery && activeFilter !== 'all' && (
            <p>
              Showing <span className="font-semibold text-blue-900">{filteredPublications.length}</span> {activeFilter} publication
              {filteredPublications.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Publications Grid */}
        {filteredPublications.length > 0 ? (
          <>
            <div className="grid gap-6 mb-8">
              {visiblePublications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Load More Publications ({filteredPublications.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No publications found matching your criteria</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveFilter('all')
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// Publication Card Component
interface PublicationCardProps {
  publication: Publication
}

function PublicationCard({ publication }: PublicationCardProps) {
  const isRecent = isRecentPublication(publication.year)

  const getTypeColor = (type: PublicationType) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-700'
      case 'conference':
        return 'bg-purple-100 text-purple-700'
      case 'book-chapter':
        return 'bg-green-100 text-green-700'
      case 'patent':
        return 'bg-amber-100 text-amber-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getTypeLabel = (type: PublicationType) => {
    switch (type) {
      case 'journal':
        return 'Journal'
      case 'conference':
        return 'Conference'
      case 'book-chapter':
        return 'Book Chapter'
      case 'patent':
        return 'Patent'
      default:
        return type
    }
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Main Content */}
        <div className="flex-1">
          {/* Title and Badges */}
          <div className="flex flex-wrap items-start gap-2 mb-3">
            <h3 className="text-xl font-bold text-blue-900 flex-1 min-w-0">
              {publication.title}
            </h3>
            {isRecent && (
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                NEW
              </span>
            )}
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(publication.type)}`}>
              {getTypeLabel(publication.type)}
            </span>
          </div>

          {/* Authors */}
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Authors:</span> {publication.authors.join(', ')}
          </p>

          {/* Venue/Journal */}
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">
              {publication.type === 'patent' ? 'Patent Office' : 'Published in'}:
            </span>{' '}
            {publication.venue}
          </p>

          {/* Additional Details */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            <span className="font-semibold text-blue-700">{publication.year}</span>
            {publication.volume && (
              <span>Vol. {publication.volume}{publication.issue ? `, Issue ${publication.issue}` : ''}</span>
            )}
            {publication.pages && <span>pp. {publication.pages}</span>}
            {publication.publisher && <span>{publication.publisher}</span>}
            {publication.patentNumber && (
              <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">{publication.patentNumber}</span>
            )}
          </div>

          {/* Abstract (if available) */}
          {publication.abstract && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {publication.abstract}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="flex md:flex-col gap-2 md:ml-4">
          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap"
            >
              <ExternalLink className="w-4 h-4" />
              DOI
            </a>
          )}
          {publication.pdfUrl && (
            <a
              href={publication.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium whitespace-nowrap"
            >
              <FileText className="w-4 h-4" />
              PDF
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Publications