import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Files() {
    return (
        <div className="sm:col-span-2">
            <dd className="mt-1 text-sm text-gray-900">
                <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                <PaperClipIcon className="float-left h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-2 w-0 flex-1 truncate">Resume</span>
                            </a>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Download
                            </a>
                        </div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                <PaperClipIcon className="float-left h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-2 w-0 flex-1 truncate">Cover Letter</span>
                            </a>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Download
                            </a>
                        </div>
                    </li>
                </ul>
            </dd>
        </div >
    )
}