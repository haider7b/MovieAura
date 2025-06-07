import { webName } from "../consts";

export default function Footer() {
    return (
        <footer className=" py-4 text-center mt-8   w-full"
        style={{boxShadow:"#999 0px 10px 20px 3px"}}
        >
            <p>&copy; 2025 {webName} All rights reserved.</p>
        </footer>
    );
}