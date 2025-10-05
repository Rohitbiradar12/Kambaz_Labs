"use client"

import Link from "next/link"
import { ListGroup } from "react-bootstrap"
import { usePathname } from "next/navigation"

export default function AccountNavigation() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  const Item = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className={`list-group-item border-0 ${isActive(href) ? "active" : "text-danger"}`}>
      {label}
    </Link>
  )

  return (
    <ListGroup id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Item href="/Account/Signin" label="Signin" />
      <Item href="/Account/Signup" label="Signup" />
      <Item href="/Account/Profile" label="Profile" />
    </ListGroup>
  )
}
