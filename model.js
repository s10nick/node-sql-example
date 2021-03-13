import db from './dbconnect'

const schema = () => {
  db.select().from('widgets_controls')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => db.destroy())
} 
export default schema