function Main() {
    return (
        <main className="px-8 pt-8 pb-3">
            <form className="flex justify-center gap-3 h-10">
                <input className="rounded-md border border-[#8e9299] px-4 py-2 grow min-w-40 max-w-md" type="text" placeholder="e.g. oregano" />
                <button className="font-inter rounded-md border-none bg-[#141413] text-[#FAFAF8] before:content-['+'] before:mr-1.5 text-sm font-medium px-10">Add ingredient</button>
            </form>
        </main>
    )
}

export default Main