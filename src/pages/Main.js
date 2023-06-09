import { Fragment, useState, useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import DirectoryList from '../components/DirectoryList'
import Profile from '../components/Profile'
import TopNav from '../components/TopNav'
import resumeData from '../data/resume.json'

export default function Main() {
    const [category, setCategory] = useState(0)
    const [categoryContent, setCategoryContent] = useState(resumeData[0])
    const [isLoading, setIsLoading] = useState(false)

    const getCategory = (id) => setCategory(id)
    const getCategoryContent = async () => {
        setIsLoading(false)
        const data = resumeData.items.filter((f) => f.id === category)[0]
        //fake
        let Job = {
            title: null,
            employer: null,
            dateStr: null,
            type: null,
            location: null,
            how: null,
            why: null
        }
        if (data) {
            Job = {
                title: data.title ? data.title : null,
                employer: data.employer ? data.employer : null,
                dateStr: data.dateStr ? data.dateStr : null,
                type: data.type ? data.type : null,
                location: data.location ? data.location : null,
                description: data.description ? data.description : null,
                how: data.how ? data.how : null,
                why: data.why ? data.why : null
            }
        }

        setCategoryContent(Job)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)


    }
    useEffect(() => {
        console.log('category', category)
        if (category !== 0) {
            getCategoryContent()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])



    return (
        <>
            <div className="flex h-full">
                <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col scrollable sm:overflow-y-scroll sm:overflow-visible">
                    <DirectoryList getCategory={getCategory} />
                </aside>
                <main className="scrollable relative z-0 flex-1 overflow-y-scroll focus:outline-none xl:order-last"
                    style={{ height: '100vh', overflow: 'scroll!important' }}>
                    <div className="xl:hidden">
                        <TopNav getCategory={getCategory} />
                    </div>
                    <ProfileHeader />
                    <div className="relative z-0 flex-1 focus:outline-none xl:order-last">
                        <Profile isLoading={isLoading} category={category} categoryContent={categoryContent} />
                    </div>
                </main>

            </div>
        </>
    )
}