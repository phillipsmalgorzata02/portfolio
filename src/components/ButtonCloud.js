
export default function ButtonCloud({ category }) {
    const buttonMap = [
        {
            id: 1,
            title: "Angular",
            img: "angular-icon-256x256-8ljgbnzq.png"
        },
        {
            id: 2,
            title: "AWS",
            img: "aws-app-icon.jpg"
        },
        {
            id: 3,
            title: "CSS",
            img: "919826.png"
        },
        {
            id: 4,
            title: "HTML",
            img: "919827.png"
        },
        {
            id: 5,
            title: "Node",
            img: "node-js-512.png"
        },
        {
            id: 6,
            title: "PHP",
            img: "919830.png"
        },
        {
            id: 7,
            title: "React",
            img: "react--v1.png"
        },
        {
            id: 8,
            title: "Shopify",
            img: "825500.png"
        },
        {
            id: 9,
            title: "Vue",
            img: "vue-icon-512x512-ne4r9aa8.png"
        },
        {
            id: 10,
            title: "Wordpress",
            img: "174881.png"
        },
        {
            id: 11,
            title: "ASP.net",
            img: "aspnet-logo-old.png"
        },
        {
            id: 12,
            title: "Cold Fusion",
            img: "Adobe_ColdFusion_8_icon.png"
        },

    ]

    let buttons = []
    buttons = buttonMap.map((m) => {
        if (category === 0 || category === 5) {
            if (m.id !== 11 && m.id !== 12) {
                buttons.push(m.img)
            }
        } else if (category === 1) {
            if (m.id === 2 || m.id === 3 || m.id === 4 || m.id === 7) {
                buttons.push(m.img)
            }
        } else if (category === 2) {
            if (m.id === 1 || m.id === 3 || m.id === 4 || m.id === 5) {
                buttons.push(m.img)
            }
        } else if (category === 3) {
            if (m.id === 3 || m.id === 4 || m.id === 9) {
                buttons.push(m.img)
            }
        } else if (category === 4) {
            if (m.id === 5) {
                buttons.push(m.img)
            }
        } else if (category === 6 || category === 9 || category === 10) {
            if (m.id === 11) {
                buttons.push(m.img)
            }
        } else if (category === 7) {
            if (m.id === 11 || m.id === 6) {
                buttons.push(m.img)
            }
        } else if (category === 8) {
            if (m.id === 11 || m.id === 12) {
                buttons.push(m.img)
            }
        }

        return buttons
    })


    //const buttons = ["angular-icon-256x256-8ljgbnzq.png", "aws-app-icon.jpg", "919826.png", "919827.png", "node-js-512.png", "919830.png", "react--v1.png", "825500.png", "vue-icon-512x512-ne4r9aa8.png", "174881.png"]
    const path = "https://malgorzataphillips.netlify.app/assets/images/"
    //const path = "http://localhost:3000/assets/images/"
    return (<div>
        {buttons.map((button, index) => {
            return <img alt={index} key={index} className="inline-flex items-center rounded-md px-3 py-2 mr-2 m-1 text-sm font-semibold text-white shadow-sm"
                style={{ height: 80 }}
                src={`${path}${button}`} />
        })}
    </div>)
}