import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { LogIn } from 'lucide-react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

function LoginForm() {

	const [input, setInput] = useState('')
	const [cookies, setCookies] = useCookies(['poessid']);

	const handleLogin = (newPoessid) => {

	}

	return (
		<div className='bg-zinc-800 p-10 rounded-xl grow'>
			<div className='space-y-1'>
				<h1 className='text-2xl text-center font-medium leading-none'>LOGIN</h1>
			</div>
			<Separator className='my-4 bg-red-600' />
			<div className='mt-10'>
				<Input type='text' placeholder='POESSID' onChange={setInput} />
				<Button variant='destructive' className='mt-2 w-full' onClick={handleLogin}>
					Log in <LogIn className='ml-2 h-4 w-4' />
				</Button>
			</div>
		</div>
	)
}

export default LoginForm
