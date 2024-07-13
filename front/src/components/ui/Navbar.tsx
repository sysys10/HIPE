import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <header className="w-full h-[80px] bg-white">
            <nav className="flex justify-between items-center max-w-[1280px] h-full px-4 mx-auto">
                <Link to={'/'}>
                    <img src="/assets/images/Logo_web.png" height={65} width={120} />
                </Link>
                <GiHamburgerMenu className="text-2xl block md:hidden" onClick={()=>{console.log('대충 사이드바 나오게')}}/>
                <div className="hidden text-lg md:flex  text-gray-500">
                    <Link className="px-10" to={'/about'}>소개</Link>
                    <Link className="px-10" to={'/rank'}>랭킹</Link>
                    <Link className="px-10" to={'/notice'}>공지사항</Link>
                </div>
            </nav>
        </header>
    )
}