//import { ChevronLeftIcon, EnvelopeIcon, FunnelIcon, MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/20/solid'

const directory = [
    {
        id: 0,
        name: 'Welcome',
    }, {
        id: 1,
        name: 'Quicken Loans',
    },
    {
        id: 2,
        name: 'Tixora',
    },
    {
        id: 3,
        name: 'Switch Inc',
    },
    {
        id: 4,
        name: 'VetsEZ',
    },
    {
        id: 5,
        name: 'Responsive Software',
    },
    {
        id: 6,
        name: 'Bank of America',
    },
    {
        id: 7,
        name: 'Insignia',
    },
    {
        id: 8,
        name: 'Event Photography Group',
    },
    {
        id: 9,
        name: 'Teleflora',
    },
    {
        id: 10,
        name: 'FNC/CoreLogic',
    }]


export default function DirectoryList({ getCategory }) {
    return (
        <nav className="min-h-0 flex-1" aria-label="Directory">
            <ul className="relative z-0 divide-y divide-gray-400">
                {directory.map((item) => (
                    <li key={item.id} onClick={() => getCategory(item.id)}>
                        <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-200 focus-within:bg-slate-200 hover:bg-slate-200">

                            <div className="min-w-0 flex-1">
                                <div className="focus:outline-none">
                                    {/* Extend touch target to entire panel */}
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                    <p className="truncate text-sm text-gray-600">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}