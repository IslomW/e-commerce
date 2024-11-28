import Link from "next/link";
import Menu from "@/components/Menu";

export default function Navbar() {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            <div className="h-full flex item-center justify-between">


                {/*MOBILE*/}
                <Link href="/">
                    <div className="text-2xl tracking-wide">LAMA</div>
                </Link>
                <Menu/>
            </div>
            {/* Bigger Screens */}
            <div className='hidden md:flex items-center justify-between gap-8 full'>

            </div>
            <div >

            </div>
        </div>
    )
}