import Cover from './Cover'
import Content from './Content'
import ButtonCloud from './ButtonCloud'

export default function Profile({ isLoading, category, categoryContent }) {
    const classes = category === 0 ? "overflow-hidden bg-white-200 shadow sm:rounded-lg" : "h-full overflow-hidden bg-slate-200 shadow sm:rounded-lg"
    return (
        <div className={classes}>
            <div className="h-full px-4 py-5 sm:px-6 mt-4">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {category === 0 ? <>
                        <div className="sm:col-span-1">
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <p className="mt-1 text-sm text-gray-900">margaretphillips003@gmail.com</p>
                        </div>
                        <div className="sm:col-span-1">
                            <p className="text-sm font-medium text-gray-500">LinkedIn</p>
                            <p className="mt-1 text-sm text-gray-900">https://www.linkedin.com/in/margaretphillips/</p>
                        </div>
                        <div className="sm:col-span-1">
                            <p className="text-sm font-medium text-gray-500">Citizenship Status</p>
                            <p className="mt-1 text-sm text-gray-900">US Citizen</p>
                        </div>
                        <div className="sm:col-span-1">
                            <p className="text-sm font-medium text-gray-500">Location</p>
                            <p className="mt-1 text-sm text-gray-900">Fully Remote</p>
                        </div>
                    </> : null}

                    <div className="sm:col-span-2 mt-4 mb-14">
                        {category === 0 ?
                            <p className="mt-1 text-sm text-gray-900">
                                <Cover />
                            </p>
                            :
                            <p className="mt-1 text-sm text-gray-900">
                                <Content isLoading={isLoading} categoryContent={categoryContent} />
                            </p>}
                    </div>

                </dl>
            </div>
            <div className="bg-white flex h-full px-4 py-5 align-center justify-center sm:px-6">
                <ButtonCloud category={category} />
            </div>
        </div>
    )
}