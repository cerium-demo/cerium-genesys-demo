import { useState, useEffect, useCallback, useMemo } from "react"

export default function useChat() {
  const [plugin, setPlugin] = useState()

  const advancedConfig = useMemo(
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
    if (plugin) {
      plugin.command("WebChat.open", advancedConfig)
    }
  }, [plugin, advancedConfig])

  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(async () => {
        await import("../lib/genesys-web-chat-script")

        window.CXBus.configure({
          debug: false,
          pluginsPath: "https://apps.usw2.pure.cloud/widgets/9.0/plugins/",
        })

        window.CXBus.loadPlugin("widgets-core")

        window._genesys = {
          widgets: {
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
              userData: {
                addressStreet: "962 Trail",
                addressCity: "",
                addressPostalCode: "",
                addressState: "",
                phoneNumber: "",
                customField1Label: "",
                customField1: "",
                customField2Label: "",
                customField2: "",
                customField3Label: "",
                customField3: "",
              },
            },
          },
        }

        const plugin = window.CXBus.registerPlugin("custom")

        setPlugin(plugin)
      })()
    }
  }, [])

  return { openChat }
}
