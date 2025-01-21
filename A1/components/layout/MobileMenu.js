import Link from "next/link"
import { useState } from "react"
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="ta-mobile-menu mean-container"><div className="mean-bar"><Link href="#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}><span /><span /><span /></Link><nav className="mean-nav">
                <ul className="justify-content-center">
                    <li className="menu-item-has-children"><Link href="/">Home</Link>
                        <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                            <li><Link href="/">Home 01</Link></li>
                            <li><Link href="/index-2">Home 02</Link></li>
                            <li><Link href="/index-3">Home 03</Link></li>
                            <li><Link href="/index-4">Home 04</Link></li>
                            <li><Link href="/index-5">Home 05</Link></li>
                            <li><Link href="/index-6">Home 06</Link></li>
                            <li><Link href="/index-7">Home 07</Link></li>
                            <li><Link href="/index-8">Home 08</Link></li>
                            <li><Link href="/index-9">Home 09</Link></li>
                            <li><Link href="/index-10">Home 10</Link></li>
                            <li><Link href="/index-11">Home 11</Link></li>
                            <li><Link href="/index-rtl">Home RTL</Link></li>
                        </ul>
                        <Link className={`mean-expand ${isActive.key == 1 ? "mean-clicked" : ""}`} href="#" onClick={() => handleToggle(1)}>+</Link></li>
                    <li><Link href="/author">Author</Link></li>
                    <li className="menu-item-has-children ta-megamenu"><Link href="#0">Post Features</Link>
                        <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li>
                                <div className="container-fluid p-0">
                                    <div className="row mt-none-20">
                                        <div className="col-lg-3 mt-20">
                                            <div className="menu-box">
                                                <h4 className="menu-title">List Types</h4>
                                                <ul>
                                                    <li><Link href="/blog">Right Sidebar</Link></li>
                                                    <li><Link href="/blog-left-sidebar">Left Sidebar</Link></li>
                                                    <li><Link href="/blog-no-sidebar">No Sidebar</Link></li>
                                                    <li><Link href="/blog-info-right">Info Right</Link></li>
                                                    <li><Link href="/blog-compact">Compact</Link></li>
                                                    <li><Link href="/blog-category-list">Category List</Link></li>
                                                    <li><Link href="/blog-slider">Slider</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 mt-20">
                                            <div className="menu-box">
                                                <h4 className="menu-title">Layout Types</h4>
                                                <ul>
                                                    <li><Link href="/blog-two-column">Two Columns</Link></li>
                                                    <li><Link href="/blog-three-column">Three Columns</Link></li>
                                                    <li><Link href="/blog-three-column-wide">Three Columns Wide</Link></li>
                                                    <li><Link href="/blog-four-column">Four Columns</Link></li>
                                                    <li><Link href="/blog-four-column-wide">Four Columns Wide</Link></li>
                                                    <li><Link href="/blog-five-column">Five Columns Wide</Link></li>
                                                    <li><Link href="/blog-six-column">Six Columns Wide</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 mt-20">
                                            <div className="menu-box">
                                                <h4 className="menu-title">Post Types</h4>
                                                <ul>
                                                    <li><Link href="/blog-details-quote">Quote Post</Link></li>
                                                    <li><Link href="/blog-details-link">Link Post</Link></li>
                                                    <li><Link href="/blog-details-audio">Audio Post</Link></li>
                                                    <li><Link href="/blog-details-gallery">Gallery Post</Link></li>
                                                    <li><Link href="/blog-details-video">Video Post</Link></li>
                                                    <li><Link href="/blog-details-status">Status Post</Link></li>
                                                    <li><Link href="/blog-details">Standard Post</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 mt-20">
                                            <div className="menu-box">
                                                <h4 className="menu-title">Archive Pages</h4>
                                                <ul>
                                                    <li><Link href="/author">Author Page</Link></li>
                                                    <li><Link href="/blog-filter-category">Filter By Category</Link></li>
                                                    <li><Link href="/blog-filter-tag">Filter By Tag</Link></li>
                                                    <li><Link href="/blog-filter-date">Filter By Date</Link></li>
                                                    <li><Link href="/blog">View All Posts</Link></li>
                                                    <li><Link href="/blog-filter-search">Search Results</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <Link className={`mean-expand ${isActive.key == 2 ? "mean-clicked" : ""}`} href="#" onClick={() => handleToggle(2)}>+</Link></li>
                    <li className="menu-item-has-children"><Link href="/blog">Pages</Link>
                        <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/blog-details">Blog Details</Link></li>
                            <li><Link href="/blog-details-left-sidebar">Blog Details Left Sidebar</Link></li>
                            <li><Link href="/blog-details-no-sidebar">Blog Details No Sidebar</Link></li>
                        </ul>
                        <Link className={`mean-expand ${isActive.key == 3 ? "mean-clicked" : ""}`} href="#" onClick={() => handleToggle(3)}>+</Link></li>
                    <li className="mean-last"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav></div></div>

        </>
    )
}
