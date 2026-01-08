/*import {useState} from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickSave=()=>{
        //TODO: Implement edit profile save and close logic
        alert('Profile updated successfully!');
    }
    const handleClickClose=()=>{
        //TODO: Implement edit profile close without save logic
        alert('EditProfile closed successfully.');
    }
    const handleClickClear=()=>{
        setFirstName('');
        setLastName('');
    }
    return (
        <>
            <label>
                First Name:
                <input type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label>
                Last Name:
                <input type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;

 */
import {useState} from "react";

interface EditProfileProps {
    close: () => void;
}

const EditProfile = ({close}: EditProfileProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickSave = () => {
        // TODO: Implement edit profile save logic
        alert('Profile updated!');
        close();
    }

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label>First name:
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                />
            </label>
            <label>Last name:
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                />
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default EditProfile;