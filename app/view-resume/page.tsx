"use client";

import Link from "next/link";
import { IoMdArrowRoundBack, IoMdDownload } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ViewResume() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Set loading to false since we're directly showing the PDF
    setIsLoading(false);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Mitesh_Gupta_Resume_June_2026.pdf";
    link.download = "Mitesh_Gupta_Resume_June_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col xl:mx-[10%] lg:mx-[7%] mx-0 md:mx-[7%] my-24 mt-24 py-8 gap-16">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col xl:mx-[10%] lg:mx-[7%] mx-0 md:mx-[7%] my-24 mt-24 py-8 gap-8">
      {error ? (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
          <p className="text-gray-600 mb-6">
            The resume file could not be loaded. Please try downloading it directly.
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-secondary-color-3 text-black rounded-lg hover:bg-[#E6C200] transition-colors font-medium"
          >
            <IoMdDownload size={20} />
            Download PDF Resume
          </button>
        </div>
      ) : (
        <>
          {/* Resume viewer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b dark:border-gray-600 flex items-center justify-between">
              
              {/* Back Button */}
              <Link
                href="/"
                className="p-2 bg-[#FBEDDD] rounded-full text-black hover:bg-[#F5E6D3] transition-colors"
              >
                <IoMdArrowRoundBack size={22} />
              </Link>

              {/* Center Text */}
              <div className="flex-1 text-center font-semibold text-gray-800 dark:text-gray-200">
                View and Download Mitesh Gupta's Resume
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-secondary-color-3 text-black rounded-lg hover:bg-[#E6C200] transition-colors font-medium"
              >
                <IoMdDownload size={18} />
                Download PDF
              </button>

            </div>
            
            <div className="p-4">
              {/* PDF Viewer using iframe */}
              <div className="w-full" style={{ height: "80vh" }}>
                <iframe
                  src="/resume/Mitesh_Gupta_Resume_June_2026.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  className="w-full h-full border border-gray-300 dark:border-gray-600 rounded"
                  title="Mitesh Gupta Resume"
                  loading="lazy"
                  onError={() => setError("Error loading PDF viewer")}
                />
              </div>
              
              {/* Mobile-friendly alternative */}
              <div className="md:hidden mt-4 p-4 bg-secondary-color rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  On mobile devices, it's better to download the PDF for optimal viewing.
                </p>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary-color-3 text-black rounded-lg hover:bg-[#E6C200] transition-colors font-medium mx-auto"
                >
                  <IoMdDownload size={18} />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
