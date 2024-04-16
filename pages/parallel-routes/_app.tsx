"use client"
export default function Layout({
    children,
    parallelRoute1,
    parallelRoute2,
  }: {
    children: React.ReactNode
    parallelRoute1: React.ReactNode
    parallelRoute2: React.ReactNode
  }) {
    return (
      <>
        {children}
        {parallelRoute1}
        {parallelRoute2}
      </>
    )
  }