import Button from '@/components/Button'
import TextField from '@/components/TextField'
import Link from 'next/link'
import { useState } from 'react'

function handleSubmit() {
  console.log('submitted')
}

const Login = () => { 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <h1>Login</h1>
      <form className='flex flex-col' >
        <TextField props={
          {
            placeholder: 'Email',
            type: 'email',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value)
            }
          }
        } />
        <TextField props={
          {
            placeholder: 'Password',
            type: 'password',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }
          }
        } />
        <Button props={
          {
            title: 'Login',
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              console.log('email: ', email)
              console.log('password: ', password)
            }
          }
        } />
      </form>
    </div>
  )
}



export default Login