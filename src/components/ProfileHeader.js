
const path = 'https://malgorzataphillips.netlify.app/assets/images/'
const profile = {
    name: 'Malgorzata Phillips',
    imageUrl:
        `${path}shutterstock_1885749949.jpg`,
    coverImageUrl:
        `${path}Shutterstock_1862370715.png`,
    email: 'margaretphillips003@gmail.com',
    linkedin: 'https://www.linkedin.com/in/margaretphillips/'

}


export default function ProfileHeader() {
    return (
        <div>
            <div>
                <img className="h-32 w-full object-cover lg:h-28" src={profile.imageUrl} alt="Online portfolio" />

                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="flex">
                            <img
                                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                src={profile.coverImageUrl}
                                alt="Online portfolio"
                            />
                        </div>
                        <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}