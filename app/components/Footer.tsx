import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        by Victor Sanchez <Link href="https://www.vicsan.dev" target="_blank">@vicsan</Link>
      </footer>
    )
}