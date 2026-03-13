import { useProfile } from "../../hooks/useProfile";

export default function NavBar() {
    const { user } = useProfile();
    return (
        <nav>
            <h1>Hello {user?.username}!</h1>
            <img src={user?.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full"/>
        </nav>
    );
}
