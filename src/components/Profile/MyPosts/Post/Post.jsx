import s from './Post.module.css'

const Post = () => {

    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' />
            post
            <div>
                <span>Like</span>
                <span>Dislike</span>
            </div>

        </div>
    )
}

export { Post }