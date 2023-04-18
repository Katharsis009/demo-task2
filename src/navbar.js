const Navbar = () => {
    return (
        <nav className= "navbar">
            <h1>Introduction to React</h1>
            <div className="links">
                <a href="/" style={{ 
                    color: 'white', 
                    backgroundColor: '#1ed461',
                    borderRadius: '8px' 
                }}>Home</a>
                
            </div>
        </nav>
    );
}

export default Navbar;