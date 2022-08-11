// Local
import './header.scss'
import LogoImg from '../../static/images/_logo.svg'

export function Header() {
  return (
    <div className='container_header_main'>
      <img src={LogoImg} />
    </div>
  )
}