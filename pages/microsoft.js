import { NextSeo } from 'next-seo';

import Microsoft from "../comps/Microsoft";

function microsoft() {
  return (
    <>
      <NextSeo
        title="Microsoft 365 Services for All Businesses | Boost Productivity & Collaboration | Truseve"
        description='Our Microsoft 365 services provide top-tier solutions for businesses of all sizes. Enhance teamwork, streamline workflows, and boost productivity today.'
        canonical='https://www.truseve.com/microsoft'
      />

      <Microsoft />
    </>
  )
}

export default microsoft