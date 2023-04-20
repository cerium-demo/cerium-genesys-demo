import Head from "next/head"
import Script from "next/script"
import Image from "next/image"
import {
  Cpu,
  Globe,
  Lock,
  MessageCircle,
  Phone,
  Server,
  Wifi,
} from "react-feather"
import useCerium from "../hooks/useCerium"
import logo from "../public/cerium-logo.svg"
import ellipsesIllustration from "../public/ellipses-illustration.svg"
import partners from "../public/partners.svg"
import reviewOne from "../public/review-1.png"
import reviewTwo from "../public/review-2.png"
import reviewThree from "../public/review-3.png"
import reviewFour from "../public/review-4.png"
import { ContactSection } from "../components/landing-page/contact-section"
import { useState } from "react"
import Modal from "../components/modal"
 
export default function Home() {
  const [isSmsModalOpen, setOpenSmsModal] = useState(false)
  const { openChat } = useCerium({ openSmsModal: () => setOpenSmsModal(true) })
 
  return (
    <>
      <Modal
        title="Text Us"
        show={isSmsModalOpen}
        onClose={() => setOpenSmsModal(false)}
      >
        <p className="mb-3">You can text us at the following number...</p>
        <div className="flex flex-col">
          <div>+1 206 785 1665</div>
        </div>
      </Modal>
      <Head>
        <title>Cerium Networks</title>
 
        <meta
          name="description"
          content="Cerium provides a full suite of collaboration, networking, data center, and security solutions."
        />
 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        className="btn btn-inverted flex items-center gap-2 fixed bottom-10 right-10"
        onClick={() => openChat()}
      >
        <MessageCircle size={20} />
        <div>Chat</div>
      </button>
      <header>
        <div className="absolute w-full">
          <div className="flex items-end justify-between py-7 container">
            <div className="h-12">
              <Image src={logo} alt="Cerium Networks" />
            </div>
            <nav className="flex items-center gap-8">
              <a href="https://cerium-genesys-demo.vercel.app/index">Home</a>
              <a href="#">Services</a>
              <a href="#">Industries</a>
              <a href="#">About us</a>
              <a href="#">Contacts</a>
            </nav>
          </div>
        </div>
        <div className="container pt-28 h-[700px] flex items-center justify-center">
          <div className="flex flex-col items-center text-center gap-5">
            <h1 className="text-6xl font-semibold leading-tight max-w-3xl relative">
              <div className="z-10 relative">
                We connect your business to its potential
              </div>
              <div className="h-2 w-[280px] bg-primary-light transform -translate-x-4 -translate-y-5 z-0 right-0 absolute" />
            </h1>
            <h2 className="text-2xl text-gray-500 max-w-xl leading-relaxed">
              Cerium provides a full suite of collaboration, networking, data
              center, and security solutions.
            </h2>
            <div className="pt-5 pb-10">
              <a href="#contact-section" className="btn btn-lg block text-lg">
                Contact us
              </a>
            </div>
            <Image src={partners} alt="Partners" />
          </div>
          <div className="absolute -z-10">
            <Image src={ellipsesIllustration} alt="Illustration" />
          </div>
        </div>
      </header>
      <section className="my-28">
        
 
      <ContactSection />
 
      <footer>
        <div className="bg-gray-100">
          <div className="container text-sm text-gray-500 text-center p-5">
            <p>Cerium Networks® © Copyright 2022. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
 
      <Script
        id="genesys-chat-script"
        dangerouslySetInnerHTML={{
          __html: `
            (function (g, e, n, es, ys) {
                g['_genesysJs'] = e;
                g[e] = g[e] || function () {
                  (g[e].q = g[e].q || []).push(arguments)
                };
                g[e].t = 1 * new Date();
                g[e].c = es;
                ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
              })(window, 'Genesys', 'https://apps.usw2.pure.cloud/genesys-bootstrap/genesys.min.js', {
                environment: 'usw2',
                deploymentId: 'fb055e8c-95e5-4ef8-98a4-8a1e0c74cdd8'
              });
          `,
        }}
      />
    </>
  )
}
 
