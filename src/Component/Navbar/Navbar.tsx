import { saylaniLogo } from "../../assets"

export default function Navbar() {
    return (
        <nav className="px-20 flex h-20 items-center shadow-lg">
            <div>
                <img src={saylaniLogo} alt='logo' className="h-10 w-full" />
            </div>
            <ul className="flex flex-1 justify-evenly items-center cursor-pointer text-[14px] text-[#000000d9]">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Media</li>
                <li>Certification</li>
                <li><button className="py-2 px-11 bg-[#0d6db7] text-white rounded-lg flex justify-center items-center">Donate Now</button></li>
            </ul>
        </nav>
    )
}
