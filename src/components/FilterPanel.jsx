import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from "react-redux";
import { selectCategores } from 'store/categores/categores-selectors';
import { delCategore, clearCategore } from '../store/categores/categores-actions'



const FilterPanel = () => {
  const dispatch = useDispatch();
  const badges = useSelector(selectCategores);

  const handelDelFilter = (filter) => {
    dispatch(delCategore(filter))
  }

  // console.log(badges);

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {badges.map(badge => (
            <Badge
              key={badge}
              variant='clearable'
              onClear={handelDelFilter(badge)}>
              {badge}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearCategore())}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };