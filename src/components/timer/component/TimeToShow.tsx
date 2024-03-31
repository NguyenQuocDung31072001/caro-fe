export const TimeToShow: React.FC<{
  hour: number
  minute: number
}> = ({ hour, minute }) => {
  return (
    <div>
      {hour}:{minute}
    </div>
  )
}
