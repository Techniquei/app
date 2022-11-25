import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {


  return (
    <div>
      <div>
        <img src='https://media.istockphoto.com/id/1287021364/photo/wide-angle-blue-celebration-bokeh-background.jpg?b=1&s=170667a&w=0&k=20&c=SLOK2idjHdYVZFB14wbWWjh-LvGv7biFyrSyUWBqmLU=' />
      </div>
      <div>
        ava+desc
      </div>
      <MyPosts/>
    </div>
  )
}

export { Profile }