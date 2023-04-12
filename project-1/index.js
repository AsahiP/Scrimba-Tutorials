MainContent() {
    return(
        <h1>I'm doing the React</h1>
    )
}


ReactDOM.createRoot(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)