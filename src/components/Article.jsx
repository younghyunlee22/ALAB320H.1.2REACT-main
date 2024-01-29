function Article(props) {
    return (
        <div>

            <article>
                <time datetime="2015-08-07">{props.date}</time>

                <h2>On the Street in Brooklyn</h2>
                <img src={props.img_src} alt=""/>

                    <p>{props.text}</p>
                    <li><a href="#" class="continue">Continues</a></li>
            </article>
        </div>
    )
}

export default Article;