
export default function ButtonCloud() {
    const buttons = ["angular-icon-256x256-8ljgbnzq.png", "aws-app-icon.jpg", "919826.png", "919827.png", "node-js-512.png", "919830.png", "react--v1.png", "825500.png", "vue-icon-512x512-ne4r9aa8.png", "174881.png"]
    //const path = "https://malgorzataphillips.netlify.app/assets/images/"
    const path = "http://localhost:3000/assets/images/"
    return (<div>
        {buttons.map((button, index) => {
            return <img key={index} className="inline-flex items-center rounded-md px-3 py-2 mr-2 m-1 text-sm font-semibold text-white shadow-sm"
                style={{ height: 80 }}
                src={`${path}${button}`} />
        })}
    </div>)
}