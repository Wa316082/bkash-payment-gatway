
const Error = () => {
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message')
    return (
        <div>
            {message}
        </div>
    )
}

export default Error
