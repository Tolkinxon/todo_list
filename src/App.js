import './App.css'
import Layout from './pages/Layout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Layout>
        <SignUp/>
      </Layout>
    </div>
  )
}

export default App
