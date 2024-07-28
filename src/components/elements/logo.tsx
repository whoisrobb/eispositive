import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Link to={'/'}>
        <img
            src="/images/EIP-Logo-Vector.png"
            className={cn("", className)}
        />
    </Link>
  )
}

export default Logo