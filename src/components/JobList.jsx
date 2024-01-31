import { JobPosition } from './JobPosition';
import { useSelector } from "react-redux";
import {selectVisiblePositions} from '../store/jobs/jobs-selectors';
import { selectCategores } from 'store/categores/categores-selectors';
import { useDispatch } from "react-redux";
import {addCategore} from '../store/categores/categores-actions'

const JobList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectCategores);
  const positions = useSelector(state => selectVisiblePositions(state, filters));

  const handleAddBadge = (badge) => {
    dispatch(addCategore(badge))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} onBadgeClick={handleAddBadge}/>
      ))}
    </div>
  )
}

export {JobList};