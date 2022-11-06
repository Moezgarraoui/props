import Profile from './Profile/Profile';
import './App.css';

export default function App() {
  const handleName = (name) => alert(`I'm ${name}`);
  return (
    <div >
     <Profile
    fullName= "Moez"
    bio="hello"
    profession="ingénieur géomètre"
     handleName={handleName}
     />
    </div>
  );
}