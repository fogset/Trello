import { UserButton, auth, currentUser } from "@clerk/nextjs";

const ProtectedPage = async () => {
    return (
        <div>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default ProtectedPage;
