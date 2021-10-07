function MissedGoal() {
  return <h1>MISSED!</h1>
}

function MadeGoal() {
  return <h1>Goal!</h1>
}

function GoalType(props) {
  const isGoal = props.isGoal;
  /*
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
  */
  // using a ternary operator
  return (
    <div>
      {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </div>
  );
}

export default GoalType;