import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import { AlertContext } from "../context/alert/alertContext"

export const Alert = () => {
  const { hide, alert } = useContext(AlertContext)
  let bsType = ""
  let strongJsx = ""

  // if (!alert.visible) return null

  switch (alert.type) {
    case "success":
      strongJsx = "Успех!"
      bsType = "success"
      break
    case "warning":
      strongJsx = "Внимание!"
      bsType = "warning"
      break
    case "danger":
      strongJsx = "Ошибка!"
      bsType = "danger"
      break
    default:
      bsType = "warning"
      break
  }

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${bsType} alert-dismissible`}>
        <div>
          <strong>{strongJsx}</strong>
        </div>
        {alert.text}
        <button
          onClick={hide}
          type='button'
          className='close'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </CSSTransition>
  )
}
