import Cover from './Cover'
import Content from './Content'
import Files from './Files'

export default function Profile({ category, categoryContent }) {
    const classes = category === 0 ? "overflow-hidden bg-white-200 shadow sm:rounded-lg" : "overflow-hidden bg-slate-200 shadow sm:rounded-lg"

    return (
        <div className={classes}>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {category === 0 ? <>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900">margaretphillips003@gmail.com</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">LinkedIn</dt>
                            <dd className="mt-1 text-sm text-gray-900">https://www.linkedin.com/in/margaretphillips/</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Citizenship Status</dt>
                            <dd className="mt-1 text-sm text-gray-900">US Citizen</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900">Fully Remote</dd>
                        </div>
                        <Files />
                    </> : null}

                    <div className="sm:col-span-2">
                        {category === 0 ?
                            <dd className="mt-1 text-sm text-gray-900">
                                <Cover />
                            </dd>
                            :
                            <dd className="mt-1 text-sm text-gray-900">
                                <Content categoryContent={categoryContent} />
                                <Files />
                            </dd>}
                    </div>

                </dl>
            </div>
        </div>
    )
}