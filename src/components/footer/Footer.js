const Footer = ({length}) => {
    const today = new Date();
    return (
        <footer>
            <p>{ length} { (length === 1) ? 'item':'items' }</p>
            Copyright &copy; {today.getFullYear()} - All Rights Reserved
        </footer>
    )
}

export default Footer