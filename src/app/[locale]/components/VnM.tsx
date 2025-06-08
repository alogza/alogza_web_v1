  export function InfoCard({
    title,
    icon,
    hoverBorder,
    children,
  }: {
    title: string;
    icon: React.ReactNode;
    hoverBorder: string;
    children: React.ReactNode;
  }) {
    return (
      <article
        className={`border border-gray-700 bg-gradient-to-br from-black to-gray-900 rounded-xl p-8 transition-all hover:transform hover:-translate-y-2 ${hoverBorder}`}
      >
        <div className="mb-6">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
            {icon}
          </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 text-justify leading-relaxed">{children}</p>
        </div>
      </article>
    );
  }