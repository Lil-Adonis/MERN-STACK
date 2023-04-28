import PropTypes from 'prop-types';

const WorkoutDetails = ({ workout, key }) => {
  return (
    <div key={key} className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

WorkoutDetails.propTypes = {
  workout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  key: PropTypes.string.isRequired,
}

export default WorkoutDetails;
