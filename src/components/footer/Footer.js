const Footer = () => {
    const today = new Date();
    return (
        <footer>
            Copyright &copy; {today.getFullYear()} - All Rights Reserved
        </footer>
    )
}

export default Footer