
export default function ButtonCloud() {
    const buttons = ["Angular", "AWS", "CSS", "HTML", "Node", "PHP", "React", "Shopify", "Wordpress"]
    let classes = ""
    let color = 400
    return (<div>
        {buttons.map((button, index) => {
            //index < 6 ? color = (index + 3) * 100 : color = (index - 2) * 100
            //color = (index + 2) * 100
            classes = `inline-flex items-center rounded-md bg-red-${color} px-3 py-2 mr-2 m-1 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`
            return <button className={classes}>{button}</button>
        })}
    </div>)
}