import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton'
const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (!isAuthenticated && !isLoading) {
        return <>
            PST...
            <br />
            <p>To login try this email as a dummy user:</p>
            <p><b>email: </b>test123@gmail.com <br /><b>password:</b>
            Test123$$$</p>
            <br />
            <b>OR</b><p> Register your own email test on signup!</p>
        </>
    }
    return (
        isAuthenticated && (
            <>
                <LogoutButton />
                <br />
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </>
        )
    );
};

export default Profile;