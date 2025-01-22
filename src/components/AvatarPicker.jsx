import React, { useState } from 'react';


/// working to use various avatars 
const avatars = [
    `${import.meta.env.BASE_URL}avatar1.png`,
    `${import.meta.env.BASE_URL}avatar2.png`,
    `${import.meta.env.BASE_URL}avatar3.png`,
];

//component to andle my avatars
function AvatarPicker({ setAvatar }) {
    //statet array
    const [selected, setSelected] = useState(avatars[0]);

    //event handler
    const handleSelect = (avatar) => {
        setSelected(avatar);
        setAvatar(avatar);
    };

    return (
        <div className="avatar-picker">
            <h3>Choose Your Avatar:</h3>
            <div className="avatars">
                {avatars.map((avatar, index) => (
                    <img
                        key={index}
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        className={selected === avatar ? 'selected' : ''}
                        onClick={() => handleSelect(avatar)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AvatarPicker;
