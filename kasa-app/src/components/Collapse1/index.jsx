import React from 'react'
import DownVector from "../../assets/Vector-down.png"
import "../../utils/style/Collapse.css"

class Collapse1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.toogleMenu = this.toogleMenu.bind(this)
    }

    toogleMenu(menuId, titleId, buttonId) {
        const menu = document.getElementById(menuId)
        const title = document.getElementById(titleId)
        const button = document.getElementById(buttonId)
        if (!menu.getAttribute('style') || menu.getAttribute('style') === 'display: none;') {
            menu.style.display = 'flex'
            title.style.borderBottomLeftRadius = 0
            title.style.borderBottomRightRadius = 0
            title.style.marginBottom = 0
            button.style.transform = 'rotate(180deg)'
        } else {
            menu.style.display = 'none'
            title.style.borderRadius = '10px'
            title.style.marginBottom = '30px'
            button.style.transform = 'rotate(0)'
        }
    }

    render() {
        const { title, content, menuId, titleId, buttonId, className, contentClassName, titleClassName } = this.props
        return (
            <div className={className}>
                <div id={titleId} className={titleClassName}>{title}<img id={buttonId} className='collapse-button' src={DownVector} onClick={() => this.toogleMenu(menuId, titleId, buttonId)} alt='menu déroulant'/></div>
                <div id={menuId} className={contentClassName}>{content}</div>
            </div>
        )
    }
}

export default Collapse1