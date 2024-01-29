function Nav(props) {
    if(props.position == "header"){
    return (<div>
        <nav aria-label="Main Navigation" role="navigation">
            <ul class="nav_bar_h">
                <li><a href="...">Women's</a></li>
                <li><a href="...">Men's</a></li>
                <li><a href="...">On The Street</a></li>
                <li><a href="...">The Catwalk</a></li>
                <li><a href="...">AdWatch</a></li>
                <li><a href="...">About</a></li>
            </ul>
        </nav>
    </div>)
    }else{
        return (
            <nav aria-label="Main Navigation" role="navigation">
                <ul class="nav_bar_f">
                    <li><a href="...">Women's</a></li>
                    <li><a href="...">Men's</a></li>
                    <li><a href="...">On The Street</a></li>
                    <li><a href="...">The Catwalk</a></li>
                    <li><a href="...">AdWatch</a></li>
                    <li><a href="...">About</a></li>
                    <li><a href="...">Tips</a></li>

                </ul>
            </nav>
        )
        }
}

export default Nav