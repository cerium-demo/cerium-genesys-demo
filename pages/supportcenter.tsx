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
		  
        </header>
	<div id="genesys-support-center"></div>		  
	<section className="my-28">
        <div className="container">
          <div className="text-center flex flex-col items-center gap-5">
            <div className="text-3xl font-semibold">
              We focus on your success
            </div>
	 
            <p className="text-gray-500 max-w-xl leading-loose">
              Our consultative approach, deep technical expertise, local
              resources, and extensive strategic partnerships enables us to
              design, deliver and support the advanced technology solutions that
              are the foundation of your business.
            </p>
          </div>
 
          <div className="mt-10 grid grid-cols-3 gap-12">
            {[
              {
                icon: Wifi,
                title: "Unified Communications",
                description:
                  "We provide a unified communications platform that is easy to use, secure, and reliable.",
              },
              {
                icon: Server,
                title: "Data Center",
                description: "Operation simplicity and business agility.",
              },
              {
                icon: Globe,
                title: "Networking",
                description: "Secure, resilient network solutions.",
              },
              {
                icon: Lock,
                title: "Cybersecurity",
                description:
                  "A simplified approach to managing cyber threats & vulnerabilities.",
              },
              {
                icon: Phone,
                title: "Contact Center",
                description:
                  "Communication solutions that strengthen customer engagement.",
              },
              {
                icon: Cpu,
                title: "CIO Lifecycle Services",
                description:
                  "Unleash your technology’s full potential with comprehensive end to end lifecycle services",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="border border-gray-100 rounded-xl p-6"
              >
                <div className="bg-gray-50 inline-block rounded-xl p-4 -mt-16">
                  <Icon className="text-primary" />
                </div>
                <h3 className="font-semibold mt-4 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-28">
        <div className="container">
          <div className="text-center flex flex-col items-center gap-5">
            <div className="text-3xl font-semibold">
              What our clients say about us
            </div>
          </div>
 
          <div className="mt-10 grid grid-cols-2 gap-12">
            {[
              {
                pictureSrc: reviewOne,
                title: "Brad",
                subtitle: "Douglas County WA",
                description:
                  "I had the pleasure of working with Andrew for most of the weekend. We had an email server that was in need of updates. With Andrew’s assistance we worked late into the evening Friday, Saturday and half of Sunday to get the issues resolved. Without his dedicated assistance we would still be offline today.",
              },
              {
                pictureSrc: reviewTwo,
                title: "Michelle",
                subtitle: "First Interstate Bank",
                description:
                  "In a world where you have to wait for responses and get bounced around from person to person, Marco was a breath of fresh air. Marco responded to my problem very quickly and was amazing how he did the troubleshooting and resolved my issue.",
              },
              {
                pictureSrc: reviewThree,
                title: "David",
                subtitle: "Bethel School District",
                description:
                  "Zach was phenomenal to work with. He communicated well throughout the entire project and when it came time for knowledge dump, we spent half the time because so much of the information was already assimilated. Cerium has a real gem with Zach and this project went much more smoothly from start to finish than other projects I've done in the past with others.",
              },
              {
                pictureSrc: reviewFour,
                title: "Chase",
                subtitle: "Adaptive Biotech",
                description:
                  "Daniel has gone above and beyond to make sure we are set up for best practices and explained pitfalls as well. He deserves a raise, or at least a 6 pack of beer for his efforts running down some misleadingly named routes/table names we have. Thank you for your outstanding efforts Daniel!",
              },
            ].map(({ pictureSrc, title, subtitle, description }) => (
              <div
                key={title}
                className="border border-gray-100 rounded-xl p-6"
              >
                <div className="flex mb-4 items-center gap-4">
                  <div className="w-14 h-w-14">
                    <Image
                      src={pictureSrc}
                      alt={title}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-xs">{subtitle}</p>
                  </div>
                </div>
 
                <p className="text-sm text-gray-500 leading-loose">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
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
 
