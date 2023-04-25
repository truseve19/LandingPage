import { useForm } from 'react-hook-form';
import { successNotify } from '../../helper/toastify';
import Circle from "../../svg/circle.svg";
import Cloud from "../../svg/cloud.svg";

function ApplicationForm() {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
      Interested_product: "",
    }
  })

  const onSubmit = async fields => {
    try {
      await fetch("https://api.airtable.com/v0/app6UE6RbpyjRUCFk/ConnectUs", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer patI8oA02uZF2km4I.a28ee2c5d66b575c1929f22937f23a679af04928561d4235180a1a0287b2d5ce"
        },
        body: JSON.stringify({
          records: [{ fields }]
        })
      })

      reset()
      successNotify("We will contact you shortly")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id="contact-form" className="bg-[#EFF1F6] relative isolate">
      <div className="contact-form-divider-bg absolute inset-0 -z-10"></div>

      <Circle className="absolute top-1/2 left-0 z-[1]" />
      <Circle className="absolute top-20 right-0 z-[1]" />
      <Cloud className="w-[173px] h-20 max-sm:scale-75 absolute bottom-8 right-0 fill-[#FFFFFF21]" />
      <Cloud className="w-[173px] h-20 max-sm:hidden absolute top-1/2 right-20 fill-[#FFFFFF21]" />
      <Cloud className="w-[173px] h-20 max-sm:hidden absolute bottom-32 left-60 fill-[#FFFFFF26]" />
      <Cloud className="w-[173px] h-20 max-sm:scale-75 absolute bottom-8 left-0 fill-[#FFFFFF26]" />

      <h2 className="theme-h2 mb-2 font-semibold text-[#030E36]">
        Contact our Team
      </h2>

      <div className="mb-8 lg:mb-12 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[#494949] text-center">
        Just fill out the form and we will be in touch with you <br /> as soon as possible!
      </div>

      <form
        className="max-w-xs md:max-w-md mx-auto mb-16 p-8 text-sm md:text-base bg-[#FAFBFC] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Cloud className="max-sm:hidden absolute top-8 -right-40 -z-10 fill-[#5482F9DE]" />
        <Cloud className="max-sm:hidden absolute top-20 -left-40 -z-10 fill-[#5482F9DE]" />

        <label
          className="block mb-2 text-[#837F7F]"
          htmlFor="contact-form-name"
        >
          Name
        </label>

        <input
          id="contact-form-name"
          type="text"
          className="bg-[#F0F3F4] rounded shadow-[inset_0_4px_4px_rgba(0,0,0,0.01)]"
          {...register("Name", {
            required: "Name is required"
          })}
        />

        {
          errors.Name &&
          <p className='text-xs text-red-500'>
            {errors.Name.message}
          </p>
        }

        <label
          className="block mt-6 mb-2 text-[#837F7F]"
          htmlFor="contact-form-email"
        >
          Email
        </label>

        <input
          id="contact-form-email"
          type="email"
          className="bg-[#F0F3F4] rounded shadow-[inset_0_4px_4px_rgba(0,0,0,0.01)]"
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email"
            },
          })}
        />

        {
          errors.Email &&
          <p className='text-xs text-red-500'>
            {errors.Email.message}
          </p>
        }

        <label
          className="block mt-6 mb-2 text-[#837F7F]"
          htmlFor="contact-form-"
        >
          Mobile Number
        </label>

        <input
          id="contact-form-"
          type="text"
          className="bg-[#F0F3F4] rounded shadow-[inset_0_4px_4px_rgba(0,0,0,0.01)]"
          {...register("Phone")}
        />

        <label
          className="block mt-6 mb-2 text-[#837F7F]"
          htmlFor="contact-form-interested"
        >
          Interested product
        </label>

        <input
          id="contact-form-interested"
          type="text"
          className="bg-[#F0F3F4] rounded shadow-[inset_0_4px_4px_rgba(0,0,0,0.01)]"
          {...register("Interested_product", {
            required: "Interested product is required"
          })}
        />

        {
          errors.Interested_product &&
          <p className='text-xs text-red-500'>
            {errors.Interested_product.message}
          </p>
        }

        <button
          className="block mx-auto mt-12 px-12 py-2 rounded bg-primary text-white"
          type='submit'
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default ApplicationForm