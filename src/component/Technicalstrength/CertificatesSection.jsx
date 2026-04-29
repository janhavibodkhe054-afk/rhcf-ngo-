import React, { useState } from "react";

const certificates = [
  { title: "Registration Certificate", img: "/register.png" },
  { title: "PAN Registration", img: "/pan.png" },
  { title: "ISO Certificate", img: "/iso.png" },
  { title: "Udyam Registration Certificate", img: "/udyam1.png" },
  { title: "Udyam Registration Certificate", img: "/udyam2.png" },
  { title: "Devsthan Certificate", img: "/devsthan.png" },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-20 text-center">

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-[#8DB154] uppercase tracking-wide">
        Certificates
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-4xl mx-auto mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
        RHCF-NGO is registered under various statutory bodies including 12A & 80G
        of the Income Tax Act and is eligible for CSR funding. The organization
        ensures transparency, compliance, and accountability in all its operations.
      </p>

      {/* REGISTRATION INFO */}
      <div className="max-w-4xl mx-auto mt-8 text-left text-sm text-gray-800 leading-relaxed space-y-3 bg-white p-6 rounded-lg shadow-sm border">

        <p>
          Registered Under Rajasthan Societies Act 1958 (Rajasthan Act Number 28, 1958) Vide
          Registration No.- 1210/JAIPUR/2002-03 Dated 02.01.2003.
        </p>

        <p><strong>Permanent Account No.:</strong> AABTR0566R</p>

        <p>
          Registered under Section 12-A of Income Tax Act 1961 -
          Reg. No.- AABTR0566RE2008101
        </p>

        <p>
          Registered under Section 80-G of Income Tax Act 1961 -
          Reg. No.- AABTR0566RF2008901
        </p>

        <p>
          Registered on NGO Darpan Portal -
          Reg. No.- RJ/2009/0022530
        </p>

        <p>
          Registered for CSR funding -
          Reg. No.- CSR00015568
        </p>

        <p>
          Registration of GST -
          08AABTR0566R2ZU
        </p>

      </div>

      {/* SUBTEXT */}
      <p className="mt-6 text-gray-600 text-sm">
        Click on any certificate below to view in full screen.
      </p>

      {/* CERTIFICATE GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">

        {certificates.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border hover:shadow-md transition overflow-hidden text-left"
          >

            {/* IMAGE */}
            <div
              className="cursor-pointer"
              onClick={() => setSelected(item.img)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-contain bg-gray-100 p-3"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-gray-800 font-medium mb-4">
                {item.title}
              </h3>

              <button
                onClick={() => setSelected(item.img)}
                className="bg-green-600 text-white px-4 py-2 text-sm rounded-md hover:bg-green-700 transition"
              >
                View Certificate
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          {/* IMAGE */}
          <img
            src={selected}
            alt="Certificate"
            className="max-h-[90vh] max-w-[90vw] object-contain bg-white p-4 rounded shadow-lg"
          />

        </div>
      )}

    </section>
  );
};

export default CertificatesSection;