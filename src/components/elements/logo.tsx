import { cn } from "@/utils/utils"
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
        to={'/'}
        onClick={handleScrollToTop}
    >
        <img
            src="/images/EIP-Logo-Vector.png"
            className={cn("", className)}
        />
    </Link>
  )
}

export default Logo