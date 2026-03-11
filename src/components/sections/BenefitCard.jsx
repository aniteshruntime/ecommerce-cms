import React from 'react'

export default function BenefitCard({title, description, image})
{
  return (
    <div className="rounded-2xl shadow-xl hover:shadow-2xl max-w-100 px-6 py-10 bg-white">
      <div>

      </div>
      <div className="space-y-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-[#555]">{description}</p>
      </div>

    </div>
  )
}
