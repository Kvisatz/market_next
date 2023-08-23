import Image from 'next/image'
import styles from './page.module.scss'
import logo_form from './../images/logo-form.svg';
import LoginLayout from './layout';
import Auth from './auth/page';

export default function Login() {
  return (
    <LoginLayout>
    
      <Auth/>
    </LoginLayout>
  )
}
