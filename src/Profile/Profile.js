import PropTypes, { string } from "prop-types";

export default function Profile ({fullName,bio,profession,handleName})  {
  return (
    <div style={{ color: 'white', textAlign: 'center', backgroundColor: 'black', borderColor:'ActiveBorder' }}>
      <p>My name is: {fullName}</p>
      <p>I'm : {bio}</p>
      <p>I work: {profession}</p>
      <button onClick={()=> handleName (fullName)}>Click </button>
    </div>
  )
}
Profile.defaultProps = {
    fullName: "Name ",
    bio: "bio",
    profession: "profession"
}
Profile.propTypes = {
  profession: PropTypes.string
};