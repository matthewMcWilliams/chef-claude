import claudeImage from '../assets/chef-claude-icon.png'

function Header() {
    return (
        <header className="py-6 flex gap-3 items-center justify-center shadow-md">
            <img className='w-11' src={claudeImage} />
            <h1 className='text-[32px]'>Chef Claude</h1>
        </header>
    )
}

export default Header