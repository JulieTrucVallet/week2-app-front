import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Register = () => {
  const navigate = useNavigate()
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(null)

  const handleRegistration = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('email', email)
    formData.append('password', password)
    if (image) {
      formData.append('image', image)
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 201) {
        alert(response.data.message)
        navigate('/')
      }
    } catch (err) {
      console.log(err)
      alert(err?.response?.data || 'Something went wrong during registration.')
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Register a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegistration} className="space-y-6" encType="multipart/form-data">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
              First name
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
              Last name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setLast_name(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-900">
              Profile picture
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Please sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register
