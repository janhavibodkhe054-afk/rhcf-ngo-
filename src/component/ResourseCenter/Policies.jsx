import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shield } from "lucide-react";
import { BookOpen, MapPin, Target } from "lucide-react";
import { ShoppingCart, AlertCircle, CheckCircle2 } from "lucide-react";
import {
  Landmark,
  Wallet,
  FileText,
  ShieldCheck,
  BadgeCheck,
  AlertTriangle,
  Layers,
  Scale,
} from "lucide-react";
import {
  Users,
  UserCheck,
  Clock,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const policies = [
  { id: "anti", label: "Anti-Bribery" },
  { id: "data", label: "Data Protection" },
  { id: "finance", label: "Finance" },
  { id: "hr", label: "HR & Payroll" },
  { id: "procurement", label: "Procurement" },
  { id: "rules", label: "Rules Book" },
  { id: "harassment", label: "Sexual Harassment" },
  { id: "whistle", label: "Whistleblower" },
];

const HeroSection = () => (
  <section className="relative h-[60vh] w-full flex items-center justify-center bg-gradient-to-r from-[#7cb342]/40 via-[#a8d56e]/30 to-[#f4f8f2]/40 mb-12">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-8 mt-40 md:mt-0">
      {/* Left Text */}
      <div className="flex-1 text-left text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#f8f4e3] via-[#9ebdcd] to-[#a8d56e]">
          RHCF Policies & Initiatives
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          Explore how Rajasthan Human Care Foundation ensures transparency,
          accountability, and community impact through its structured policy
          framework.
        </p>
        <div className="w-28 h-1 bg-gradient-to-r from-[#9ebdcd] via-[#f8f4e3] to-[#a8d56e] rounded-full mt-4"></div>
      </div>

      {/* Right Images */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="relative w-full md:w-1/2 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://dailypioneer.com/uploads/2026/story/images/big/empowering-rural-communities-2026-01-15.jpg"
            alt="Policy Image 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="relative w-full md:w-1/2 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://give.do/blog/wp-content/uploads/2022/12/5-ngo-blog-banner.png"
            alt="Policy Image 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

const Sidebar = ({ active, setActive, isOpen, setIsOpen }) => (
  <>
    {/* Overlay (mobile) */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
        onClick={() => setIsOpen(false)}
      ></div>
    )}
    <aside
      className={`
    fixed lg:sticky top-0 left-0
    h-full lg:h-[calc(100vh-0px)]
    w-72
    bg-white border-r border-gray-200 p-6
    transform transition-transform duration-300
    z-[999] lg:z-auto

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    lg:translate-x-0
  `}
    >
      {/* Close Button (Mobile) */}
      <button
        onClick={() => setIsOpen(false)}
        className="lg:hidden mb-6 text-gray-600"
      >
        Close ✕
      </button>

      <h1 className="text-xl font-bold text-[#0f172a] mb-8">RHCF Policies</h1>

      <nav className="space-y-3 text-sm">
        {policies.map((policy) => (
          <button
            key={policy.id}
            onClick={() => {
              setActive(policy.id);
              setIsOpen(false); // auto close on click
            }}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
              active === policy.id
                ? "bg-[#9EBDCD]/30 text-[#0f172a] font-semibold shadow-md"
                : "text-gray-600 hover:bg-[#9EBDCD]/20 hover:text-[#0f172a]"
            }`}
          >
            {policy.label}
          </button>
        ))}
      </nav>
    </aside>
  </>
);

const Section = ({ title, children }) => (
  <div
    className="mb-12 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 md:p-10 border border-[#e6eef2]"
    data-aos="fade-up"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
      {title}
    </h2>
    <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
      {children}
    </div>
  </div>
);

const PolicyPage = () => {
  const [activeSection, setActiveSection] = useState("anti");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 80 });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-br from-white via-[#f7fbfd] to-[#eef5f8] min-h-screen">
      {/* SIDEBAR */}
      <Sidebar
        active={activeSection}
        setActive={setActiveSection}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden mb-4 px-4 py-2 bg-[#9EBDCD] text-white rounded-lg shadow"
        >
          Open Policies Menu
        </button>
        <HeroSection />

        {/* CONDITIONAL SECTIONS */}
        {activeSection === "anti" && (
          <section className="mb-24 scroll-mt-24 p-4 md:p-12 space-y-12 shadow-lg rounded-xl border border-gray-100">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-3 tracking-tight">
                Anti-Bribery & Anti-Corruption Policy
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            </div>

            {/* Intro */}
            <div className="bg-gradient-to-br from-white to-[#9EBDCD]/10 border border-[#9EBDCD]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 text-sm leading-relaxed">
                RHCF is committed to maintaining the highest standards of
                integrity, transparency, and accountability in all its
                operations. This policy establishes a zero-tolerance approach
                towards bribery and corruption and applies across all programs,
                partnerships, and organizational activities.
              </p>
            </div>

            {/* Objective & Scope */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">Objective</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Promote ethical conduct and ensure that no employee or
                  stakeholder engages in bribery or corrupt practices in any
                  form.
                </p>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">Scope</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This policy applies to all employees, board members,
                  consultants, interns, volunteers, vendors, contractors, and
                  any third party associated with RHCF.
                </p>
              </div>
            </div>

            {/* Definitions */}
            <div className="mt-6 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-[#0f172a]">Definitions</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                <strong>Bribery:</strong> Offering, giving, receiving, or
                soliciting anything of value to influence decisions unfairly.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Corruption:</strong> Abuse of entrusted power for
                personal gain, including fraud, embezzlement, or favoritism.
              </p>
            </div>

            {/* Core Principles */}
            <div className="mt-6 bg-gradient-to-br from-white to-[#9EBDCD]/10 border border-[#9EBDCD]/30 p-5 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold mb-4 text-[#0f172a]">
                Core Principles
              </h4>
              <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                <li>No bribes, kickbacks, or facilitation payments</li>
                <li>No misuse of organizational funds or resources</li>
                <li>All procurement and hiring must be transparent and fair</li>
              </ul>
            </div>

            {/* Prohibited Practices */}
            <div className="mt-6 bg-gradient-to-r from-[#7cb342] to-white text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h4 className="font-semibold mb-3 text-gray-900">
                Prohibited Practices
              </h4>
              <ul className="text-sm space-y-2">
                <li>Giving or accepting bribes or kickbacks</li>
                <li>Offering gifts to influence decisions</li>
                <li>Using funds for illegal purposes</li>
                <li>Manipulating recruitment or procurement</li>
              </ul>
            </div>

            {/* Gifts & Due Diligence */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Gifts & Hospitality
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Only nominal gifts (below ₹500) may be accepted if they are
                  not intended to influence decisions. All such instances must
                  be declared. Cash gifts are strictly prohibited.
                </p>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Due Diligence
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  RHCF ensures that all vendors, partners, and consultants are
                  verified through proper due diligence. Contracts must include
                  ethical compliance clauses.
                </p>
              </div>
            </div>

            {/* Reporting */}
            <div className="mt-6 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                Reporting & Action
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Any suspected case of bribery or corruption must be reported via
                email at{" "}
                <span className="text-[#9EBDCD] font-medium">
                  whistleblower@rhcf.org
                </span>
                . Anonymous complaints may be considered if supported by
                evidence. RHCF ensures strict action and prohibits retaliation
                against whistleblowers.
              </p>
            </div>
          </section>
        )}

        {activeSection === "data" && (
          <section
            id="data"
            className="mb-24 scroll-mt-24 p-4 md:p-12 space-y-12 shadow-lg rounded-xl border border-gray-100"
          >
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-3 tracking-tight">
                Data Protection & Confidentiality Policy
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            </div>

            {/* Intro / Objective */}
            <div className="bg-gradient-to-br from-white to-[#9EBDCD]/10 border border-[#9EBDCD]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 text-sm leading-relaxed">
                RHCF is committed to safeguarding the privacy and
                confidentiality of all personal, organizational, and beneficiary
                data. This policy ensures that data is handled responsibly,
                securely, and in compliance with applicable legal and ethical
                standards.
              </p>
            </div>

            {/* Objective & Scope */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
                  <Users size={18} className="text-[#9EBDCD]" />
                  Objective
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To protect sensitive data and ensure responsible handling,
                  storage, and usage across all organizational activities.
                </p>
              </div>

              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
                  <Shield size={18} className="text-[#9EBDCD]" />
                  Scope
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  This policy applies to all individuals associated with RHCF
                  who have access to data, including:
                </p>
                <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
                  {[
                    "Beneficiary data",
                    "Employee records",
                    "Financial information",
                    "Donor and partner data",
                    "Emails, reports, and digital files",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Definition of Personal Data */}
            <div className="mt-6 bg-[#9EBDCD]/10 border-l-4 border-[#9EBDCD] p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#0f172a] mb-3 flex items-center gap-2">
                <FileText size={18} className="text-[#9EBDCD]" />
                Definition of Personal Data
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                Personal data refers to any information that can directly or
                indirectly identify an individual, including:
              </p>
              <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
                {[
                  "Name, address, and contact details",
                  "Aadhaar or identification numbers",
                  "Bank or health records",
                  "Photographs or biometric data",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Principles */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
                  <Shield size={18} className="text-[#9EBDCD]" />
                  Principles of Data Protection
                </h4>
                <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
                  {[
                    "Lawful and fair collection of data",
                    "Usage limited to specific purposes",
                    "Data minimization (only necessary data collected)",
                    "Accuracy and regular updates",
                    "Confidentiality and security",
                    "Retention only as long as required",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Data Collection Highlight */}
              <div className="bg-gradient-to-r from-[#7cb342] to-white text-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <FileText size={18} className="text-gray-800" />
                  Data Collection & Consent
                </h4>
                <p className="text-sm text-gray-800 mb-3">
                  Data must be collected ethically with full transparency and
                  consent from individuals.
                </p>
                <ul className="text-sm grid md:grid-cols-2 gap-2">
                  <li>Informed consent must be obtained</li>
                  <li>Purpose of data collection must be explained</li>
                  <li>No reuse without permission</li>
                </ul>
              </div>
            </div>

            {/* Storage, Sharing, Breach, Rights */}
            <div className="mt-6 space-y-6">
              {[
                {
                  title: "Data Storage & Access",
                  icon: Users,
                  content:
                    "Physical records must be securely stored, while digital data must be protected with passwords and restricted access. Only authorized personnel should handle sensitive information.",
                },
                {
                  title: "Data Sharing & Disclosure",
                  icon: Users,
                  content:
                    "Data may only be shared with third parties when consent is obtained or when legally required. All partners must sign confidentiality agreements.",
                },
                {
                  title: "Data Breach & Incident Response",
                  icon: AlertCircle,
                  content:
                    "Any suspected breach must be reported immediately. RHCF will investigate incidents and notify affected individuals where necessary.",
                },
                {
                  title: "Rights of Data Subjects",
                  icon: Users,
                  content: (
                    <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
                      {[
                        "Access personal data",
                        "Request corrections or updates",
                        "Withdraw consent",
                        "Request deletion (subject to legal obligations)",
                      ].map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Confidentiality Obligation",
                  icon: Shield,
                  content:
                    "All stakeholders must maintain strict confidentiality. Unauthorized disclosure of data may result in disciplinary or legal action.",
                },
                {
                  title: "Training & Awareness",
                  icon: Users,
                  content:
                    "RHCF conducts regular training programs to ensure that all staff are aware of data protection practices and responsibilities.",
                },
                {
                  title: "Retention & Disposal",
                  icon: FileText,
                  content:
                    "Data will be retained only as required. Physical records will be securely destroyed, and digital data will be permanently deleted after the retention period.",
                },
                {
                  title: "Review & Amendment",
                  icon: Shield,
                  content:
                    "This policy will be reviewed periodically and updated to align with legal requirements and organizational changes.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-[#0f172a] mb-2 flex items-center gap-2">
                    <item.icon size={18} className="text-[#9EBDCD]" />
                    {item.title}
                  </h4>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "finance" && (
          <Section
            title="Finance & Accounts Policy"
            id="finance"
            className="mb-24 scroll-mt-24"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            {/* Objective */}
            <div className="bg-gradient-to-br from-white to-[#7cb342]/10 border border-[#7cb342]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>1. Objective:</strong> To ensure prudent, transparent,
                and accountable financial management across all operations and
                projects of RHCF.
              </p>
            </div>

            {/* Scope */}
            <div className="bg-white border border-[#9EBDCD]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>2. Scope:</strong> Covers all financial transactions,
                accounting systems, budgeting, audits, reporting, and compliance
                activities including donor-funded projects.
              </p>
            </div>

            {/* Accounting System */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                3. Accounting System
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                RHCF maintains accounts on an accrual basis in accordance with
                Indian GAAP standards. Accounting software such as Tally is used
                to ensure structured bookkeeping. Financial records are updated
                regularly and closed annually to maintain accuracy and
                transparency.
              </p>
            </div>

            {/* Bank Accounts */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                4. Bank Accounts
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                All funds must be deposited in authorized RHCF bank accounts
                operated jointly by at least two signatories. Separate accounts
                may be created for donor-specific projects with proper approvals
                to ensure financial segregation and accountability.
              </p>
            </div>

            {/* Budgeting */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                5. Budgeting
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Annual budgets are prepared for all programs and approved by the
                Governing Body. Expenditures are monitored against approved
                budgets to prevent overspending and ensure optimal utilization
                of funds.
              </p>
            </div>

            {/* Income Sources */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                6. Income Sources
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Income is derived from grants, donations, institutional funding,
                consulting services, and bank interest. Each income stream is
                properly recorded and tracked to maintain financial clarity.
              </p>
            </div>

            {/* Expenditure & Payments */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                7. Expenditure & Payments
              </h4>
              <ul className="text-gray-600 text-sm list-disc ml-6 space-y-1">
                <li>All payments must be invoice-supported</li>
                <li>Expenses above ₹10,000 require dual approval</li>
                <li>Bank transfers are preferred over cash</li>
                <li>Cash payments limited to ₹5,000</li>
              </ul>
            </div>

            {/* Internal Controls */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                8. Internal Controls
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strong internal controls including segregation of duties, dual
                authorization, and restricted system access are implemented to
                prevent fraud and ensure accountability.
              </p>
            </div>

            {/* Audits */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">9. Audits</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Annual audits are conducted by certified Chartered Accountants,
                along with periodic internal audits. Audit findings are
                documented and corrective actions are implemented promptly.
              </p>
            </div>

            {/* Statutory Compliance */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                10. Statutory Compliance
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                RHCF complies with Income Tax regulations, FCRA, GST, and other
                statutory requirements. All returns and filings are completed
                within prescribed timelines.
              </p>
            </div>

            {/* Fraud & Misuse */}
            <div className="bg-white border border-red-400/50 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-red-600">
                11. Fraud & Misuse
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Any suspected misuse of funds must be reported immediately.
                Strict disciplinary and legal actions will be taken, with
                protection ensured for whistleblowers.
              </p>
            </div>

            {/* Review & Amendment */}
            <div className="bg-white border border-gray-400 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                12. Review & Amendment
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                This policy is reviewed every two years and updated based on
                statutory or operational changes.
              </p>
            </div>
          </Section>
        )}

        {activeSection === "hr" && (
          <Section
            title="HR & Payroll Policy"
            id="hr"
            className="mb-20 scroll-mt-24"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            {/* Objective */}
            <div className="bg-gradient-to-br from-white to-[#7cb342]/10 border border-[#7cb342]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>1. Objective:</strong> To provide a structured framework
                for managing human resources, ensuring fair employment
                practices, structured payroll systems, and a positive, ethical,
                and inclusive workplace environment within RHCF.
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-white border border-[#9EBDCD]/30 p-6 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>2. Introduction:</strong> This policy outlines the
                rules, procedures, and principles guiding employee management,
                recruitment, compensation, conduct, and benefits across all
                levels of the organization.
              </p>
            </div>

            {/* Employment Categories */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                3. Employment Categories
              </h4>
              <ul className="text-gray-600 text-sm list-disc ml-6 space-y-1">
                <li>Full-Time Employee</li>
                <li>Part-Time Employee</li>
                <li>Project-Based Staff</li>
                <li>Consultant / Contractual Staff</li>
                <li>Interns and Volunteers</li>
              </ul>
            </div>

            {/* Recruitment & Selection */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                4. Recruitment & Selection
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Recruitment at RHCF follows a transparent and merit-based
                approach. Each role is defined with a clear job description, and
                candidates are evaluated through structured screening,
                interviews, and verification processes including reference and
                background checks.
              </p>
            </div>

            {/* Offer Letter & Appointment */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                5. Offer Letter & Appointment
              </h4>
              <ul className="text-gray-600 text-sm list-disc ml-6 space-y-1">
                <li>Offer and appointment letters issued to all candidates</li>
                <li>Includes role, salary, and responsibilities</li>
                <li>Probation period: 3–6 months</li>
              </ul>
            </div>

            {/* Working Hours & Attendance */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                6. Working Hours & Attendance
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standard working hours are 9:30 AM to 5:30 PM, Monday to Friday.
                Employees are required to maintain regular attendance, and
                consistent delays or absenteeism will be reviewed by HR.
              </p>
            </div>

            {/* Leave Policy */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                7. Leave Policy
              </h4>
              <ul className="text-gray-600 text-sm list-disc ml-6 space-y-1">
                <li>Casual Leave: 12 days/year</li>
                <li>Earned Leave: 18 days/year</li>
                <li>Maternity Leave: 26 weeks</li>
                <li>Paternity Leave: 7 days</li>
                <li>Leave Without Pay requires approval</li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                8. Code of Conduct
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Employees are expected to maintain integrity, respect, and
                professionalism. Discrimination, harassment, and misuse of
                organizational resources are strictly prohibited. Any conflict
                of interest must be disclosed promptly.
              </p>
            </div>

            {/* Performance Appraisal */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                9. Performance Appraisal
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Performance is evaluated annually based on KPIs and feedback
                from supervisors and peers. Outcomes may include promotions,
                increments, or training opportunities.
              </p>
            </div>

            {/* Payroll Policy */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                10. Payroll Policy
              </h4>
              <ul className="text-gray-600 text-sm list-disc ml-6 space-y-1">
                <li>Salary processed by the 7th of every month</li>
                <li>Includes allowances and deductions</li>
                <li>Paid via bank transfer</li>
                <li>Payslips issued monthly</li>
              </ul>
            </div>

            {/* Training & Development */}
            <div className="bg-white border border-[#7cb342]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                11. Training & Development
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                RHCF promotes continuous learning through internal and external
                training programs. Employees are encouraged to enhance their
                professional skills and knowledge.
              </p>
            </div>

            {/* Confidentiality & Data Protection */}
            <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                12. Confidentiality & Data Protection
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                All employees must ensure confidentiality of sensitive
                information. Unauthorized disclosure or misuse of data may
                result in strict disciplinary or legal action.
              </p>
            </div>

            {/* Review & Amendment */}
            <div className="bg-white border border-gray-400 p-5 rounded-xl shadow-sm hover:shadow-md transition mb-6">
              <h4 className="font-semibold mb-2 text-[#0f172a]">
                13. Review & Amendment
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                This policy will be reviewed periodically and updated as per
                organizational and legal requirements.
              </p>
            </div>
          </Section>
        )}

        {activeSection === "procurement" && (
          <section
            id="procurement"
            className="mb-24 scroll-mt-24 p-4 md:p-12 space-y-12 shadow-lg rounded-xl border border-gray-100"
          >
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-3 tracking-tight">
                Procurement Policy
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            </div>

            {/* Intro / Objective */}
            <div className="bg-gradient-to-br from-white to-[#9EBDCD]/10 border border-[#9EBDCD]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-[#0f172a]">Objective:</strong> RHCF
                ensures that all procurement activities are conducted with
                transparency, fairness, and accountability while achieving value
                for money. The organization follows structured processes to
                procure goods, services, and works efficiently while maintaining
                ethical standards and compliance with donor and statutory
                requirements.
              </p>
            </div>

            {/* Scope + Core Principles */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="text-[#9EBDCD]" size={18} />
                  <h4 className="font-semibold text-[#0f172a]">Scope</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Applicable to all departments, staff, and partners involved in
                  procurement activities using organizational or donor funds,
                  ensuring consistency and compliance across all projects.
                </p>
              </div>

              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-[#9EBDCD]" size={18} />
                  <h4 className="font-semibold text-[#0f172a]">
                    Core Principles
                  </h4>
                </div>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Transparency and fairness</li>
                  <li>Competitive bidding process</li>
                  <li>Cost-effectiveness with quality assurance</li>
                  <li>Proper documentation & accountability</li>
                  <li>Zero tolerance for conflict of interest</li>
                </ul>
              </div>
            </div>

            {/* Procurement Thresholds Highlight */}
            <div className="mt-6 bg-gradient-to-r from-[#7cb342] to-white text-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="text-gray-800" />
                <h4 className="text-lg font-semibold">
                  Procurement Thresholds
                </h4>
              </div>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-800">
                <p>• Up to ₹5,000: Direct purchase</p>
                <p>• ₹5,001 – ₹25,000: Minimum 2 quotations</p>
                <p>• ₹25,001 – ₹1,00,000: 3 quotations + approval</p>
                <p>• Above ₹1,00,000: Tender + Committee + Governing Body</p>
              </div>
            </div>

            {/* Vendor & Procurement Process */}
            <div className="mt-6 space-y-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={18} className="text-[#9EBDCD]" />
                  <h4 className="font-semibold text-[#0f172a]">
                    Vendor Selection
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vendors are selected based on competitive evaluation criteria
                  such as pricing, quality, experience, and performance history.
                  RHCF maintains a structured vendor database and ensures
                  blacklisted or non-compliant vendors are excluded from
                  procurement processes.
                </p>
              </div>

              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={18} className="text-[#9EBDCD]" />
                  <h4 className="font-semibold text-[#0f172a]">
                    Procurement Process
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The procurement lifecycle includes requisition, quotation
                  collection, evaluation, approval, purchase order issuance,
                  delivery inspection, and payment processing. Each step is
                  documented to ensure traceability and accountability.
                </p>
              </div>
            </div>

            {/* Committee + Emergency Procurement */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2">
                  Procurement Committee
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A minimum three-member committee oversees major procurements,
                  ensuring fairness and compliance. All evaluation decisions are
                  documented and signed by committee members.
                </p>
              </div>

              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2">
                  Emergency Procurement
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In urgent situations, procurement may be fast-tracked with
                  approval from authorized personnel. Proper justification and
                  post-facto documentation are mandatory.
                </p>
              </div>
            </div>

            {/* Conflict of Interest */}
            <div className="mt-6 bg-gradient-to-r from-[#9EBDCD]/20 to-white border border-[#9EBDCD]/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="text-[#0f172a]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">
                  Conflict of Interest & Compliance
                </h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                All stakeholders must disclose any personal or financial
                relationships with vendors. Procurement decisions must remain
                unbiased. Violations may result in disciplinary action,
                financial recovery, or legal consequences.
              </p>
            </div>

            {/* Documentation, Asset Management, Monitoring */}
            <div className="mt-6 space-y-4">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Documentation
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All procurement records including quotations, approvals,
                  purchase orders, invoices, and goods receipt notes must be
                  properly maintained and securely stored for audit purposes.
                </p>
              </div>

              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Asset Management
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All procured assets must be recorded, tagged, and periodically
                  verified. Disposal of assets requires formal approval from the
                  governing authority.
                </p>
              </div>

              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Monitoring & Review
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Procurement activities are subject to regular audits and
                  performance reviews. This policy is reviewed every two years
                  or updated as required by regulatory or organizational
                  changes.
                </p>
              </div>
            </div>
          </section>
        )}
        {activeSection === "rules" && (
          <section
            id="rules"
            className="mb-24 scroll-mt-24 p-4 md:p-12 space-y-12 shadow-lg rounded-xl border border-gray-100"
          >
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-3 tracking-tight">
                Rules Book
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            </div>

            {/* Intro */}
            <div className="bg-gradient-to-br from-white to-[#9EBDCD]/10 border border-[#9EBDCD]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-[#0f172a]">Name:</strong> The
                organization shall be known as
                <span className="font-semibold">
                  {" "}
                  Rajasthan Human Care Foundation (RHCF)
                </span>
                , committed to social development, transparency, and inclusive
                growth through structured governance and ethical practices.
              </p>
            </div>

            {/* Office + Objectives */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {/* Office */}
              <div className="p-5 rounded-xl border border-[#9EBDCD]/30 bg-white hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-[#9EBDCD]" size={18} />
                  <h4 className="font-semibold text-[#0f172a]">
                    Registered Office
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  21, Champa Nagar, New Sanganer Road, Gurjar Ki Thadi, Jaipur -
                  302019. Branch offices may be established with approval from
                  the Governing Body.
                </p>
              </div>

              {/* Objectives */}
              <div className="p-5 rounded-xl border border-[#9EBDCD]/30 bg-white hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="text-[#9EBDCD]" size={18} />
                  <h4 className="font-semibold text-[#0f172a]">
                    Core Objectives
                  </h4>
                </div>

                <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                  <li>Promote education, health & livelihood</li>
                  <li>Empower marginalized communities</li>
                  <li>Environmental & rural development programs</li>
                  <li>Human rights & social justice initiatives</li>
                  <li>Disaster relief & rehabilitation</li>
                </ul>
              </div>
            </div>

            {/* Membership Section */}
            <div className="mt-10 bg-gradient-to-r from-[#7cb342] to-white text-gray-800 p-7 rounded-3xl shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-gray-800" />
                <h3 className="text-lg font-semibold">Membership Structure</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
                <p>• General, Executive & Honorary Members</p>
                <p>• Minimum age: 18 years</p>
                <p>• Approval by Governing Body required</p>
                <p>• Membership may terminate on violation or inactivity</p>
              </div>
            </div>

            {/* Governing + General Body */}
            <div className="mt-10 space-y-6">
              <div className="group border-l-4 border-[#9EBDCD] pl-5 hover:pl-7 transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <Landmark size={18} className="text-[#9EBDCD]" />
                  <h4 className="font-semibold text-[#0f172a]">
                    Governing Body
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The Governing Body consists of 5–15 members including
                  President, Secretary, Treasurer, and other office bearers. It
                  is responsible for policy decisions, project approvals,
                  compliance, and overall strategic direction of RHCF.
                </p>
              </div>

              <div className="group border-l-4 border-[#9EBDCD] pl-5 hover:pl-7 transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen size={18} className="text-[#9EBDCD]" />
                  <h4 className="font-semibold text-[#0f172a]">General Body</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The General Body includes all registered members and holds the
                  authority to elect the Governing Body, approve annual reports,
                  and amend rules through a majority voting system.
                </p>
              </div>
            </div>

            {/* Finance Section */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2">
                  Financial Framework
                </h4>
                <p className="text-sm text-gray-600">
                  RHCF funds are generated through donations, grants, and
                  project income. All funds must be used strictly for
                  organizational objectives and managed through authorized bank
                  accounts.
                </p>
              </div>

              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2">
                  Audit & Compliance
                </h4>
                <p className="text-sm text-gray-600">
                  Financial records must be maintained accurately and audited
                  annually by a Chartered Accountant to ensure transparency and
                  statutory compliance.
                </p>
              </div>
            </div>

            {/* Meetings */}
            <div className="mt-10 bg-gradient-to-r from-[#9EBDCD]/20 to-white border border-[#9EBDCD]/40 p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="text-[#0f172a]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">
                  Meetings & Governance
                </h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Regular meetings ensure effective governance. General Body
                meetings require one-third quorum, while Governing Body meetings
                require 50% quorum. Decisions are made through voting and proper
                documentation of proceedings.
              </p>
            </div>

            {/* Conduct + Legal */}
            <div className="mt-8 space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#0f172a]">Code of Conduct:</strong> All
                members must uphold integrity, transparency, and respect while
                avoiding conflicts of interest and misuse of organizational
                resources.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#0f172a]">Legal Status:</strong> RHCF
                operates as a non-profit, non-political organization and
                complies with applicable Indian laws including the Societies
                Registration Act, Income Tax regulations, and FCRA provisions
                where applicable.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#0f172a]">Dissolution Clause:</strong>{" "}
                In case of dissolution, assets will not be distributed among
                members but transferred to another organization with similar
                objectives, as decided by the General Body.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#0f172a]">Amendments:</strong> Rules
                may be amended with a two-thirds majority approval and prior
                notice to all members.
              </p>
            </div>
          </section>
        )}

        {activeSection === "harassment" && (
          <Section id="harassment" className="mb-24 scroll-mt-24">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-3 tracking-tight">
                Sexual Harassment Policy
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            </div>

            {/* Objective */}
            <div className="bg-gradient-to-br from-white to-[#9EBDCD]/10 border border-[#9EBDCD]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-[#0f172a]">Objective:</strong> To
                provide a safe, secure, and respectful environment free from
                sexual harassment for all employees, volunteers, interns, and
                beneficiaries of RHCF.
              </p>
            </div>

            {/* Scope */}
            <div className="mt-8 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-[#9EBDCD]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">Scope</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                This policy applies to all individuals associated with RHCF
                including employees, consultants, interns, volunteers, board
                members, and visitors at the workplace or project locations.
              </p>
            </div>

            {/* Definition */}
            <div className="mt-6 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="text-[#9EBDCD]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">
                  Definition of Sexual Harassment
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Includes any unwelcome sexually determined behavior (direct or
                implied), such as:
              </p>
              <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
                <li>Physical contact or advances</li>
                <li>Demand or request for sexual favors</li>
                <li>Sexually colored remarks</li>
                <li>Showing pornography</li>
                <li>
                  Any unwelcome physical, verbal, or non-verbal conduct of a
                  sexual nature
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="mt-6 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-[#9EBDCD]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">
                  Legal Framework
                </h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                In accordance with the Sexual Harassment of Women at Workplace
                (Prevention, Prohibition and Redressal) Act, 2013.
              </p>
            </div>

            {/* ICC */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-[#9EBDCD]" size={18} />
                  <h4 className="font-semibold text-[#0f172a]">
                    Internal Complaints Committee (ICC)
                  </h4>
                </div>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Presiding Officer (senior woman employee)</li>
                  <li>Two employee members</li>
                  <li>One external member (NGO/legal background)</li>
                  <li>At least 50% members must be women</li>
                  <li>Committee tenure: 3 years</li>
                </ul>
              </div>

              {/* Complaint Mechanism */}
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="text-[#9EBDCD]" size={18} />
                  <h4 className="font-semibold text-[#0f172a]">
                    Complaint Mechanism
                  </h4>
                </div>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>
                    Complaint must be submitted within 3 months of the incident
                  </li>
                  <li>Assistance will be provided if required</li>
                  <li>Identity of complainant will remain confidential</li>
                </ul>
              </div>
            </div>

            {/* Inquiry + Action */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2">
                  Inquiry Process
                </h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Inquiry completed within 90 days</li>
                  <li>Both parties heard fairly</li>
                  <li>Evidence recorded and documented</li>
                  <li>Report submitted within 10 days after inquiry</li>
                </ul>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-[#0f172a] mb-2">
                  Action on Misconduct
                </h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Written apology</li>
                  <li>Warning or reprimand</li>
                  <li>Suspension or termination</li>
                  <li>Legal action if required</li>
                  <li>False complaints may be penalized as per law</li>
                </ul>
              </div>
            </div>

            {/* Protection + Confidentiality */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-[#7cb342] to-white text-gray-800 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition">
                <h4 className="font-semibold mb-2">
                  Protection from Retaliation
                </h4>
                <p className="text-sm leading-relaxed">
                  RHCF ensures protection of complainants, witnesses, and ICC
                  members from retaliation, threats, or intimidation during and
                  after the inquiry.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#7cb342] to-white text-gray-800 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition">
                <h4 className="font-semibold mb-2">Confidentiality</h4>
                <ul className="text-sm list-disc ml-6 space-y-1">
                  <li>All proceedings and identities remain confidential</li>
                  <li>Unauthorized disclosure is punishable under law</li>
                </ul>
              </div>
            </div>

            {/* Awareness + Record + Reporting + Review */}
            <div className="mt-6 space-y-4">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2">Awareness & Training</h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Regular training and awareness programs conducted</li>
                  <li>Policy displayed and shared with all staff</li>
                </ul>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2">Record Keeping</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All complaints, inquiries, and actions documented and
                  maintained for a minimum of 5 years.
                </p>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2">Annual Reporting</h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Number of complaints received and resolved</li>
                  <li>Details of actions taken</li>
                  <li>Reports submitted to authorities if required</li>
                </ul>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2">Review & Amendment</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Policy reviewed annually and updated as per legal requirements
                  and organizational needs.
                </p>
              </div>
            </div>
          </Section>
        )}

        {activeSection === "whistle" && (
          <Section>
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-3 tracking-tight">
                Whistleblower Policy
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#9EBDCD] to-transparent rounded-full"></div>
            </div>

            {/* Objective */}
            <div className="bg-gradient-to-br from-white to-[#9EBDCD]/10 border border-[#9EBDCD]/30 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-[#0f172a]">Objective:</strong> To
                provide a safe and reliable mechanism for reporting unethical
                behavior, fraud, or violations of RHCF policies, while ensuring
                protection from retaliation.
              </p>
            </div>

            {/* Scope */}
            <div className="mt-6 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-[#9EBDCD]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">Scope</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Applies to all employees, volunteers, consultants, board
                members, beneficiaries, and stakeholders associated with RHCF.
              </p>
            </div>

            {/* Definition */}
            <div className="mt-6 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="text-[#9EBDCD]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">
                  Definition of Whistleblower
                </h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Any individual who reports misconduct, unethical practices, or
                activities that violate legal or organizational policies or harm
                RHCF’s integrity.
              </p>
            </div>

            {/* Reportable Concerns */}
            <div className="mt-6 bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="text-[#9EBDCD]" size={18} />
                <h4 className="font-semibold text-[#0f172a]">
                  Reportable Concerns
                </h4>
              </div>
              <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                <li>Financial fraud or misappropriation</li>
                <li>Corruption or bribery</li>
                <li>Misuse of organizational resources</li>
                <li>Harassment, discrimination, or abuse</li>
                <li>Conflict of interest or policy violations</li>
                <li>Acts endangering public health, safety, or environment</li>
              </ul>
            </div>

            {/* Reporting + Confidentiality */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Reporting Mechanism
                </h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Report via email: whistleblower@rhcf.org</li>
                  <li>Submit sealed letter to Secretary/designated officer</li>
                  <li>
                    Anonymous complaints considered with sufficient evidence
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Confidentiality
                </h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>All reports handled confidentially</li>
                  <li>
                    Identity not disclosed without consent unless legally
                    required
                  </li>
                </ul>
              </div>
            </div>

            {/* Investigation + Protection */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Investigation Process
                </h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Handled by internal Whistleblower Committee</li>
                  <li>Investigation initiated within 7 days</li>
                  <li>Completed within 60 days</li>
                  <li>Findings documented and reported to Governing Body</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-[#7cb342] to-white text-gray-800 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition">
                <h4 className="font-semibold mb-2">
                  Protection Against Retaliation
                </h4>
                <p className="text-sm leading-relaxed">
                  RHCF strictly prohibits retaliation. Any individual engaging
                  in retaliation will face disciplinary action, including
                  termination.
                </p>
              </div>
            </div>

            {/* False Allegations + Action */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  False Allegations
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  False or malicious complaints made with intent to harm or
                  defame will result in disciplinary action against the
                  complainant.
                </p>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Disciplinary Action
                </h4>
                <ul className="text-sm text-gray-600 list-disc ml-6 space-y-1">
                  <li>Warning or written apology</li>
                  <li>Suspension or termination</li>
                  <li>Legal action if required</li>
                </ul>
              </div>
            </div>

            {/* Records + Review */}
            <div className="mt-6 space-y-4">
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Documentation & Records
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All complaints and investigation details will be securely
                  documented and retained for at least 5 years.
                </p>
              </div>
              <div className="bg-white border border-[#9EBDCD]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold mb-2 text-[#0f172a]">
                  Review & Amendment
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This policy will be reviewed every two years or updated as
                  required to ensure effectiveness and compliance.
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* FOOTER */}
      </main>
    </div>
  );
};

export default PolicyPage;
