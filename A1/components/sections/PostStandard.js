
export default function PostStandard({img}) {
    return (
        <>
            <div className="thumb ta-brd-b-none">
                <img src={`/assets/img/blog/${img?img:"blog-details--big-1.webp"}`} alt="blog" />
                <div className="ta-blog-box__cats ta-blog-box__cats--right">
                    <a href="#0">PHOTO</a>
                </div>
                <span className="post-format-icon"><i className="fas fa-images" /></span>
            </div>

        </>
    )
}
