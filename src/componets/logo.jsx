import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="the squirrel" width={65} height={16} />
            <p href="#hero" className="text-2xl font-bold text-accent">
              The Squirrel
            </p>
        </Link>
    </div>
  )
}

export default Logo