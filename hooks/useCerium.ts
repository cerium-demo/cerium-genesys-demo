import { useEffect, useCallback, useMemo } from "react"

declare global {
  interface Window {
    CXBus: any
    _genesys: any
    CHANNEL_SELECTOR_SUBSCRIBED: boolean
    CHANNEL_SELECTOR_EVENTS_SET: boolean
  }
}

async function loadScript(src) {
  const script = document.createElement("script")

  script.src = src
  script.async = true
  script.defer = true

  document.body.appendChild(script)

  await new Promise((resolve) => {
    script.onload = resolve
  })
}

export default function useCerium({ openSmsModal = () => {} } = {}) {
  const webchatConfig = useMemo(
    () => ({
      form: {
        autoSubmit: false,
        firstname: "Caleb",
        lastname: "Engel",
        email: "",
        subject: "",
      },
      formJSON: {
        wrapper: "<table></table>",
        inputs: [
          {
            id: "cx_webchat_form_firstname",
            name: "firstname",
            maxlength: "100",
            placeholder: "Required",
            label: "First Name",
          },
          {
            id: "cx_webchat_form_lastname",
            name: "lastname",
            maxlength: "100",
            placeholder: "Required",
            label: "Last Name",
          },
          {
            id: "cx_webchat_form_email",
            name: "email",
            maxlength: "100",
            placeholder: "Optional",
            label: "Email",
          },
          {
            id: "cx_webchat_form_subject",
            name: "subject",
            maxlength: "100",
            placeholder: "Optional",
            label: "Subject",
          },
        ],
      },
    }),
    []
  )

  const openChat = useCallback(() => {
    if (window.CXBus) {
      window.CXBus.command("WebChat.open", webchatConfig)
    }
  }, [webchatConfig])

  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(async function fn() {
        await loadScript(
          "https://apps.mypurecloud.com/widgets/9.0/cxbus.min.js"
        )

        window.CXBus.configure({
          debug: false,
          pluginsPath: "https://apps.usw2.pure.cloud/widgets/9.0/plugins/",
        })

        window.CXBus.loadPlugin("widgets-core")

        window._genesys = {
          widgets: {
            main: {
              theme: "light",
              downloadGoogleFont: false,
              preload: ["sidebar"],
            },
            sidebar: {
              showOnStartup: true,
              position: "left",
              expandOnHover: true,
              channels: [
                {
                  name: "ChannelSelector",
                  clickCommand: "ChannelSelector.open",
                  clickOptions: {},
                  //use your own static string or i18n query string for the below two display properties
                  displayName: "Live Assist",
                  displayTitle: "Get live help",
                  icon: "agent",
                },
                {
                  name: "WebChat",
                  displayName: "Chat",
                },
              ],
            },
            webchat: {
              transport: {
                type: "purecloud-v2-sockets",
                dataURL: "https://api.usw2.pure.cloud",
                deploymentKey: "5bbbc179-74a6-4197-894d-29e583a0c083",
                orgGuid: "a78298be-8d98-4509-8250-80cae184afd9",
                interactionData: {
                  routing: {
                    targetType: "QUEUE",
                    targetAddress: "Seattle CSQ",
                    priority: 2,
                  },
                },
              },
            },
            channelselector: {
              channels: [
                {
                  clickCommand: "CallUs.open",
                  displayName: "Call Us",
                  icon: "call-outgoing",
                },
                {
                  clickCommand: "WebChat.open",
                  displayName: "Chat",
                  icon: "chat",
                },
                {
                  clickCommand: "SendMessage.open",
                  displayName: "Send Message",
                  icon: "email",
                },
                {
                  clickCommand: "Callback.open",
                  displayName: "Receive a Call",
                  icon: "call-incoming",
                },
                {
                  clickCommand: "",
                  displayName: "Message on Facebook",
                  html: `<img src="/facebook-assistance-icon.png" />`,
                },
                {
                  // clickCommand: "CallUs.open",
                  displayName: "Send SMS text",
                  icon: "email",
                },
              ],
            },
            callus: {
              contacts: [
                {
                  displayName: "Payments",
                  i18n: "Number001",
                  number: "1 202 555 0162",
                },
                {
                  displayName: "Local",
                  i18n: "Number002",
                  number: "202 555 0134",
                },
                {
                  displayName: "International",
                  i18n: "Number003",
                  number: "0647 555 0131",
                },
              ],
            },
          },
        }

        if (!window.CHANNEL_SELECTOR_SUBSCRIBED) {
          window.CHANNEL_SELECTOR_SUBSCRIBED = true
          window.CXBus.subscribe("ChannelSelector.opened", () => {
            if (!window.CHANNEL_SELECTOR_EVENTS_SET) {
              window.CHANNEL_SELECTOR_EVENTS_SET = true
            }

            // Facebook button
            document
              .querySelector(".cx-channel.Channel04")
              .addEventListener("click", () => {
                open("https://www.facebook.com/ceriumdemo")
              })

            // SMS button
            document
              .querySelector(".cx-channel.Channel05")
              .addEventListener("click", openSmsModal)
          })
        }
      })()
    }
  }, [openSmsModal])

  return { openChat }
}
