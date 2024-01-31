import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from "react-redux";
import {selectAllJobs} from '../store/jobs/jobs-selectors';

const JobList = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector(selectAllJobs);

  return (
    <div className='job-list'>
      {allJobs.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};