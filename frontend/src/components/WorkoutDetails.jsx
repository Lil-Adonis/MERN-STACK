import PropTypes from 'prop-types';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout, key }) => {
    const { dispatch } = useWorkoutsContext()
    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
          method: 'DELETE'
        })
        const json = await response.json()
    
        if (response.ok) {
          dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
      }
  return (
    <div key={key} className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

WorkoutDetails.propTypes = {
  workout: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  key: PropTypes.string.isRequired,
}

export default WorkoutDetails;
