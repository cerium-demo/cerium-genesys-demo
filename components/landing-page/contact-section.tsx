import { useMemo } from "react"
import { useForm } from "react-hook-form"

export function ContactSection() {
  const { register, handleSubmit, reset } = useForm()

  const handleFormSubmit = useMemo(
    () =>
      handleSubmit(async (data) => {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        reset()

        alert("Message sent!")
      }),
    [handleSubmit, reset]
  )

  return (
    <section className="my-28" id="contact-section">
      <div className="container">
        <div className="text-center flex flex-col items-center gap-5">
          <div className="text-3xl font-semibold">Contact us</div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <label htmlFor="firstname" className="label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control w-full"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastname" className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control w-full"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control w-full"
                  placeholder="Enter your phone number"
                  {...register("phone")}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control w-full"
                  placeholder="Enter your email"
                  {...register("email")}
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="company" className="label">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  className="form-control w-full"
                  placeholder="Enter your company"
                  {...register("company")}
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control w-full"
                  rows={5}
                  placeholder="Enter your message"
                  {...register("message")}
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="communication" className="label">
                  What form of communication works best for you?
                </label>
                <select
                  name=""
                  id="communication"
                  className="form-control w-full"
                  {...register("communicationForm")}
                  required
                >
                  <option value="" disabled hidden selected>
                    Select a preferred option
                  </option>
                  <option>Phone</option>
                  <option>Email</option>
                  <option>In person</option>
                </select>
              </div>
              <div className="col-span-2">
                <input
                  type="checkbox"
                  name=""
                  id="agree"
                  {...register("agreeToAdditionalContent")}
                  required
                />{" "}
                <label htmlFor="agree">
                  I agree to receive additional content and communications from
                  Cerium Networks.
                </label>
              </div>
              <div className="col-span-2">
                <button type="submit" className="btn">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
