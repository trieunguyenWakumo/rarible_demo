import Header from "../screen/Header"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="mr-4 ml-4 "><Header/></nav>
        {children}
      </section>
    )
  }