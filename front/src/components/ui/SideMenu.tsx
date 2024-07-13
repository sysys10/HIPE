

export default function SideMenu({ sideMenu, setSideMenu }) {
    return (<div className={`flex w-full z-20 h-screen fixed transition-all duration-700 right-0 top-0 ${sideMenu?'max-w-full':'max-w-0'} overflow-hidden`} >
        <div onClick={() => { setSideMenu(false) }} className="flex-1 h-full bg-[rgba(0,0,0,0.6)]"></div>
        <div className="w-80 h-full transition-all duration-300 bg-white"></div>
    </div>)
}