"use client"
import { cn } from "@/utils/MergeTailwindclasses";
import Icon from "@/components/Icon";
import { useState, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    className?: string;
}

const Input = ({
    type = "text",
    placeholder,
    className,
    ...props
}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const inputType = isPassword
        ? (showPassword ? "text" : "password")
        : type;

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative w-full max-h-max">
            <input
                type={inputType}
                placeholder={placeholder}
                className={cn(
                    "rounded-[88px]",
                    "w-full",
                    "bg-grey-10",
                    "custom-border",
                    "fluid-18",
                    "md:p-5",
                    "lg:p-6",
                    "p-4",
                    isPassword && "pr-12",
                    className
                )}
                {...props}
            />

            {isPassword && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0  flex items-center px-3 text-grey-15 hover:text-grey-15 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? (
                        <div className="bg-grey-10 max-h-min">
                            <Icon alt="eye" src="/eye.svg" variant="mini" />
                        </div>
                    ) : (
                        <div className="bg-grey-10 max-h-min">
                            <Icon alt="eye off" src="/eyeOff.svg" variant="mini" />
                        </div>
                    )}
                </button>
            )}
        </div>
    );
};

export default Input;