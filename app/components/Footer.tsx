// app/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bottom-0 bg-white shadow-inner py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} RewireXmind. All rights reserved.
        </div>
      </footer>
    );
  }
  