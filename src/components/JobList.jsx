import { JobPosition } from './JobPosition';
import { useSelector } from "react-redux";
import {selectVisiblePositions} from '../store/jobs/jobs-selectors';
import { selectCategores } from 'store/categores/categores-selectors';

const JobList = () => {
  const badges = useSelector(selectCategores);
  const allJobs = useSelector(state => selectVisiblePositions(state, badges));

  return (
    <div className='job-list'>
      {allJobs.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};