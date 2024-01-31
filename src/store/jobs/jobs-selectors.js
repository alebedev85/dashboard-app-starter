export const selectAllJobs = (state) => state.jobs;

export const selectVisiblePositions = (state, filters= []) => {
    if (filters.length === 0) return state.jobs;

    return state.jobs.filter(job => {
        const jobFilter = [].concat(job.role, job.level, ...job.languages, ...job.tools);
        return filters.every(filter => jobFilter.includes(filter))
    })
}