import React from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";

const team = [
  {
    name: "Raka Andika",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Asya",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rayya",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Jizka",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
  },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top glass-nav">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Rayya <span>Studio</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Team
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-light mb-3">
                CREATIVE DIGITAL TEAM
              </span>

              <h1 className="display-3 fw-bold">
                Build Ideas.
                <br />
                <span>Make Impact.</span>
              </h1>

              <p className="lead mt-4">
                Rayya Studio membantu mengubah ide digital menjadi pengalaman
                web yang modern, responsif, dan mudah digunakan.
              </p>

              <div className="d-flex gap-3 mt-4">
                <Link to="/team" className="btn btn-light btn-lg px-4">
                  Lihat Team
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
                  alt="Team bekerja bersama"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <p className="section-label">OUR SERVICES</p>
            <h2 className="fw-bold">Apa yang kami kerjakan?</h2>
          </div>

          <div className="row g-4">
            {[
              [
                "💻",
                "Web Development",
                "Membangun website cepat, responsif, dan terstruktur menggunakan teknologi modern.",
              ],
              [
                "🎨",
                "UI/UX Design",
                "Merancang tampilan yang menarik sekaligus nyaman digunakan oleh pengguna.",
              ],
              [
                "🚀",
                "Digital Solution",
                "Menciptakan solusi digital yang sesuai kebutuhan dan tujuan sebuah project.",
              ],
            ].map(([icon, title, text]) => (
              <div className="col-md-4" key={title}>
                <div className="service-card h-100 p-4">
                  <div className="service-icon">{icon}</div>
                  <h4 className="fw-bold mt-3">{title}</h4>
                  <p className="text-secondary mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Team() {
  return (
    <main className="page-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-label">MEET THE TEAM</p>

          <h1 className="fw-bold">Team project Rayya Studio</h1>

          <p className="text-secondary">
            Tim kecil dengan semangat besar untuk membuat produk digital.
          </p>
        </div>

        <div className="row g-4">
          {team.map((person) => (
            <div className="col-sm-6 col-lg-3" key={person.name}>
              <div className="team-card h-100">
                <img src={person.image} alt={person.name} />

                <div className="p-4">
                  <h5 className="fw-bold mb-1">{person.name}</h5>
                  <p className="text-primary mb-0">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="page-section">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <p className="section-label">GET IN TOUCH</p>

            <h1 className="fw-bold">Mari ngobrol tentang ide kamu.</h1>

            <p className="text-secondary mt-3">
              Punya pertanyaan atau ingin berkolaborasi? Isi form di samping
              dan tim kami akan menghubungi kamu.
            </p>

            <div className="contact-info mt-4">
              <p>
                <strong>📧 Email</strong>
                <br />
                rayya@studio.id
              </p>

              <p>
                <strong>📍 Lokasi</strong>
                <br />
                Jakarta, Indonesia
              </p>

              <p>
                <strong>📱 Telepon</strong>
                <br />
                +62 85945999690
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              className="contact-form p-4 p-md-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama</label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Masukkan nama"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>

                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="nama@email.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Pesan</label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Ceritakan kebutuhan kamu..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-100">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <span className="text-white-50">
          Built with React + Vite + Bootstrap
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}