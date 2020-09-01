import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const siteKey = '6LcsKMYZAAAAAA3j5OwToxdwdGu5XFIWlLU3CfLA'


const Captcha = (props) => {
  const onChange = async(value) => {
    console.log("Captcha value:", value);
    props.setCaptchaToken(value);
  }
  return (
    <div>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
      />
    </div>
  )
}

export default Captcha