import { useState, useMemo } from 'react'
import {
  Newspaper,
  Award,
  BookOpen,
  Calendar,
  Users,
  Trophy,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import {
  newsItems,
  formatNewsDate,
  isRecentNews,
  NewsItem,
  NewsType
} from '../data/news'

type FilterType = 'all' | NewsType

function News() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  // Filter news items
  const filteredNews = useMemo(() => {
    let filtered = newsItems

    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => item.type === activeFilter)
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [activeFilter])

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const paginatedNews = filteredNews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const filters: { id: FilterType; label: string; icon: typeof Newspaper }[] = [
    { id: 'all', label: 'All Updates', icon: Newspaper },
    { id: 'achievement', label: 'Achievements', icon: Trophy },
    { id: 'award', label: 'Awards', icon: Award },
    { id: 'publication', label: 'Publications', icon: BookOpen },
    { id: 'event', label: 'Events', icon: Calendar },
    { id: 'student', label: 'Student News', icon: Users }
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-blue-900">News & Updates</h2>
            <Sparkles className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest achievements, publications, events, and student accomplishments
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id
            const count = filter.id === 'all'
              ? newsItems.length
              : newsItems.filter(item => item.type === filter.id).length

            return (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id)
                  setCurrentPage(0) // Reset to first page on filter change
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.label}
                <span className={`text-sm px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-blue-500' : 'bg-gray-200'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* News Timeline/Grid */}
        <div className="mb-8">
          {paginatedNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedNews.map((newsItem) => (
                <NewsCard key={newsItem.id} newsItem={newsItem} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No news items found for this category</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    currentPage === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// News Card Component
interface NewsCardProps {
  newsItem: NewsItem
}

function NewsCard({ newsItem }: NewsCardProps) {
  const isRecent = isRecentNews(newsItem.date)
  const isUpcoming = new Date(newsItem.date) > new Date()

  const getTypeConfig = (type: NewsType) => {
    switch (type) {
      case 'achievement':
        return {
          color: 'bg-blue-100 text-blue-700 border-blue-300',
          icon: Trophy,
          label: 'Achievement'
        }
      case 'award':
        return {
          color: 'bg-yellow-100 text-yellow-700 border-yellow-300',
          icon: Award,
          label: 'Award'
        }
      case 'publication':
        return {
          color: 'bg-green-100 text-green-700 border-green-300',
          icon: BookOpen,
          label: 'Publication'
        }
      case 'event':
        return {
          color: 'bg-purple-100 text-purple-700 border-purple-300',
          icon: Calendar,
          label: 'Event'
        }
      case 'student':
        return {
          color: 'bg-pink-100 text-pink-700 border-pink-300',
          icon: Users,
          label: 'Student News'
        }
      default:
        return {
          color: 'bg-gray-100 text-gray-700 border-gray-300',
          icon: Newspaper,
          label: 'News'
        }
    }
  }

  const typeConfig = getTypeConfig(newsItem.type)
  const TypeIcon = typeConfig.icon

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 border-gray-100 hover:border-blue-300">
      {/* Image/Header Area */}
      <div className={`h-32 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden`}>
        {newsItem.imageUrl ? (
          <img
            src={newsItem.imageUrl}
            alt={newsItem.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <TypeIcon className="w-16 h-16 text-blue-200" />
          </div>
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {isRecent && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
              NEW
            </span>
          )}
          {isUpcoming && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
              UPCOMING
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Type Badge and Date */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${typeConfig.color}`}>
            <TypeIcon className="w-3 h-3" />
            {typeConfig.label}
          </span>
          <span className="text-sm text-gray-500 font-medium">
            {formatNewsDate(newsItem.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {newsItem.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {newsItem.description}
        </p>

        {/* Tags */}
        {newsItem.tags && newsItem.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {newsItem.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Link */}
        {newsItem.link && (
          <a
            href={newsItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all"
          >
            Read More
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  )
}

export default News
