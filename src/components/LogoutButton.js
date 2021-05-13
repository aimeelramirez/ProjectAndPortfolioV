import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();
    const handleClicker = () => {
        try {
            console.log("Logged out!")
            alert("Logged out!")
            logout({ returnTo: window.location.origin })

        } catch {
            console.error("error on click handled, try again!")
        }
    }
    return (
        <button onClick={() => { handleClicker() }}>
            Log Out
        </button>
    );
};

export default LogoutButton;