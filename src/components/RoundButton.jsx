import '../styles/RoundButton.css';

export const RoundButton = ({onClick}) => {
  return (
    <button className="round-button" onClick={onClick}>
      <div className="pulse"></div>
      <img className='user-plus' src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1745700028/user-plus_kjf9jm.svg" alt="User Plus Icon" width="24" height="24" />
    </button>
  );
};