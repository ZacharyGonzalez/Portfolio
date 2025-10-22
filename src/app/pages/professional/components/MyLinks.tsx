import LinkButton from "../../../../components/LinkButton"
import { useNavigate } from "react-router-dom";

export default function MyLinks() {
    const navigate = useNavigate();


    return (
        <div>
            <LinkButton onClick={() => navigate("/profile")}>
                Go to Profile
            </LinkButton>
            <LinkButton onClick={() => window.open("https://instagram.com/placeholder")}>
                Instagram
            </LinkButton>
        </div>
    );
}
