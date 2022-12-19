export default function Topbar() {
    return (
        <div className="bg-[#eeeeee] h-8 flex justify-between items-center px-20">
            <div className="flex gap-6">
                <p className="text-sm text-[#666]">info@SaylaniWelfare.com</p>
                <p className="text-sm text-[#666]">021-111-729-526</p>
            </div>
            <div>
                <button className="bg-white outline-none p-4 text-sm">English</button>
            </div>
        </div>
    )
}
