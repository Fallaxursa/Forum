import React from "react";
import { Link } from "react-router-dom";

export default function GoToPage({to, label, className}) {

    /**
 * A reusable button that navigates to any page.
 * Props:
 *  - to: string → the route to navigate to
 *  - label: string → text to show on the button
 *  - className: string → optional extra Tailwind/CSS classes
 */

    return (
        <Link
        to={to}
        className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className || ""}`}
        >
            {label}
        </Link>
    );
}