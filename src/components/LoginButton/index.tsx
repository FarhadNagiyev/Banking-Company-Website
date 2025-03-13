import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';
function LoginButton() {
    return (

        <PrimaryButton type="submit"
        >
            <Link href="/auth">
                Login
            </Link>
        </PrimaryButton>

    )
}

export default LoginButton
