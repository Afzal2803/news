import Link from "next/link"
import Marquee from "react-fast-marquee"

export default function MargueePost({ cls }) {
    return (
        <>
            <Marquee
                speed={150}
                className={`ta-moving-cats ${cls ? cls : ""}`}>
                <div className="item">
                    <Link href="#0">Design </Link>
                    <span className="count">03</span>
                </div>
                <div className="item">
                    <Link href="#0">Tech </Link>
                    <span className="count">24</span>
                </div>
                <div className="item">
                    <Link href="#0">Interface </Link>
                    <span className="count">18</span>
                </div>
                <div className="item">
                    <Link href="#0">Thunder </Link>
                    <span className="count">10</span>
                </div>
                <div className="item">
                    <Link href="#0">Development </Link>
                    <span className="count">09</span>
                </div>
            </Marquee>
        </>
    )
}
