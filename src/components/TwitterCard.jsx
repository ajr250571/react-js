import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TwitterCard({ userName, name, initIsFollowing = true }) {
  const [isFollowing, setIsFollowing] = useState(initIsFollowing);
  const imageSrc = `https://unavatar.io/${userName}`;

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClass = isFollowing
    ? "btn rounded-full btn-primary"
    : "btn rounded-full btn-secondary";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <>
      <div className="card card-side card-compact bg-base-300 shadow-xl">
        <figure>
          <img
            className="w-16 h-16 rounded-full ml-2"
            src={imageSrc}
            alt="Perfil"
          />
        </figure>
        <div className="card-body flex flex-row items-center justify-between">
          <div className="flex flex-col mx-2">
            <h2 className="card-title">{name}</h2>
            <p>{`@${userName}`}</p>
          </div>
          <div onClick={handleClick} className="card-actions justify-end">
            <button className={buttonClass}>{text}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwitterCard;
