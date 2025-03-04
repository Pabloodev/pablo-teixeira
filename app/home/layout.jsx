import Header from "../ui/components/header"

export default function LayoutHome({children}) {
  return (
    <div className="min-h-screen p-6">
      <div className="min-h-screen border border-gray-500 p-10">
      <Header />
      {children}
      </div>
    </div>
  )
}