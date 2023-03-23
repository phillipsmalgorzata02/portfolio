
export default function Content({ categoryContent }) {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{categoryContent.employer}</h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Title</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {categoryContent.title}
                        </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Dates</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {categoryContent.dateStr}
                        </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Type</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {categoryContent.type}
                        </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {categoryContent.location}
                        </dd>
                    </div>
                    <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5 sm:px-6">
                        {/* <dt className="text-lg font-medium text-gray-500" style={{ color: 'purple', fontFamily: "'Josefin Sans', sans-serif;!important" }}>How</dt> */}
                        <dd className="text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                            style={{ textAlign: "justify" }}>
                            <div contentEditable='true' dangerouslySetInnerHTML={{ __html: categoryContent.how }}></div>
                        </dd>
                        {/* <dt className="text-lg font-medium text-gray-500" style={{ color: 'purple', fontFamily: "'Josefin Sans', sans-serif;!important" }}>Why</dt> */}
                        <dd className="text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                            style={{ textAlign: "justify" }}>
                            <div contentEditable='true' dangerouslySetInnerHTML={{ __html: categoryContent.why }}></div>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}