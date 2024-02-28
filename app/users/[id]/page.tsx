import React from "react";
import { useParams } from "next/navigation";
function IdPage() {
    const params = useParams<{ id: string }>();
    return <div>Id: {params.id}</div>;
}

export default IdPage;
