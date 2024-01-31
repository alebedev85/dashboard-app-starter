import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from "react-redux";
import { selectCategores } from 'store/categores/categores-selectors';
import { delCategore, clearCategore } from '../store/categores/categores-actions'



const FilterPanel = () => {
  const dispatch = useDispatch();
  const badges = useSelector(selectCategores);

  // console.log(badges);

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {badges.map(item => (
            <Badge
              key={item}
              variant='clearable'
              onClear={() => dispatch(delCategore(item))}>
              {item}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearCategore())}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };