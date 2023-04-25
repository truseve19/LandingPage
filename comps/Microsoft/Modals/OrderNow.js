import { useForm } from 'react-hook-form';
import { successNotify } from '../../../helper/toastify';
import Modal from "../../UIComp/Modal";

const list = [
  {
    label: "Name",
    name: "Name",
  },
  {
    label: "Organisation Name",
    name: "OrgName",
  },
  {
    label: "Email",
    name: "Email",
    validation: {
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email"
      },
    }
  },
  {
    label: "Mobile number",
    name: "Phone",
    validation: {
      required: false,
    }
  },
  {
    label: "Domain/Website URL",
    name: "Domain",
  },
]

const buisnessPlan = ["Business Basic", "Business Standard", "Business Premium"]
const enterprisePlan = ["E3", "E5", "F3"]

function OrderNow({ isOpen, type, selected = "", closeModal }) {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      Name: "",
      OrgName: "",
      Email: "",
      Phone: "",
      Domain: "",
      Interested_product: selected,
    }
  })

  const options = type === "buisness" ? buisnessPlan : enterprisePlan

  const onSubmit = async fields => {
    try {
      await fetch("https://api.airtable.com/v0/app6UE6RbpyjRUCFk/OrderNow", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer patI8oA02uZF2km4I.a28ee2c5d66b575c1929f22937f23a679af04928561d4235180a1a0287b2d5ce"
        },
        body: JSON.stringify({
          records: [{ fields }]
        })
      })

      successNotify("We will contact you shortly")
      closeModal()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Order Now!"
    >
      <form
        className="w-[70vw] md:w-[620px] text-left"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 sm:gap-y-6 my-4 sm:my-8">
          {
            list.map(l => (
              <div key={l.name}>
                <label htmlFor={`order-${l.name}`} className="text-[15px] font-medium text-[#6B6B6BC9]">
                  {l.label}
                </label>

                <input
                  className="border border-[#B9B0B05C] rounded-[10px]"
                  type={l.name === "Email" ? "email" : "text"}
                  id={`order-${l.name}`}
                  {...register(l.name, {
                    required: `${l.label} is required`,
                  })}
                />

                {
                  errors[l.name] &&
                  <p className='text-xs text-red-500'>
                    {errors[l.name].message}
                  </p>
                }
              </div>
            ))
          }

          <div>
            <label htmlFor="order-interested" className="text-[15px] font-medium text-[#6B6B6BC9]">
              Interested Product
            </label>

            <select
              id="order-interested"
              className="border border-[#B9B0B05C] rounded-[10px]"
              {...register("Interested_product", {
                required: "Interested Product is required"
              })}
            >
              {
                options.map(o => (
                  <option value={o} key={o}>{o}</option>
                ))
              }
            </select>

            {
              errors.Interested_product &&
              <p className='text-xs text-red-500'>
                {errors.Interested_product.message}
              </p>
            }
          </div>
        </div>

        <button className="block mx-auto px-12 py-1.5 xs:px-20 xs:py-2">
          Submit
        </button>
      </form>
    </Modal>
  )
}

export default OrderNow