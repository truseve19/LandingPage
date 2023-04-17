import Image from "next/image";

function Animater({ data = [], selected, wrapperCls = "" }) {
  return (
    <div className={`dc key-service-box ${wrapperCls}`}>
      {
        data.map(d => (
          <div
            key={d.id}
            className={`dc key-service-img-box ${d.id === selected ? d.animateProps.from : d.animateProps.to}`}
          >
            <Image {...d.imgProps} />
          </div>
        ))
      }
    </div>
  )
}

export default Animater