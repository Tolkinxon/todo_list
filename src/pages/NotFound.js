import { Link } from 'react-router-dom'
import '../styles/App.css'

export default function NotFound() {
  return (
    <h1 style={{ textAlign: 'center', marginTop: '300px' }}>
      Not found requstion page: <b style={{ color: 'red' }}>Error 404</b>
      <Link to={`/signup`} className="link">
        Sign up
      </Link>
      <Link to={`/signin`} className="link">
        Sign in
      </Link>
      <Link to={`/todo-lists`} className="link">
        Todo lists
      </Link>
      <Link to={`/new-todo`} className="link">
        New todo
      </Link>
      <Link to={`/todo-info`} className="link">
        Todo info
      </Link>
    </h1>
  )
}
