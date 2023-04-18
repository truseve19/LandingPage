import Animater from "./Animater";
import { dataSpecial } from "./data";

function SpecialBox({ selected }) {
  return (
    <div className="flex xs:flex-col gap-2 xs:gap-6 max-xs:col-span-3 xs:row-span-2 bg-white rounded-md md:rounded-xl">
      {
        dataSpecial.map(d => (
          <Animater
            key={d.id}
            data={d.list}
            selected={selected}
            wrapperCls={`flex-1 ${d.className}`}
          />
        ))
      }
    </div>
  )
}

export default SpecialBox