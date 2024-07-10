import { TextField } from "@mui/material";
import React from "react";
import ButtonPrimary from './ButtonPrimary';

const FormContact = () => {
  return (
    <form className=" h-[700px]  w-[50%] flex flex-col justify-start gap-9 items-end">
      <div className="flex justify-between w-full ">
      <TextField id="standard-basic" label="Your name" className="w-64" variant="standard" />
      <TextField id="standard-basic" label="Email" className="w-64" variant="standard" />
      </div>
      <TextField id="standard-basic" className="w-full" label="Message" variant="standard" />
      <ButtonPrimary text='Send Message'/>
    </form>
  );
};

export default FormContact;
