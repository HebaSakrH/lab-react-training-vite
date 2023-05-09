import React from "react";

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return <div>
    <h4>Last Name: {lastName}</h4>
    <h4>Gender: {gender}</h4>
    <h4>Height : {height}</h4>
    <h4>Birthday : {birth.toDateString()}</h4>
    <img src={picture} alt='profileImage'/>
</div>
}

export default IdCard;