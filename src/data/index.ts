/**
 * Central export point for all data files
 * Import data like: import { team, publications, projects } from '@/data'
 */

// Team data
export * from './team'
export { principalInvestigator, currentTeamMembers, alumniMembers } from './team'

// Publications data
export * from './publications'
export { publications, getPublicationsByType, searchPublications } from './publications'

// Projects data
export * from './projects'
export { currentProjects, completedProjects, labFacilities, collaborations } from './projects'

// News data
export * from './news'
export { newsItems, getNewsByType, getRecentNews, getUpcomingEvents } from './news'

// Research areas data
export * from './research-areas'
export { researchAreas, getResearchAreaById } from './research-areas'

// Statistics data
export * from './stats'
export { mainStats, categorizedStats, yearlyGrowth, labMilestones } from './stats'

// Default export with all data organized
export default {
  team: {
    pi: require('./team').principalInvestigator,
    current: require('./team').currentTeamMembers,
    alumni: require('./team').alumniMembers
  },
  publications: require('./publications').publications,
  projects: {
    current: require('./projects').currentProjects,
    completed: require('./projects').completedProjects,
    facilities: require('./projects').labFacilities,
    collaborations: require('./projects').collaborations
  },
  news: require('./news').newsItems,
  research: require('./research-areas').researchAreas,
  stats: require('./stats').default
}
