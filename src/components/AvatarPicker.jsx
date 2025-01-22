import React, { useState } from 'react';


/// working to use various avatars 
const avatars = [
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png'
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
