'use client'

import { useId, useState } from 'react'
import { Check } from 'lucide-react'
import { contactMessage, contactReasons, type ContactReason } from '@/lib/whatsapp'
import { WhatsAppButton } from '../WhatsAppButton'

/** Arma el mensaje de WhatsApp según el motivo. Nada se envía ni se guarda en este sitio. */
export function ContactComposer() {
  const id = useId()
  const [reason, setReason] = useState<ContactReason>('compra')
  const [detail, setDetail] = useState('')
  const message = contactMessage(reason, detail)

  return (
    <form className="grid gap-3 lg:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
      <fieldset className="tile tile-light p-7 md:p-10">
        <legend className="sr-only">Motivo de la consulta</legend>
        <p className="t-title" aria-hidden>
          ¿Sobre qué quieres hablar?
        </p>
        <div className="mt-6 grid gap-2">
          {contactReasons.map((r) => (
            <label
              key={r.id}
              className="group flex cursor-pointer items-center gap-4 rounded-[20px] bg-white p-4 shadow-[0_0_0_1px_var(--color-keyline)] transition-shadow duration-300 has-[:checked]:shadow-[0_0_0_2px_var(--color-violet)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-violet"
            >
              <input type="radio" name={`${id}-reason`} value={r.id} checked={reason === r.id} onChange={() => setReason(r.id)} className="sr-only" />
              <span className="grid size-6 shrink-0 place-items-center rounded-full border border-keyline text-white transition-colors duration-300 group-has-[:checked]:border-violet group-has-[:checked]:bg-violet" aria-hidden>
                <Check size={14} strokeWidth={3} className="scale-0 transition-transform duration-300 group-has-[:checked]:scale-100" />
              </span>
              <span>
                <span className="block font-semibold">{r.title}</span>
                <span className="t-small text-slate">{r.description}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="tile tile-light flex flex-col p-7 md:p-10">
        <label htmlFor={`${id}-detail`} className="t-title">
          Cuéntanos más <span className="t-small font-normal text-slate">(opcional)</span>
        </label>
        <textarea
          id={`${id}-detail`}
          rows={5}
          maxLength={600}
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Modelo de tu equipo, qué necesitas, presupuesto…"
          className="mt-5 w-full resize-y rounded-[20px] border border-keyline bg-white p-5 text-ink placeholder:text-slate"
        />
        <h2 className="t-small mt-6 text-slate">Vista previa del mensaje</h2>
        <p key={reason} className="swap-in t-small mt-2 max-h-48 overflow-auto whitespace-pre-wrap rounded-[20px] bg-white p-5 text-ink shadow-[0_0_0_1px_var(--color-keyline)]">
          {message}
        </p>
        <WhatsAppButton message={message} className="mt-6 w-full">
          Abrir WhatsApp
        </WhatsAppButton>
      </div>
    </form>
  )
}
