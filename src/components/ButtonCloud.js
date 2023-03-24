
export default function ButtonCloud() {
    const buttons = ["Angular", "AWS", "CSS", "HTML", "Node", "PHP", "React", "Shopify", "Vue", "Wordpress"]

    return (<div>
        {buttons.map((button, index) => {
            return <button key={index} className="inline-flex items-center rounded-md bg-red-400 px-3 py-2 mr-2 m-1 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">{button}</button>
        })}
    </div>)
}