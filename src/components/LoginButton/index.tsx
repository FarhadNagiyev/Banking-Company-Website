import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';
function LoginButton() {
    return (

        <Link href="/auth/login">
            <PrimaryButton type="submit"
            >
                Login
            </PrimaryButton>
        </Link>

    )
}

export default LoginButton
