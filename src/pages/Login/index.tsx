import LoginForm from './components/LoginForm'

function LoginPage() {
	return (
		<div className='grid place-content-center min-h-[60vh] min-w-[100vw] gap-8'>
			<div className='flex w-[500px]'>
				<LoginForm />
			</div>
		</div>
	)
}

export default LoginPage
