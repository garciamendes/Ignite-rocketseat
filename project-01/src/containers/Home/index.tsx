// Project
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'

// Local
import './home.scss'

export function Home() {
  return (
    <>
      <Header />
      <div className='container_main'>
        <Profile />
        <h1>Home</h1>
      </div>
    </>
  )
}