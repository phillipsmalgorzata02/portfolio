import Images from './Images'
import ButtonCloud from './ButtonCloud'

export default function Cover() {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="bg-white border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <h1 className="h-12 pt-3 ml-4 text-lg text-gray-600 sm:col-span-2 sm:mt-0">I'm seeking fully remote frontend roles.</h1>
                    <div className="py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:py-5 sm:px-6">
                        <dd className="mt-1 text-md text-gray-800 sm:col-span-2 sm:mt-0">
                            I’m a full-stack programmer currently working with React and Node for Quicken Loans.
                            <br /><br />
                            My current tech stack includes React, Node and AWS. For design I work with HTML, CSS, SASS, Bootstrap and Tailwind.
                            <br /><br />My workflow tools include NPM, GIT, JIRA, TFS and VS code.
                            <br /><br />I enjoy a flexible team environment with a combination of focus time and collaboration. I work east coast hours now and I am comfortable with any time zone. I am a US citizen and currently reside in Las Vegas, NV.
                            <br />
                            <br /><ButtonCloud />
                        </dd>
                    </div>
                </dl>
            </div >
            <Images />
        </div >
    )
}