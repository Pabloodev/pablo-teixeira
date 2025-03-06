import Header from "../ui/components/Header";

export default function LayoutHome({ children }) {
  return (
    <div className="min-h-screen p-6">
      <div className="min-h-screen border border-gray-500 p-10 bg-black/30 backdrop-sepia-0">
        <Header />
        {children}
      </div>
    </div>
  );
}
