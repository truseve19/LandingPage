import { useForm } from 'react-hook-form';
import Image from "next/image";

import Modal from "../../UIComp/Modal";

function ConnectUs({ isOpen, closeModal }) {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
      Interested_product: "",
    }
  })

  const onSubmit = async data => {
    try {
      await fetch("https://api.airtable.com/v0/app6UE6RbpyjRUCFk/ConnectUs", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer patI8oA02uZF2km4I.a28ee2c5d66b575c1929f22937f23a679af04928561d4235180a1a0287b2d5ce"
        },
        body: JSON.stringify({
          records: [{ fields: data }]
        })
      })

      closeModal()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title=""
    >
      <form
        className="px-4 text-left"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="df gap-3 -mt-1 mb-4 text-xl lg:text-[26px] font-bold text-[#202020]">
          <Image
            height={24}
            width={24}
            src="/icon-truseve.png"
            alt=""
            className="rotate-12 scale-[1.2] -ml-3"
          />
          Connect with us !
        </h1>

        <div className="mb-4">
          <label htmlFor="connect-us-name" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Name
          </label>

          <input
            className="border border-[#B9B0B05C] rounded-[10px]"
            type="text"
            name=""
            id="connect-us-name"
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
        </div>

        <div className="mb-4">
          <label htmlFor="connect-us-email" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Business email
          </label>

          <input
            className="border border-[#B9B0B05C] rounded-[10px]"
            type="email"
            name=""
            id="connect-us-email"
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
        </div>

        <div className="mb-4">
          <label htmlFor="connect-us-mobile" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Mobile number
          </label>

          <input
            className="border border-[#B9B0B05C] rounded-[10px]"
            type="text"
            name=""
            id="connect-us-mobile"
            {...register("Phone")}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="connect-us-interested" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Interested product
          </label>

          <input
            className="border border-[#B9B0B05C] rounded-[10px]"
            type="text"
            name=""
            id="connect-us-interested"
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
        </div>

        <button
          className="block mx-auto px-12 py-1.5 bg-primary text-white"
          type='submit'
        >
          Submit
        </button>
      </form>
    </Modal>
  )
}

export default ConnectUs