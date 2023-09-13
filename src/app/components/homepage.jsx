import sectionOneBg from  '.public/section-one-bg.jpg'

const Homepage = () => {
    return (
        <div className="homepage">
        <div className="section-one">
            <img src={sectionOneBg} alt="section one background" />
            <div className="section-one-content">
            <h1>Section One</h1>
            <p>Section one content</p>
            </div>
        </div>
        <div className="section-two">
            <h1>Section Two</h1>
            <p>Section two content</p>
        </div>
        </div>
    )
}

export default Homepage