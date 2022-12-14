import {  Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags tops-tags'>&lt;body&t;</span>

            <Outlet />

            <span className='tags bottom-tags'>&lt;/body&t;<br /><span className='bottom-tag-html'>&lt;/html&t;</span></span>
        </div>
    </div>
    )
}

export default Layout