const path = "https://main--silly-chimera-fb8663.netlify.app/assets/images/"
const files = [
    {
        source:
            `${path}image_1.png`,
    },
    {
        source:
            `${path}image_13.png`,
    },
    {
        source:
            `${path}image_3.png`,
    },
    {
        source:
            `${path}image_5.png`,
    },
    {
        source:
            `${path}image_6.png`,
    },
    {
        source:
            `${path}image_8.png`,
    },
    {
        source:
            `${path}image_9.png`,
    },
    {
        source:
            `${path}image_10.png`,
    },
    {
        source:
            `${path}image_11.png`,
    }
]

export default function Images() {
    return (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {files.map((file) => (
                <li key={file.source} className="relative">
                    <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img src={file.source} alt="" className="p-2 pointer-events-none object-cover group-hover:opacity-75" />
                    </div>
                </li>
            ))}
        </ul>
    )
}